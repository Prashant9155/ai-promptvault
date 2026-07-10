const commonSchemas = require("./common.schema");
const authSchemas = require("./auth.schema");
const sessionSchemas = require("./session.schema");
const promptSchemas = require("./prompt.schema");
const collectionSchemas = require("./collection.schema");
const tagSchemas = require("./tag.schema");
const aiSchemas = require("./ai.schema");

module.exports = {
  ...commonSchemas,
  ...authSchemas,
  ...sessionSchemas,
  ...promptSchemas,
  ...collectionSchemas,
  ...tagSchemas,
  ...aiSchemas,
};