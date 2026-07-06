const { z } = require("zod");

const createTagSchema = z.object({
  name: z.string().min(2).max(50),
});

const attachTagSchema = z.object({
  tagId: z.string().cuid(),
});

module.exports = {
  createTagSchema,
  attachTagSchema,
  
};