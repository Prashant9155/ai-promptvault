/**
 * @swagger
 * /ai/generate:
 *   post:
 *     tags:
 *       - AI
 *     summary: Generate a prompt using AI
 *     description: |
 *       Generates a high-quality AI prompt based on the provided topic.
 *
 *       The generated prompt can be saved later as a Prompt resource.
 *
 *     operationId: generatePrompt
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GeneratePromptRequest'
 *
 *     responses:
 *       200:
 *         description: Prompt generated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AIResponse'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /ai/improve:
 *   post:
 *     tags:
 *       - AI
 *     summary: Improve an existing prompt
 *     description: |
 *       Uses AI to rewrite and improve an existing prompt.
 *
 *       The improved prompt is returned in the response and is not automatically saved.
 *
 *     operationId: improvePrompt
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ImprovePromptRequest'
 *
 *     responses:
 *       200:
 *         description: Prompt improved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AIResponse'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /ai/explain:
 *   post:
 *     tags:
 *       - AI
 *     summary: Explain a prompt
 *     description: |
 *       Uses AI to explain the purpose, structure and expected output of a prompt.
 *
 *     operationId: explainPrompt
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExplainPromptRequest'
 *
 *     responses:
 *       200:
 *         description: Prompt explanation generated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AIResponse'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
