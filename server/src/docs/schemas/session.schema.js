const sessionSchemas = {
  Session: {
    type: "object",
    description: "Represents an active login session.",

    properties: {
      id: {
        type: "string",
        description: "Unique session identifier.",
        example: "cmcx5m5ih0001abc123xyz890",
      },

      userId: {
        type: "string",
        description: "Owner of the session.",
        example: "cmcx4d8pw0000xyz123abcd45",
      },

      device: {
        type: "string",
        nullable: true,
        description: "Device used to sign in.",
        example: "Desktop",
      },

      browser: {
        type: "string",
        nullable: true,
        description: "Detected browser.",
        example: "Chrome",
      },

      os: {
        type: "string",
        nullable: true,
        description: "Detected operating system.",
        example: "Windows 11",
      },

      ipAddress: {
        type: "string",
        nullable: true,
        description: "IP address of the session.",
        example: "192.168.1.100",
      },

      userAgent: {
        type: "string",
        nullable: true,
        description: "Complete User-Agent string.",
        example:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0.0.0 Safari/537.36",
      },

      lastActiveAt: {
        type: "string",
        format: "date-time",
        description: "Last activity timestamp.",
        example: "2026-07-10T12:15:00.000Z",
      },

      expiresAt: {
        type: "string",
        format: "date-time",
        description: "Session expiration timestamp.",
        example: "2026-08-10T12:15:00.000Z",
      },

      createdAt: {
        type: "string",
        format: "date-time",
        description: "Session creation timestamp.",
        example: "2026-07-10T10:00:00.000Z",
      },

      updatedAt: {
        type: "string",
        format: "date-time",
        description: "Last updated timestamp.",
        example: "2026-07-10T12:15:00.000Z",
      },
    },
  },

  SessionListResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",
        properties: {
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Session",
            },
          },
        },
      },
    ],
  },

  LogoutResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Logged out successfully",
          },
        },
      },
    ],
  },
};

module.exports = sessionSchemas;