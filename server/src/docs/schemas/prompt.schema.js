const promptSchemas = {
  CreatePromptRequest: {
    type: "object",
    required: ["title", "content", "aiModel"],

    description: "Request payload for creating a new prompt.",

    properties: {
      title: {
        type: "string",
        description: "Title of the prompt.",
        example: "React Interview Questions",
      },

      description: {
        type: "string",
        nullable: true,
        description: "Short description of the prompt.",
        example: "React interview preparation prompts.",
      },

      content: {
        type: "string",
        description: "Actual prompt content.",
        example:
          "Act as a Senior React Interviewer and ask me advanced React interview questions one by one.",
      },

      aiModel: {
        type: "string",
        description: "AI model associated with the prompt.",
        enum: [
        "GPT4",
        "CLAUDE",
        "GEMINI",
        "LLAMA",
        "MISTRAL"
        ],
        example: "GEMINI_2_5_FLASH",
      },

      visibility: {
        type: "string",
        description: "Prompt visibility.",
        enum: ["PRIVATE", "PUBLIC"],
        default: "PRIVATE",
        example: "PRIVATE",
      },

      collectionId: {
        type: "string",
        nullable: true,
        description: "Collection identifier.",
        example: "cmcx72vqi0000123456789abc",
      },
    },
  },

  UpdatePromptRequest: {
    type: "object",

    description: "Request payload for updating an existing prompt.",

    properties: {
      title: {
        type: "string",
        example: "Updated React Interview Questions",
      },

      description: {
        type: "string",
        nullable: true,
        example: "Updated description.",
      },

      content: {
        type: "string",
        example: "Updated prompt content...",
      },

      aiModel: {
        type: "string",
        enum: [
        "GPT4",
        "CLAUDE",
        "GEMINI",
        "LLAMA",
        "MISTRAL"
        ],
      },

      visibility: {
        type: "string",
        enum: ["PRIVATE", "PUBLIC"],
      },

      collectionId: {
        type: "string",
        nullable: true,
      },
    },
  },

  Prompt: {
    type: "object",

    description: "Prompt resource.",

    properties: {
      id: {
        type: "string",
        example: "cmcx8zqwr0000123456789abc",
      },

      title: {
        type: "string",
        example: "React Interview Questions",
      },

      description: {
        type: "string",
        nullable: true,
        example: "Frontend Interview Prompt",
      },

      content: {
        type: "string",
        example:
          "Act as a Senior React Interviewer and ask advanced questions.",
      },

      aiModel: {
        type: "string",
        example: "GEMINI_2_5_FLASH",
      },

      visibility: {
        type: "string",
        enum: ["PRIVATE", "PUBLIC"],
      },

      isFavorite: {
        type: "boolean",
        example: false,
      },

      isArchived: {
        type: "boolean",
        example: false,
      },

      collectionId: {
        type: "string",
        nullable: true,
        example: "cmcx72vqi0000123456789abc",
      },

      ownerId: {
        type: "string",
        example: "cmcx4d8pw0000xyz123abcd45",
      },

      createdAt: {
        type: "string",
        format: "date-time",
        example: "2026-07-09T10:30:15.000Z",
      },

      updatedAt: {
        type: "string",
        format: "date-time",
        example: "2026-07-09T11:10:45.000Z",
      },
    },
  },

  PromptResponse: {
    allOf: [
      {
        $ref: "#/components/schemas/SuccessResponse",
      },
      {
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Prompt",
          },
        },
      },
    ],
  },

    PromptListResponse: {
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
                prompts: {
                type: "array",
                items: {
                    $ref: "#/components/schemas/Prompt",
                },
                },

                pagination: {
                $ref: "#/components/schemas/Pagination",
                },
            },
            },
        },
        },
    ],
    },
    Pagination: {
  type: "object",

  description: "Pagination information.",

  properties: {
    page: {
      type: "integer",
      example: 1,
    },

    limit: {
      type: "integer",
      example: 10,
    },

    totalItems: {
      type: "integer",
      example: 52,
    },

    totalPages: {
      type: "integer",
      example: 6,
    },

    hasNextPage: {
      type: "boolean",
      example: true,
    },

    hasPreviousPage: {
      type: "boolean",
      example: false,
    },
  },

    },

    PromptVersion: {
  type: "object",

  description: "Represents a saved version of a prompt.",

  properties: {
    id: {
      type: "string",
      example: "cmd123456789",
    },

    versionNumber: {
      type: "integer",
      example: 3,
    },

    title: {
      type: "string",
      example: "React Interview Prompt",
    },

    description: {
      type: "string",
      nullable: true,
      example: "Updated prompt",
    },

    content: {
      type: "string",
      example: "Act as a Senior React Engineer...",
    },

    aiModel: {
      type: "string",
      enum: [
        "GPT4",
        "CLAUDE",
        "GEMINI",
        "LLAMA",
        "MISTRAL",
      ],
      example: "GPT4",
    },

    visibility: {
      type: "string",
      enum: [
        "PRIVATE",
        "PUBLIC",
      ],
      example: "PRIVATE",
    },

    createdAt: {
      type: "string",
      format: "date-time",
    },
  },
    },  
    
    PromptVersionListResponse: {
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
            $ref: "#/components/schemas/PromptVersion",
          },
        },
      },
    },
  ],
    },
    PromptVersionResponse: {
  allOf: [
    {
      $ref: "#/components/schemas/SuccessResponse",
    },
    {
      type: "object",
      properties: {
        data: {
          $ref: "#/components/schemas/PromptVersion",
        },
      },
    },
  ],
    },

    MovePromptRequest: {
  type: "object",

  required: [
    "collectionId",
  ],

  properties: {
    collectionId: {
      type: "string",
      example: "cmcx72vqi0000123456789abc",
    },
  },
    }, 
    FavoriteResponse: {
  allOf: [
    {
      $ref: "#/components/schemas/SuccessResponse",
    },
    {
      type: "object",
      properties: {
        data: {
          $ref: "#/components/schemas/Prompt",
        },
      },
    },
  ],
    },
    ArchiveResponse: {
  allOf: [
    {
      $ref: "#/components/schemas/SuccessResponse",
    },
    {
      type: "object",
      properties: {
        data: {
          $ref: "#/components/schemas/Prompt",
        },
      },
    },
  ],
    },
    
};

module.exports = promptSchemas;