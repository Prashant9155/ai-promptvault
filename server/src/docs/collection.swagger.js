/**
 * @swagger
 * /collections:
 *   post:
 *     tags:
 *       - Collections
 *     summary: Create a new collection
 *     description: |
 *       Creates a new prompt collection for the authenticated user.
 *
 *       Collections help organize prompts into logical groups.
 *
 *       Collection names are unique per user.
 *
 *     operationId: createCollection
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       description: Collection details.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCollectionRequest'
 *
 *     responses:
 *       201:
 *         description: Collection created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CollectionResponse'
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       409:
 *         $ref: '#/components/responses/Conflict'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /collections:
 *   get:
 *     tags:
 *       - Collections
 *     summary: Get all collections
 *     description: |
 *       Retrieves all collections owned by the authenticated user.
 *
 *       Only collections belonging to the authenticated user are returned.
 *
 *     operationId: getCollections
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Collections retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CollectionListResponse'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /collections/{id}:
 *   delete:
 *     tags:
 *       - Collections
 *     summary: Delete a collection
 *     description: |
 *       Deletes a collection owned by the authenticated user.
 *
 *       Deleting a collection does not delete the prompts inside it.
 *       Associated prompts become unassigned from the deleted collection.
 *
 *     operationId: deleteCollection
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Collection identifier.
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Collection deleted successfully.
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

