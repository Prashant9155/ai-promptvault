const { z } = require("zod");

const improvePromptSchema = z.object({
  prompt: z.string().min(10),
});

const generateTitleSchema = z.object({
  content: z.string().min(20),
});

const summarizeSchema = z.object({
  content: z.string().min(20),
});

const explainSchema = z.object({
  content: z.string().min(20),
});

const optimizeSchema = z.object({
  content: z.string().min(5),
});

const chatSchema = z.object({
  message: z.string().min(2),
  prompt: z.string().optional(),
});

module.exports = {
  improvePromptSchema,
  generateTitleSchema,
  summarizeSchema,
  explainSchema,
  optimizeSchema,
  chatSchema,
  
};
