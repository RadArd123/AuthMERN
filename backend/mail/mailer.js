import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,        // use an App Password if Gmail
  },
});

export async function sendEmail({ to, subject, text, html }) {
  return transporter.sendMail({
    from: process.env.MAIL_FROM, // e.g. 'My App <no-reply@myapp.com>'
    to,
    subject,
    text,
    html,
  });
}