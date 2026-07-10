const authSchemas = {
  RegisterRequest: {
    type: "object",
    required: ["firstName", "email", "password"],
    description: "Request payload for user registration.",

    properties: {
      firstName: {
        type: "string",
        description: "User's first name.",
        example: "Prashant",
      },

      lastName: {
        type: "string",
        description: "User's last name.",
        example: "Kumar",
      },

      email: {
        type: "string",
        format: "email",
        description: "Unique email address.",
        example: "prashant@example.com",
      },

      password: {
        type: "string",
        format: "password",
        description:
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
        example: "Password@123",
      },
    },
  },

  LoginRequest: {
    type: "object",
    required: ["email", "password"],
    description: "Request payload for user login.",

    properties: {
      email: {
        type: "string",
        format: "email",
        example: "prashant@example.com",
      },

      password: {
        type: "string",
        format: "password",
        example: "Password@123",
      },
    },
  },

  ForgotPasswordRequest: {
    type: "object",
    required: ["email"],

    description:
      "Request payload to receive a password reset email.",

    properties: {
      email: {
        type: "string",
        format: "email",
        example: "prashant@example.com",
      },
    },
  },

  ResetPasswordRequest: {
    type: "object",

    required: ["token", "password"],

    description: "Reset password using a valid reset token.",

    properties: {
      token: {
        type: "string",
        description: "Password reset token.",
        example: "1dc1d5be52c1d41a8fd2b....",
      },

      password: {
        type: "string",
        format: "password",
        description: "New password.",
        example: "NewPassword@123",
      },
    },
  },

  LoginResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",

        properties: {
          data: {
            type: "object",

            properties: {
              accessToken: {
                type: "string",
                description: "JWT access token.",
                example:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
              },

              user: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    ],
  },

  RegisterResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",

        properties: {
          data: {
            type: "object",

            properties: {
              id: {
                type: "string",
                example: "cmcx2a6q10000x123abcd5678",
              },

              email: {
                type: "string",
                example: "prashant@example.com",
              },
            },
          },
        },
      },
    ],
  },

  RefreshTokenResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",

        properties: {
          data: {
            type: "object",

            properties: {
              accessToken: {
                type: "string",
                description: "New JWT access token.",
                example:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
              },
            },
          },
        },
      },
    ],
  },

  VerifyEmailResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",

        properties: {
          message: {
            type: "string",
            example: "Email verified successfully.",
          },
        },
      },
    ],
  },

  ForgotPasswordResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",

        properties: {
          message: {
            type: "string",
            example:
              "Password reset email sent successfully.",
          },
        },
      },
    ],
  },

  ResetPasswordResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",

        properties: {
          message: {
            type: "string",
            example: "Password reset successfully.",
          },
        },
      },
    ],
  },
};

module.exports = authSchemas;