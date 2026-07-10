const schemas = {
  RegisterRequest: {
    type: "object",
    required: ["firstName", "email", "password"],
    properties: {
      firstName: {
        type: "string",
        description: "User's first name",
        example: "Prashant",
      },
      lastName: {
        type: "string",
        description: "User's last name",
        example: "Kumar",
      },
      email: {
        type: "string",
        format: "email",
        description: "Unique email address",
        example: "prashant@example.com",
      },
      password: {
        type: "string",
        format: "password",
        description: "Password (minimum 8 characters)",
        example: "Password@123",
      },
    },
  },

  LoginRequest: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        format: "email",
        description: "Registered email address",
        example: "prashant@example.com",
      },
      password: {
        type: "string",
        format: "password",
        description: "User password",
        example: "Password@123",
      },
    },
  },

  ForgotPasswordRequest: {
    type: "object",
    required: ["email"],
    properties: {
      email: {
        type: "string",
        format: "email",
        description: "Registered email address",
        example: "prashant@example.com",
      },
    },
  },

  ResetPasswordRequest: {
    type: "object",
    required: ["token", "password"],
    properties: {
      token: {
        type: "string",
        description: "Password reset token received via email",
        example: "b0dbb8d7cb2f...",
      },
      password: {
        type: "string",
        format: "password",
        description: "New password",
        example: "NewPassword@123",
      },
    },
  },

  UserResponse: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "Unique user ID",
        example: "cmr0og9ck0000xmy1yyl2rlp9",
      },
      firstName: {
        type: "string",
        description: "User's first name",
        example: "Prashant",
      },
      lastName: {
        type: "string",
        description: "User's last name",
        example: "Kumar",
      },
      email: {
        type: "string",
        format: "email",
        description: "Registered email",
        example: "prashant@example.com",
      },
      role: {
        type: "string",
        enum: ["USER", "ADMIN"],
        description: "User role",
        example: "USER",
      },
      isEmailVerified: {
        type: "boolean",
        description: "Email verification status",
        example: true,
      },
      createdAt: {
        type: "string",
        format: "date-time",
        description: "User creation timestamp",
        example: "2026-07-09T10:25:00.000Z",
      },
      updatedAt: {
        type: "string",
        format: "date-time",
        description: "Last update timestamp",
        example: "2026-07-09T10:30:00.000Z",
      },
    },
  },

  RegisterResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      statusCode: {
        type: "integer",
        example: 201,
      },
      message: {
        type: "string",
        example: "User registered successfully",
      },
      data: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "cmr0og9ck0000xmy1yyl2rlp9",
          },
          email: {
            type: "string",
            example: "prashant@example.com",
          },
        },
      },
    },
  },

  LoginResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      statusCode: {
        type: "integer",
        example: 200,
      },
      message: {
        type: "string",
        example: "Login successful",
      },
      data: {
        type: "object",
        properties: {
          accessToken: {
            type: "string",
            description: "JWT Access Token",
            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          },
          user: {
            $ref: "#/components/schemas/UserResponse",
          },
        },
      },
    },
  },

  ValidationError: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      statusCode: {
        type: "integer",
        example: 400,
      },
      message: {
        type: "string",
        example: "Validation failed",
      },
    },
  },

  UnauthorizedError: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      statusCode: {
        type: "integer",
        example: 401,
      },
      message: {
        type: "string",
        example: "Unauthorized",
      },
    },
  },

  ForbiddenError: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      statusCode: {
        type: "integer",
        example: 403,
      },
      message: {
        type: "string",
        example: "Forbidden",
      },
    },
  },

  ConflictError: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      statusCode: {
        type: "integer",
        example: 409,
      },
      message: {
        type: "string",
        example: "Resource already exists",
      },
    },
  },

  NotFoundError: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      statusCode: {
        type: "integer",
        example: 404,
      },
      message: {
        type: "string",
        example: "Resource not found",
      },
    },
  },

  InternalServerError: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      statusCode: {
        type: "integer",
        example: 500,
      },
      message: {
        type: "string",
        example: "Internal server error",
      },
    },
  },
};

module.exports = schemas;