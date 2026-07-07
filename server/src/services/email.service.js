const axios = require("axios");

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const sendEmail = async ({ to, subject, htmlContent }) => {
  try {
    const response = await axios.post(
      BREVO_API_URL,
      {
        sender: {
          name: "AI PromptVault",
          email: process.env.EMAIL_FROM,
        },
        to: [
          {
            email: to,
          },
        ],
        subject,
        htmlContent,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    console.log("✅ Email sent:", response.data);
  } catch (error) {
    console.error(
      "❌ Brevo Email Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const sendVerificationEmail = async (email, token) => {
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

  await sendEmail({
    to: email,
    subject: "Verify your AI PromptVault account",
    htmlContent: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px">
        <h2>Welcome to AI PromptVault 🚀</h2>

        <p>Thanks for creating your account.</p>

        <p>Please verify your email by clicking the button below.</p>

        <a
          href="${verificationUrl}"
          style="
            display:inline-block;
            padding:12px 24px;
            background:#111827;
            color:#ffffff;
            text-decoration:none;
            border-radius:8px;
            font-weight:bold;
          "
        >
          Verify Email
        </a>

        <p style="margin-top:24px">
          Or copy and paste this link into your browser:
        </p>

        <p>
          <a href="${verificationUrl}">
            ${verificationUrl}
          </a>
        </p>

        <hr />

        <p style="color:#666;font-size:13px">
          If you didn't create this account, you can safely ignore this email.
        </p>
      </div>
    `,
  });
};

const sendPasswordResetEmail = async (email, token) => {
  const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}`;

  await sendEmail({
    to: email,
    subject: "Reset your AI PromptVault password",
    htmlContent: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px">
        <h2>Reset Password</h2>

        <p>We received a request to reset your password.</p>

        <p>Click the button below to continue.</p>

        <a
          href="${resetUrl}"
          style="
            display:inline-block;
            padding:12px 24px;
            background:#dc2626;
            color:#ffffff;
            text-decoration:none;
            border-radius:8px;
            font-weight:bold;
          "
        >
          Reset Password
        </a>

        <p style="margin-top:24px">
          Or copy and paste this link:
        </p>

        <p>
          <a href="${resetUrl}">
            ${resetUrl}
          </a>
        </p>

        <p style="color:#666;font-size:13px">
          This link expires in 15 minutes.
        </p>

        <hr />

        <p style="color:#666;font-size:13px">
          If you didn't request a password reset, simply ignore this email.
        </p>
      </div>
    `,
  });
};

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail,
};