const collectionSchemas = {
  CreateCollectionRequest: {
    type: "object",
    required: ["name"],
    description: "Request payload for creating a new prompt collection.",

    properties: {
      name: {
        type: "string",
        description: "Collection name.",
        example: "Frontend Interview",
      },

      description: {
        type: "string",
        nullable: true,
        description: "Short description of the collection.",
        example: "Collection for React and JavaScript prompts.",
      },
    },
  },

  UpdateCollectionRequest: {
    type: "object",
    description: "Request payload for updating an existing collection.",

    properties: {
      name: {
        type: "string",
        example: "Updated Frontend Interview",
      },

      description: {
        type: "string",
        nullable: true,
        example: "Updated collection description.",
      },
    },
  },

  Collection: {
    type: "object",
    description: "Prompt collection.",

    properties: {
      id: {
        type: "string",
        example: "cmcy3nphf0000abc123xyz456",
      },

      name: {
        type: "string",
        example: "Frontend Interview",
      },

      description: {
        type: "string",
        nullable: true,
        example: "React interview preparation prompts.",
      },

      ownerId: {
        type: "string",
        example: "cmcx4d8pw0000xyz123abcd45",
      },

      createdAt: {
        type: "string",
        format: "date-time",
        example: "2026-07-10T10:15:20.000Z",
      },

      updatedAt: {
        type: "string",
        format: "date-time",
        example: "2026-07-10T10:15:20.000Z",
      },
    },
  },

  CollectionResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Collection",
          },
        },
      },
    ],
  },

  CollectionListResponse: {
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
              $ref: "#/components/schemas/Collection",
            },
          },
        },
      },
    ],
  },
};

module.exports = collectionSchemas;