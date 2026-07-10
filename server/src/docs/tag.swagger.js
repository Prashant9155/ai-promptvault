/**
 * @swagger
 * /tags:
 *   post:
 *     tags:
 *       - Tags
 *     summary: Create a new tag
 *     description: |
 *       Creates a new tag for organizing prompts.
 *
 *       Tags can later be assigned to one or more prompts to improve
 *       organization and searchability.
 *
 *     operationId: createTag
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       description: Tag information.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTagRequest'
 *
 *     responses:
 *       201:
 *         description: Tag created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TagResponse'
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
 * /tags:
 *   get:
 *     tags:
 *       - Tags
 *     summary: Get all tags
 *     description: |
 *       Retrieves all available tags.
 *
 *       Tags can be used to categorize prompts and simplify searching.
 *
 *     operationId: getTags
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Tags retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TagListResponse'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /tags/{id}:
 *   patch:
 *     tags:
 *       - Tags
 *     summary: Update a tag
 *     description: |
 *       Updates an existing tag.
 *
 *       Changes to a tag are reflected across all prompts associated
 *       with that tag.
 *
 *     operationId: updateTag
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Tag identifier.
 *         schema:
 *           type: string
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTagRequest'
 *
 *     responses:
 *       200:
 *         description: Tag updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TagResponse'
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
 * /tags/{id}:
 *   delete:
 *     tags:
 *       - Tags
 *     summary: Delete a tag
 *     description: |
 *       Deletes an existing tag.
 *
 *       Removing a tag only deletes the tag itself.
 *       Prompts associated with the tag are preserved.
 *
 *     operationId: deleteTag
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Tag identifier.
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Tag deleted successfully.
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

