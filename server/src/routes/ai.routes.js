const express = require("express");

const authenticate = require("../middlewares/auth.middleware");
const aiController = require("../controllers/ai.controller");

const router = express.Router();

router.post(
  "/improve",
  authenticate,
  aiController.improvePrompt
);

router.post(
  "/title",
  authenticate,
  aiController.generateTitle
);

router.post(
  "/summarize",
  authenticate,
  aiController.summarizePrompt
);

router.post(
  "/explain",
  authenticate,
  aiController.explainPrompt
);

router.post(
  "/chat",
  authenticate,
  aiController.chat
);

module.exports = router;