const tagSchemas = {
  CreateTagRequest: {
    type: "object",
    required: ["name"],
    description: "Request payload for creating a new tag.",

    properties: {
      name: {
        type: "string",
        description: "Tag name.",
        example: "React",
      },
    },
  },

  UpdateTagRequest: {
    type: "object",
    description: "Request payload for updating a tag.",

    properties: {
      name: {
        type: "string",
        example: "ReactJS",
      },
    },
  },

  Tag: {
    type: "object",
    description: "Prompt tag.",

    properties: {
      id: {
        type: "string",
        example: "cmcy4u4r60000123abc456xyz",
      },

      name: {
        type: "string",
        example: "React",
      },

      createdAt: {
        type: "string",
        format: "date-time",
        example: "2026-07-10T10:20:00.000Z",
      },

      updatedAt: {
        type: "string",
        format: "date-time",
        example: "2026-07-10T10:20:00.000Z",
      },
    },
  },

  TagResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Tag",
          },
        },
      },
    ],
  },

  TagListResponse: {
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
              $ref: "#/components/schemas/Tag",
            },
          },
        },
      },
    ],
  },
};

module.exports = tagSchemas;