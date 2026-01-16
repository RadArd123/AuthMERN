import {User} from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import crypto from "crypto"
import {generateTokenAndSetCookie} from "../utils/generateTokenAndSetCookie.js"

import { sendEmail } from "../mail/mailer.js";
import {VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE} from "../mail/emailTemplate.js"


export const signup = async (req, res) => {
    const {email, password, name} = req.body;
    try{
        if(!email || !password || !name){
            throw new Error("All fields are required")
        }
        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            return res.status(400).json({success:false, message: "User already exists"});
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();//generează un cod de verificare din 6 cifre, sub formă de string

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        })
        await user.save();

        //jwt
        generateTokenAndSetCookie(res,user._id);


        //send verification email
          await sendEmail({
            to: email,
            subject: "Welcome to My App!",
            text: "Thanks for signing up 🎉",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            });


        res.status(201).json({success: true, message: "User created successfully",
            user: {
            _id: user._id,
            email: user.email,
            name: user.name,
            isVerified: user.isVerified,
            createdAt: user.createdAt
        }
        })
    }catch(err){
        res.status(400).json({success: false, message: err.message})
    }
};
export const verifyEmail = async (req, res) => {
    const {code} = req.body;
    try{
        const user = await User.findOne({
			verificationToken: code,
			verificationTokenExpiresAt: { $gt: Date.now() }, // Verifică dacă tokenul nu a expirat
		});
        if(!user){
            return res.status(400).json({success: false, message: "Invalid or expired verification code"});
        }
        
        //email verified, send welcome email
        await sendEmail({
            to: user.email,
            subject: "Email Verified Successfully",
            text: "Your email has been verified successfully. You can now access all features of our application.",
            html: WELCOME_EMAIL_TEMPLATE.replace("{name}", user.name),
            });

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        await user.save();

        res.status(200).json({
            success: true, 
            message: "Email verified successfully",
            user:{
                ...user._doc,
                password: undefined,
            }
        });


    }catch(err){
        console.log("Error verifying email", err);
        res.status(400).json({success: false, message: err.message})
    }
}
export const login = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success: false, message: "Invalid credentials"});
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({success: false, message: "Invalid credentials"});
        }

        generateTokenAndSetCookie(res,user._id);

        user.lastLogin = new Date();

        await user.save();

        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user:{
                ...user._doc,
                password: undefined,
            },
            });
        
    }catch(err){
        res.status(500).json({success: false, message: err.message})
    }
};
export const logout = async (req, res) => {

    res.clearCookie("token");
    
    res.status(200).json({success: true, message: "Logged out successfully"});
};

export const forgotPassword = async (req,res) => {
    const {email} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success: false, message: "User not found"});
        }
        const resetToken = crypto.randomBytes(20).toString("hex"); //generează un token de resetare parolă foarte sigur
        const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;//1 hours'
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;

        await user.save();
        
        //email reset password
        await sendEmail({
            to: user.email,
            subject: "Password Reset Request",
            text: `You requested a password reset. Use the following link to reset your password: ${process.env.FRONTEND_URL}/reset-password/${resetToken}. This link expires in 1 hour.`,
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", `${process.env.FRONTEND_URL}/reset-password/${resetToken}`),
            });
       
        res.status(200).json({success: true, message: "Password reset email sent"});

    }catch(err){ 
        console.log("Error sending password reset email", err);
        res.status(400).json({success: false, message: err.message})
    }
};
export const resetPassword = async (req,res) => {
    try{
        const {token} = req.params;
        const {password} = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: {$gt: Date.now()}
        })
        if(!user){
            return res.status(400).json({success: false, message: "Invalid or expired reset token"});
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;
        await user.save();

         await sendEmail({
            to: user.email,
            subject: "Password Reset Successful",
            text: "Your password has been reset successfully.",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        });

        res.status(200).json({success: true, message: "Password reset successfully"});
    }catch(err){
        console.log("Error resetting password", err);
        res.status(400).json({success: false, message: err.message});
    }
};
export const checkAuth = async (req, res) => {
    try{
        const user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(400).json({success: false, message: "User not found"});
        }
        res.status(200).json({success: true, user});
    }catch(err){
        console.log("Error checking auth", err);
        res.status(400).json({success: false, message: err.message});
    }
};
