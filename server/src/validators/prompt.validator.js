const { z } = require("zod");

const createPromptSchema = z.object({
  title: z.string().min(3).max(150),

  description: z.string().optional(),

  content: z.string().min(10),

  aiModel: z.enum([
    "GPT4",
    "CLAUDE",
    "GEMINI",
    "LLAMA",
    "MISTRAL",
  ]),

  visibility: z
    .enum(["PRIVATE", "PUBLIC"])
    .default("PRIVATE"),
});

const getPromptsSchema = z.object({
  page: z.coerce.number().min(1).default(1),

  limit: z.coerce.number().min(1).max(100).default(10),

  search: z.string().optional(),

  visibility: z
    .enum(["PRIVATE", "PUBLIC"])
    .optional(),

  isFavorite: z.coerce.boolean().optional(),

  isArchived: z.coerce.boolean().optional(),

  sortBy: z
    .enum(["createdAt", "updatedAt", "title"])
    .default("createdAt"),

  order: z
    .enum(["asc", "desc"])
    .default("desc"),
});

const getPromptSchema = z.object({
  id: z.string().cuid(),
});


const updatePromptSchema = z.object({
  title: z.string().min(3).max(150).optional(),

  description: z.string().optional(),

  content: z.string().min(10).optional(),

  aiModel: z
    .enum([
      "GPT4",
      "CLAUDE",
      "GEMINI",
      "LLAMA",
      "MISTRAL",
    ])
    .optional(),

  visibility: z
    .enum(["PRIVATE", "PUBLIC"])
    .optional(),

  isFavorite: z.boolean().optional(),

  isArchived: z.boolean().optional(),
});
const movePromptSchema = z.object({
  collectionId: z.string().cuid().nullable(),
});

module.exports = {
  createPromptSchema,
  getPromptsSchema,
  getPromptSchema,
  updatePromptSchema,
  movePromptSchema,

};