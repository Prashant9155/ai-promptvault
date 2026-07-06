const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const { verifyAccessToken } = require("../utils/jwt");

const {
  findSessionById,
} = require("../repositories/session.repository");

const authenticate = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError(401, "Unauthorized");
  }

  const token = authHeader.split(" ")[1];

  const decoded = verifyAccessToken(token);

  const session = await findSessionById(decoded.sessionId);

  if (!session) {
    throw new ApiError(401, "Session expired");
  }

  req.user = session.user;
  req.session = session;

  next();
});

module.exports = authenticate;