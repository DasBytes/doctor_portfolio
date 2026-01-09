import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function sendMail(to, subject, text) {
  await transporter.sendMail({
    from: `Dr. Rakhee Das <${process.env.EMAIL}>`,
    to,
    subject,
    text,
  });
}
