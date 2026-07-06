const UAParser = require("ua-parser-js");

const getDeviceInfo = (req) => {
  const parser = new UAParser(req.headers["user-agent"]);

  const result = parser.getResult();

  return {
    userAgent: req.headers["user-agent"] || null,
    ipAddress: req.ip || null,

    browser: result.browser.name || "Unknown",
    os: result.os.name || "Unknown",
    device: result.device.type || "Desktop",
  };
};

module.exports = getDeviceInfo;