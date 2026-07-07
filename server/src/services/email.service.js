const nodemailer = require("nodemailer");


const sendVerificationEmail = async (email, token) => {
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Verify your AI PromptVault account",
      html: `
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

          <p style="margin-top:24px;">
            Or copy and paste this link into your browser:
          </p>

          <p>
            <a href="${verificationUrl}">
              ${verificationUrl}
            </a>
          </p>

          <hr />

          <p style="color:#666;font-size:13px;">
            If you didn't create this account, you can safely ignore this email.
          </p>
        </div>
      `,
    });

    console.log("✅ Verification email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Verification Email Error:", error);
    throw error;
  }
};

const sendPasswordResetEmail = async (email, token) => {
  const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}`;

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Reset your AI PromptVault password",
      html: `
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

          <p style="margin-top:24px;">
            Or copy and paste this link:
          </p>

          <p>
            <a href="${resetUrl}">
              ${resetUrl}
            </a>
          </p>

          <p style="color:#666;font-size:13px;">
            This link expires in 15 minutes.
          </p>

          <hr />

          <p style="color:#666;font-size:13px;">
            If you didn't request a password reset, simply ignore this email.
          </p>
        </div>
      `,
    });

    console.log("✅ Password reset email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Password Reset Email Error:", error);
    throw error;
  }
};

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail,
};