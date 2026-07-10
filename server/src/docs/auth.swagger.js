/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Register a new user
 *     description: |
 *       Creates a new user account.
 *
 *       After successful registration:
 *       - A new user account is created.
 *       - A verification email is sent to the registered email address.
 *       - The user must verify their email before logging in.
 *
 *       This endpoint is public and does not require authentication.
 *     operationId: registerUser
 *     security: []
 *
 *     requestBody:
 *       required: true
 *       description: User registration details.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *           example:
 *             firstName: Prashant
 *             lastName: Kumar
 *             email: prashant@example.com
 *             password: Password@123
 *
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
 *             example:
 *               success: true
 *               statusCode: 201
 *               message: User registered successfully
 *               data:
 *                 id: cmcx2a6q10000x123abcd5678
 *                 email: prashant@example.com
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       409:
 *         $ref: '#/components/responses/Conflict'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Login user
 *     description: |
 *       Authenticates a user using their email and password.
 *
 *       On successful authentication:
 *       - Returns a JWT Access Token.
 *       - Sets a secure HTTP-only Refresh Token cookie.
 *       - Creates a new active session for the current device.
 *
 *       Email verification is required before login.
 *
 *       This endpoint is public and does not require authentication.
 *
 *     operationId: loginUser
 *     security: []
 *
 *     requestBody:
 *       required: true
 *       description: User login credentials.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *           example:
 *             email: prashant@example.com
 *             password: Password@123
 *
 *     responses:
 *       200:
 *         description: Login successful.
 *         headers:
 *           Set-Cookie:
 *             description: |
 *               Secure HTTP-only cookie containing the refresh token.
 *             schema:
 *               type: string
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: Login successful
 *               data:
 *                 accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 user:
 *                   id: cmcx2a6q10000x123abcd5678
 *                   firstName: Prashant
 *                   lastName: Kumar
 *                   email: prashant@example.com
 *                   role: USER
 *                   isEmailVerified: true
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       403:
 *         description: Email address is not verified.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForbiddenError'
 *             example:
 *               success: false
 *               statusCode: 403
 *               message: Please verify your email before logging in.
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /auth/me:
 *   get:
 *     tags:
 *       - Authentication
 *     summary: Get current authenticated user
 *     description: |
 *       Returns the profile of the currently authenticated user.
 *
 *       This endpoint requires a valid JWT Access Token.
 *
 *       The user information is extracted from the authenticated request
 *       and returned without exposing sensitive information such as
 *       password, verification tokens, or refresh tokens.
 *
 *     operationId: getCurrentUser
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Authenticated user retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: User profile fetched successfully
 *               data:
 *                 id: cmcx2a6q10000x123abcd5678
 *                 firstName: Prashant
 *                 lastName: Kumar
 *                 email: prashant@example.com
 *                 role: USER
 *                 isEmailVerified: true
 *                 createdAt: 2026-07-09T10:30:15.000Z
 *                 updatedAt: 2026-07-09T10:30:15.000Z
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Refresh access token
 *     description: |
 *       Generates a new JWT Access Token using a valid Refresh Token.
 *
 *       The Refresh Token must be stored in a secure HTTP-only cookie.
 *
 *       This endpoint:
 *       - Validates the refresh token.
 *       - Verifies the active session.
 *       - Issues a new JWT Access Token.
 *       - May rotate the refresh token depending on the authentication strategy.
 *
 *       **Authorization Header is NOT required.**
 *       Authentication is performed using the **refreshToken** cookie.
 *
 *     operationId: refreshAccessToken
 *
 *     security: []
 *
 *     parameters:
 *       - in: cookie
 *         name: refreshToken
 *         required: true
 *         description: HTTP-only Refresh Token cookie.
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Access token refreshed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RefreshTokenResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: Access token refreshed successfully
 *               data:
 *                 accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *
 *       401:
 *         description: Invalid or expired refresh token.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *             example:
 *               success: false
 *               statusCode: 401
 *               message: Invalid or expired refresh token
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Logout current user
 *     description: |
 *       Logs out the currently authenticated user.
 *
 *       This endpoint performs the following actions:
 *       - Invalidates the current login session.
 *       - Removes the associated Refresh Token from the database.
 *       - Clears the HTTP-only refreshToken cookie.
 *
 *       After logout:
 *       - The current Access Token should no longer be used.
 *       - A new login is required to obtain fresh authentication tokens.
 *
 *     operationId: logoutUser
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: User logged out successfully.
 *         headers:
 *           Set-Cookie:
 *             description: Clears the HTTP-only refreshToken cookie.
 *             schema:
 *               type: string
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: Logged out successfully
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /auth/sessions:
 *   get:
 *     tags:
 *       - Sessions
 *     summary: Get all active sessions
 *     description: |
 *       Returns all active login sessions associated with the authenticated user.
 *
 *       Each session contains information about:
 *       - Device
 *       - Browser
 *       - Operating System
 *       - IP Address
 *       - Last Activity
 *       - Session Expiration
 *
 *       This endpoint can be used to display logged-in devices and manage account security.
 *
 *     operationId: getUserSessions
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Active sessions retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SessionListResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: Sessions fetched successfully
 *               data:
 *                 - id: cmcx5m5ih0001abc123xyz890
 *                   device: Desktop
 *                   browser: Chrome
 *                   os: macOS
 *                   ipAddress: 192.168.1.10
 *                   userAgent: Mozilla/5.0...
 *                   lastActiveAt: 2026-07-09T12:15:00.000Z
 *                   expiresAt: 2026-08-09T12:15:00.000Z
 *                   createdAt: 2026-07-09T10:30:00.000Z
 *                   updatedAt: 2026-07-09T12:15:00.000Z
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /auth/sessions/{sessionId}:
 *   delete:
 *     tags:
 *       - Sessions
 *     summary: Logout a specific device
 *     description: |
 *       Terminates a specific active login session associated with the authenticated user.
 *
 *       This endpoint allows users to remotely sign out from one of their logged-in devices
 *       without affecting the current session or any other active sessions.
 *
 *       The specified session must belong to the authenticated user.
 *
 *       Typical use cases:
 *       - Logout from a lost device
 *       - Remove an old browser session
 *       - Improve account security
 *
 *     operationId: logoutSpecificSession
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - name: sessionId
 *         in: path
 *         required: true
 *         description: Unique identifier of the session to terminate.
 *         schema:
 *           type: string
 *           example: cmcx5m5ih0001abc123xyz890
 *
 *     responses:
 *       200:
 *         description: Session terminated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: Session logged out successfully
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
 * /auth/sessions:
 *   delete:
 *     tags:
 *       - Sessions
 *     summary: Logout from all other devices
 *     description: |
 *       Terminates all active login sessions for the authenticated user except the current session.
 *
 *       This endpoint is useful when:
 *       - You suspect unauthorized access to your account.
 *       - You want to sign out from all previously logged-in devices.
 *       - You recently changed your password and want to invalidate other active sessions.
 *
 *       The current session remains active, allowing the user to continue using the application without logging in again.
 *
 *     operationId: logoutOtherSessions
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: All other active sessions logged out successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: Logged out from all other devices successfully
 *
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /auth/verify-email:
 *   get:
 *     tags:
 *       - Authentication
 *     summary: Verify user email
 *     description: |
 *       Verifies a user's email address using the verification token sent during registration.
 *
 *       Once the verification is successful:
 *       - The user's email is marked as verified.
 *       - The verification token becomes invalid.
 *       - The user can successfully log in to the application.
 *
 *       This endpoint is public and does not require authentication.
 *
 *     operationId: verifyUserEmail
 *
 *     security: []
 *
 *     parameters:
 *       - name: token
 *         in: query
 *         required: true
 *         description: Email verification token received in the verification email.
 *         schema:
 *           type: string
 *           example: 1dc1d5be52c1d41a8fd234a6ef7b4a3d
 *
 *     responses:
 *       200:
 *         description: Email verified successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VerifyEmailResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: Email verified successfully
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         description: Invalid or expired verification token.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *             example:
 *               success: false
 *               statusCode: 401
 *               message: Invalid or expired verification token
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Send password reset email
 *     description: |
 *       Sends a password reset link to the registered email address.
 *
 *       If the email address exists in the system, a secure password reset
 *       token is generated and sent via email. The token can be used once
 *       to reset the user's password before it expires.
 *
 *       For security reasons, the API may return the same success response
 *       even if the email address is not registered, preventing email
 *       enumeration attacks.
 *
 *       This endpoint is public and does not require authentication.
 *
 *     operationId: forgotPassword
 *
 *     security: []
 *
 *     requestBody:
 *       required: true
 *       description: Registered email address.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForgotPasswordRequest'
 *           example:
 *             email: prashant@example.com
 *
 *     responses:
 *       200:
 *         description: Password reset email sent successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForgotPasswordResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: Password reset email sent successfully
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       404:
 *         description: User with the provided email address was not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *             example:
 *               success: false
 *               statusCode: 404
 *               message: User not found
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */

/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Reset user password
 *     description: |
 *       Resets the user's password using a valid password reset token.
 *
 *       The password reset token is generated when the user requests a
 *       password reset through the **Forgot Password** endpoint.
 *
 *       Upon successful password reset:
 *       - The user's password is securely updated.
 *       - The reset token is invalidated and cannot be reused.
 *       - Existing authentication sessions may be invalidated depending on the application's security policy.
 *
 *       This endpoint is public and does not require authentication.
 *
 *     operationId: resetPassword
 *
 *     security: []
 *
 *     requestBody:
 *       required: true
 *       description: Password reset token and new password.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetPasswordRequest'
 *           example:
 *             token: 1dc1d5be52c1d41a8fd234a6ef7b4a3d
 *             password: NewPassword@123
 *
 *     responses:
 *       200:
 *         description: Password reset successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResetPasswordResponse'
 *             example:
 *               success: true
 *               statusCode: 200
 *               message: Password reset successfully
 *
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 *       401:
 *         description: Invalid or expired password reset token.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *             example:
 *               success: false
 *               statusCode: 401
 *               message: Invalid or expired password reset token
 *
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */