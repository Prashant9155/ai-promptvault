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
      },
    );

    console.log("✅ Email sent:", response.data);
  } catch (error) {
    console.error(
      "❌ Brevo Email Error:",
      error.response?.data || error.message,
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
        <div style="
        background:#f5f7fb;
        padding:40px 20px;
        font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        ">

        <div style="
        max-width:620px;
        margin:auto;
        background:#ffffff;
        border-radius:16px;
        overflow:hidden;
        box-shadow:0 10px 35px rgba(0,0,0,.08);
        ">

        <div style="
            background:#111827;
            text-align:center;
            padding:32px;
        ">

            <img
            src="${process.env.LOGO_URL}"
            alt="AI PromptVault"
            width="70"
            style="margin-bottom:14px;"
            />

            <h1 style="
            color:white;
            margin:0;
            font-size:30px;
            ">
            AI PromptVault
            </h1>

            <p style="
            color:#d1d5db;
            margin-top:10px;
            font-size:15px;
            ">
            Secure your AI prompts in one place.
            </p>

        </div>

        <div style="padding:40px">

            <h2 style="
            margin-top:0;
            color:#111827;
            ">
            Welcome 👋
            </h2>

            <p style="
            color:#4b5563;
            line-height:1.8;
            ">
            Thanks for joining <strong>AI PromptVault</strong>.
            </p>

            <p style="
            color:#4b5563;
            line-height:1.8;
            ">
            Please verify your email address to activate your account.
            </p>

            <div style="text-align:center;margin:40px 0;">

            <a
                href="${verificationUrl}"
                style="
                background:#2563eb;
                color:#fff;
                padding:16px 34px;
                border-radius:12px;
                text-decoration:none;
                display:inline-block;
                font-weight:600;
                font-size:16px;
                "
            >
                Verify Email
            </a>

            </div>

            <p style="
            color:#6b7280;
            font-size:14px;
            ">
            This verification link expires in
            <strong>24 hours</strong>.
            </p>

            <p style="
            color:#6b7280;
            font-size:14px;
            word-break:break-word;
            ">
            ${verificationUrl}
            </p>

            <hr style="
            margin:35px 0;
            border:none;
            border-top:1px solid #e5e7eb;
            ">

            <p style="
            color:#9ca3af;
            font-size:13px;
            line-height:1.7;
            ">
            If you didn't create an account,
            you can safely ignore this email.
            </p>

        </div>

        </div>

        <div style="
        text-align:center;
        margin-top:25px;
        color:#9ca3af;
        font-size:13px;
        ">

        © ${new Date().getFullYear()} AI PromptVault

        </div>

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
            <div style="
            background:#f5f7fb;
            padding:40px 20px;
            font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
            ">

            <div style="
            max-width:620px;
            margin:auto;
            background:#ffffff;
            border-radius:16px;
            overflow:hidden;
            box-shadow:0 10px 35px rgba(0,0,0,.08);
            ">

            <!-- Header -->
            <div style="
                background:#111827;
                text-align:center;
                padding:32px;
            ">

                <img
                src="${process.env.LOGO_URL}"
                alt="AI PromptVault"
                width="72"
                style="margin-bottom:16px;"
                />

                <h1 style="
                color:#ffffff;
                margin:0;
                font-size:30px;
                font-weight:700;
                ">
                AI PromptVault
                </h1>

                <p style="
                color:#d1d5db;
                margin-top:10px;
                font-size:15px;
                ">
                Secure your AI prompts in one place.
                </p>

            </div>

            <!-- Body -->
            <div style="padding:40px">

                <h2 style="
                margin-top:0;
                color:#111827;
                font-size:28px;
                ">
                🔒 Reset Your Password
                </h2>

                <p style="
                color:#4b5563;
                line-height:1.8;
                font-size:16px;
                ">
                We received a request to reset the password for your
                <strong>AI PromptVault</strong> account.
                </p>

                <p style="
                color:#4b5563;
                line-height:1.8;
                font-size:16px;
                ">
                Click the button below to create a new password.
                </p>

                <div style="
                text-align:center;
                margin:40px 0;
                ">

                <a
                    href="${resetUrl}"
                    style="
                    display:inline-block;
                    background:#dc2626;
                    color:#ffffff;
                    text-decoration:none;
                    padding:16px 36px;
                    border-radius:12px;
                    font-size:16px;
                    font-weight:600;
                    "
                >
                    Reset Password
                </a>

                </div>

                <div style="
                background:#f9fafb;
                border:1px solid #e5e7eb;
                border-radius:10px;
                padding:18px;
                margin:30px 0;
                ">

                <p style="
                    margin:0;
                    color:#374151;
                    font-size:14px;
                    line-height:1.8;
                ">
                    <strong>This reset link will expire in 15 minutes.</strong><br><br>
                    If the button doesn't work, copy and paste the link below into your browser:
                </p>

                <p style="
                    margin-top:16px;
                    word-break:break-word;
                    font-size:14px;
                ">
                    <a
                    href="${resetUrl}"
                    style="color:#2563eb;"
                    >
                    ${resetUrl}
                    </a>
                </p>

                </div>

                <hr style="
                border:none;
                border-top:1px solid #e5e7eb;
                margin:35px 0;
                ">

                <p style="
                color:#6b7280;
                font-size:14px;
                line-height:1.8;
                ">
                If you didn't request a password reset, you can safely ignore this email.
                Your password will remain unchanged.
                </p>

            </div>

            </div>

            <!-- Footer -->
            <div style="
            max-width:620px;
            margin:24px auto 0;
            text-align:center;
            color:#9ca3af;
            font-size:13px;
            line-height:1.8;
            ">

            <strong>AI PromptVault</strong><br>
            Secure. Organize. Discover Better AI Prompts.<br><br>

            © ${new Date().getFullYear()} AI PromptVault

            </div>

            </div>
            `,
  });
};

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail,
};
