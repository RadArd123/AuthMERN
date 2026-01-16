import jwt from "jsonwebtoken"


export const generateTokenAndSetCookie = (res,userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "7d",
    });
    res.cookie("token",token,{
        httpOnly: true, //protecție împotriva XSS
        secure: process.env.NODE_ENV === "production",//cookie.ul se foloseste doar pe https in productie
        sameSite: "strict",//cookie-ul nu se trimite din alte site-uri
        maxAge: 7*24*60*60*1000,
    });
    return token;
}