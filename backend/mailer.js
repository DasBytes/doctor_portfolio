import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function sendMail(to, subject, text) {
  await transporter.sendMail({
    from: "Dr. Rakhee Das <clinic@gmail.com>",
    to,
    subject,
    text,
  });
}
