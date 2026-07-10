const commonSchemas = {
  SuccessResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        description: "Request status",
        example: true,
      },
      statusCode: {
        type: "integer",
        description: "HTTP status code",
        example: 200,
      },
      message: {
        type: "string",
        description: "Response message",
        example: "Operation completed successfully",
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
      errors: {
        type: "array",
        description: "Validation errors",
        items: {
          type: "object",
          properties: {
            field: {
              type: "string",
              example: "email",
            },
            message: {
              type: "string",
              example: "Email is required",
            },
          },
        },
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

module.exports = commonSchemas;