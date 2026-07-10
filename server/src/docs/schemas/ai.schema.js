const aiSchemas = {
  GeneratePromptRequest: {
    type: "object",
    required: ["topic"],

    description: "Request payload for generating an AI prompt.",

    properties: {
      topic: {
        type: "string",
        description: "Topic or idea for prompt generation.",
        example: "React Interview Preparation",
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
        default: "GEMINI",
        example: "GEMINI",
      },
    },
  },

  ImprovePromptRequest: {
    type: "object",
    required: ["content"],

    description: "Request payload for improving an existing prompt.",

    properties: {
      content: {
        type: "string",
        description: "Prompt content to improve.",
        example: "Write React interview questions.",
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
        default: "GEMINI",
      },
    },
  },

  ExplainPromptRequest: {
    type: "object",
    required: ["content"],

    description: "Request payload for explaining a prompt.",

    properties: {
      content: {
        type: "string",
        description: "Prompt content to explain.",
        example: "Act as a Senior React Interviewer...",
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
        default: "GEMINI",
      },
    },
  },

  AIResponse: {
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
              result: {
                type: "string",
                description: "AI generated response.",
                example:
                  "Here is the improved version of your prompt...",
              },
            },
          },
        },
      },
    ],
  },
};

module.exports = aiSchemas;