const swaggerJsdoc = require("swagger-jsdoc");

const securitySchemes = require("./security.swagger");
const schemas = require("./schemas");
const responses = require("./responses");

const options = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "AI PromptVault API",
      version: "1.0.0",
      description: `
# AI PromptVault REST API

Production-ready REST API built using Node.js, Express.js, Prisma ORM, PostgreSQL and Gemini AI.

## Features

- JWT Authentication
- Session Management
- Prompt CRUD
- Collections
- Tags
- AI Prompt Generation
- AI Prompt Improvement
- Prompt Version History

## Authentication

Protected endpoints require:

Authorization: Bearer <access_token>

Refresh tokens are stored securely in an HTTP-only cookie.

`,
      contact: {
        name: "Prashant Kumar",
        email: "prashantsin2gh@gmail.com",
        url: "https://github.com/Prashant9155",
      },

      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },

    servers: [
      {
        url: "http://localhost:8000/api/v1",
        description: "Local Development",
      },
    ],

    security: [
      {
        bearerAuth: [],
      },
    ],

    tags: [
      {
        name: "Authentication",
        description: "Authentication & Authorization APIs",
      },
      {
        name: "Sessions",
        description: "Manage active login sessions",
      },
      {
        name: "Prompts",
        description: "Prompt CRUD APIs",
      },
      {
        name: "Collections",
        description: "Manage prompt collections",
      },
      {
        name: "Tags",
        description: "Manage prompt tags",
      },
      {
        name: "AI",
        description: "AI powered prompt operations",
      },
    ],

    components: {
      securitySchemes,
      schemas,
      responses,
    },
  },

  externalDocs: {
    description: "GitHub Repository",
    url: "https://github.com/Prashant9155/ai-promptvault",
  },

  apis: [
    "./src/docs/*.swagger.js",
  ],
};

module.exports = swaggerJsdoc(options);