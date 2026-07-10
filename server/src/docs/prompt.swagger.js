/**
 * @swagger
 * /prompts:
 *   post:
 *     tags:
 *       - Prompts
 *     summary: Create a new prompt
 *     description: |
 *       Creates a new AI prompt for the authenticated user.
 *
 *       A prompt consists of:
 *       - Title
 *       - Optional description
 *       - Prompt content
 *       - AI model
 *       - Visibility
 *       - Optional collection
 *
 *       Newly created prompts:
 *       - are owned by the authenticated user
 *       - are marked as active
 *       - are not archived
 *       - are not favorited by default
 *
 *       Ownership is automatically assigned from the authenticated user.
 *
 *     operationId: createPrompt
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       description: Prompt details.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePromptRequest'
 *           example:
 *             title: React Interview Prompt
 *             description: Advanced React interview preparation
 *             content: >
 *               Act as a Senior React Interviewer.
 *               Ask me advanced React interview questions one at a time.
 *             aiModel: GPT4
 *             visibility: PRIVATE
 *             collectionId: cmcx72vqi0000123456789abc
 *
 *     responses:
 *       201:
 *         description: Prompt created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PromptResponse'
 *             example:
 *               success: true
 *               statusCode: 201
 *               message: Prompt created successfully
 *               data:
 *                 id: cmcx8zqwr0000123456789abc
 *                 title: React Interview Prompt
 *                 description: Advanced React interview preparation
 *                 content: Act as a Senior React Interviewer...
 *                 aiModel: GPT4
 *                 visibility: PRIVATE
 *                 isFavorite: false
 *                 isArchived: false
 *                 collectionId: cmcx72vqi0000123456789abc
 *                 ownerId: cmcx4d8pw0000xyz123abcd45
 *                 createdAt: 2026-07-10T12:30:00.000Z
 *                 updatedAt: 2026-07-10T12:30:00.000Z
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       404:
 *         description: Collection not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *             example:
 *               success: false
 *               statusCode: 404
 *               message: Collection not found
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /prompts:
 *   get:
 *     tags:
 *       - Prompts
 *     summary: Get all prompts
 *     description: |
 *       Retrieves a paginated list of prompts belonging to the authenticated user.
 *
 *       This endpoint supports searching, filtering, sorting and pagination.
 *
 *       Only prompts owned by the authenticated user are returned.
 *
 *       Results can be filtered by:
 *       - Visibility
 *       - Favorite status
 *       - Archived status
 *
 *       Results can also be searched by prompt title or content.
 *
 *     operationId: getAllPrompts
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Page number.
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *
 *       - in: query
 *         name: limit
 *         description: Number of prompts per page.
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *
 *       - in: query
 *         name: search
 *         description: Search prompts by title or content.
 *         schema:
 *           type: string
 *           example: React
 *
 *       - in: query
 *         name: visibility
 *         description: Filter by prompt visibility.
 *         schema:
 *           type: string
 *           enum:
 *             - PRIVATE
 *             - PUBLIC
 *
 *       - in: query
 *         name: isFavorite
 *         description: Filter favorite prompts.
 *         schema:
 *           type: boolean
 *
 *       - in: query
 *         name: isArchived
 *         description: Filter archived prompts.
 *         schema:
 *           type: boolean
 *
 *       - in: query
 *         name: sortBy
 *         description: Field used for sorting.
 *         schema:
 *           type: string
 *           enum:
 *             - title
 *             - createdAt
 *             - updatedAt
 *
 *       - in: query
 *         name: order
 *         description: Sort order.
 *         schema:
 *           type: string
 *           enum:
 *             - asc
 *             - desc
 *           default: desc
 *
 *     responses:
 *       200:
 *         description: Prompts retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PromptListResponse'
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
 * /prompts/{id}:
 *   get:
 *     tags:
 *       - Prompts
 *     summary: Get prompt by ID
 *     description: |
 *       Retrieves a single prompt owned by the authenticated user.
 *
 *       The requested prompt must belong to the authenticated user.
 *       If the prompt does not exist or belongs to another user,
 *       an appropriate error response is returned.
 *
 *     operationId: getPromptById
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Prompt identifier.
 *         schema:
 *           type: string
 *           example: cmcx8zqwr0000123456789abc
 *
 *     responses:
 *       200:
 *         description: Prompt retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PromptResponse'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /prompts/{id}:
 *   patch:
 *     tags:
 *       - Prompts
 *     summary: Update a prompt
 *     description: |
 *       Updates an existing prompt owned by the authenticated user.
 *
 *       Any combination of fields may be updated.
 *       If prompt content changes, a new prompt version may be created
 *       according to the application's versioning strategy.
 *
 *     operationId: updatePrompt
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePromptRequest'
 *
 *     responses:
 *       200:
 *         description: Prompt updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PromptResponse'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /prompts/{id}:
 *   delete:
 *     tags:
 *       - Prompts
 *     summary: Delete a prompt
 *     description: |
 *       Permanently deletes a prompt owned by the authenticated user.
 *
 *       This operation performs a hard delete and cannot be undone.
 *
 *     operationId: deletePrompt
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Prompt deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /prompts/{id}/favorite:
 *   patch:
 *     tags:
 *       - Prompts
 *     summary: Toggle favorite status
 *     description: |
 *       Marks or unmarks a prompt as favorite.
 *
 *       Favorite prompts can be filtered separately in the application.
 *
 *     operationId: toggleFavoritePrompt
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Favorite status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FavoriteResponse'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

