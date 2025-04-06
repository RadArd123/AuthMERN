import {mailtrapClient} from "./mailtrap.js";
import {sender} from "./mailtrap.js";
import {VERIFICATION_EMAIL_TEMPLATE,WELCOME_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE} from "./emailTemplate.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const reciepient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from : sender,
            to: reciepient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category: "Email Verification",
        })
        console.log("Email sent successfully", response);
    }catch(err){
        console.error("Error sending email", err);
        throw new Error(`Error sending email:${err.message}`);
    }
}
export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            subject: "Welcome to our app",
            html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
            category: "Welcome Email",
        })
    }catch(err){
        console.error("Error sending email", err);
        throw new Error(`Error sending email:${err.message}`);
    }

};
export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};
export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        });
    }catch(err){
        console.error("Error sending email", err);
        throw new Error(`Error sending email:${err.message}`);
    }
};