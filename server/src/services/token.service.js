const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

const generateRawToken = () => {
  return `${uuidv4()}-${crypto.randomBytes(32).toString("hex")}`;
};

const hashToken = (token) => {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
};

const generateTokenExpiry = (minutes = 15) => {
  return new Date(Date.now() + minutes * 60 * 1000);
};

const isTokenExpired = (expiresAt) => {
  return new Date() > expiresAt;
};

module.exports = {
  generateRawToken,
  hashToken,
  generateTokenExpiry,
  isTokenExpired,
};