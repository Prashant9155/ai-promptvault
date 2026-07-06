/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication & Authorization APIs
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *
 *     responses:
 *       201:
 *         description: User registered successfully
 *              
 *
 *       400:
 *         description: Validation failed
 *
 *       409:
 *         description: Email already exists
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *
 *     responses:
 *       200:
 *         description: Login successful
 *
 *       401:
 *         description: Invalid credentials
 *
 *       403:
 *         description: Email not verified
 */

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Get logged in user
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: User profile
 *
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Authentication]
 *
 *     responses:
 *       200:
 *         description: Access token refreshed
 *
 *       401:
 *         description: Invalid refresh token
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout current device
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Logout successful
 */

/**
 * @swagger
 * /auth/sessions:
 *   get:
 *     summary: Get all active sessions
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: List of active sessions
 */

/**
 * @swagger
 * /auth/sessions:
 *   delete:
 *     summary: Logout from all other devices
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Logged out from all other devices
 */

/**
 * @swagger
 * /auth/sessions/{sessionId}:
 *   delete:
 *     summary: Logout a specific device
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Device logged out
 */

/**
 * @swagger
 * /auth/verify-email:
 *   get:
 *     summary: Verify email
 *     tags: [Authentication]
 *
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Email verified successfully
 */

/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Send password reset email
 *     tags: [Authentication]
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForgotPasswordRequest'
 *
 *     responses:
 *       200:
 *         description: Reset email sent
 */

/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset password
 *     tags: [Authentication]
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetPasswordRequest'
 *
 *     responses:
 *       200:
 *         description: Password reset successful
 */