const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "AI PromptVault API",
      version: "1.0.0",
      termsOfService: "https://github.com/Prashant9155",
      description: `
            ## AI PromptVault REST API

            Production-ready REST API built with:

            - Node.js
            - Express.js
            - Prisma ORM
            - PostgreSQL
            - JWT Authentication

            ### Current Module

            - Authentication
            - Session Management

            ### Upcoming Modules

            - Prompt Management
            - Collections
            - AI Search
            - Admin Dashboard
            `,
      contact: {
        name: "Prashant Kumar",
        email: "prashantsin2gh@gmail.com",
        url: "https://github.com/Prashant9155",
      },
      license: {
        name: "MIT",
      },
    },
    tags: [
      {
        name: "Authentication",
        description: "Authentication and Authorization APIs",
      },
      {
        name: "Sessions",
        description: "User session management",
      },
      {
        name: "Prompts",
        description: "AI Prompt CRUD operations",
      },
      {
        name: "Collections",
        description: "Prompt collections",
      },
    ],

    servers: [
      {
        url: "http://localhost:8000/api/v1",
        description: "Local Development",
      },
      {
        url: "https://api.aipromptvault.com/api/v1",
        description: "Production",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },

        refreshTokenCookie: {
          type: "apiKey",
          in: "cookie",
          name: "refreshToken",
        },
      },

      schemas: {
        RegisterRequest: {
          type: "object",
          required: ["firstName", "email", "password"],
          example: {
            firstName: "Prashant",
            lastName: "Kumar",
            email: "prashant@example.com",
            password: "Password@123",
          },
          properties: {
            firstName: {
              type: "string",
              example: "Prashant",
            },
            lastName: {
              type: "string",
              example: "Kumar",
            },
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

        LoginRequest: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              example: "prashant@example.com",
            },
            password: {
              type: "string",
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
              example: "xxxxxxxxxxxxxxxx",
            },
            password: {
              type: "string",
              example: "NewPassword@123",
            },
          },
        },

        SuccessResponse: {
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
              example: "Success",
            },
          },
        },

        ErrorResponse: {
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
        UserResponse: {
          type: "object",
          createdAt: {
            type: "string",
            format: "date-time",
          },

          updatedAt: {
            type: "string",
            format: "date-time",
          },
          properties: {
            id: {
              type: "string",
              example: "cmr0og9ck0000xmy1yyl2rlp9",
            },
            firstName: {
              type: "string",
              example: "Prashant",
            },
            lastName: {
              type: "string",
              example: "Kumar",
            },
            email: {
              type: "string",
              example: "prashant@example.com",
            },
            role: {
              type: "string",
              enum: ["USER", "ADMIN"],
              example: "USER",
            },
            isEmailVerified: {
              type: "boolean",
              example: true,
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
              example: "Invalid email or password",
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
              example: "Please verify your email before logging in.",
            },
          },
        },
      },
    },
  },
  externalDocs: {
    description: "GitHub Repository",
    url: "https://github.com/Prashant9155/ai-promptvault",
  },

  apis: ["./src/docs/*.swagger.js"],
};

module.exports = swaggerJsdoc(options);
