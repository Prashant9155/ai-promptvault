const { success } = require("zod");
const ApiError = require("../utils/apiError");

const errorHandler = (err, req, res, next) => {

    if(err.name === "ZodError") {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: err.issues,
        })
    }

    if(err instanceof ApiError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    })
}

module.exports = errorHandler;