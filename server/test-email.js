const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

(async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: "prashantsin2gh@gmail.com",
      subject: "SMTP Test",
      text: "Hello from AI PromptVault!",
    });

    console.log(info);
  } catch (err) {
    console.error(err);
  }
})();