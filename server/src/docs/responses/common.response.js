const responses = {
  BadRequest: {
    description: "Validation Error",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/ValidationError",
        },
      },
    },
  },

  Unauthorized: {
    description: "Unauthorized",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/UnauthorizedError",
        },
      },
    },
  },

  Forbidden: {
    description: "Forbidden",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/ForbiddenError",
        },
      },
    },
  },

  NotFound: {
    description: "Resource not found",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/NotFoundError",
        },
      },
    },
  },

  Conflict: {
    description: "Conflict",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/ConflictError",
        },
      },
    },
  },

  ServerError: {
    description: "Internal Server Error",
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/InternalServerError",
        },
      },
    },
  },
};

module.exports = responses;