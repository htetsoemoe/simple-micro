const { ValidationError } = require('express-validation')

const validateRequest = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        const mes = err.details.params || err.details.query || err.details.body;
        if (!mes || !Array.isArray(mes) || mes.length === 0) {
            return res.status(err.statusCode).json({
                success: false,
                message: "VALIDATION_FAILED",
                error: "Invalid request parameters"
            });
        }

        return res.status(err.statusCode).json({
            success: false,
            message: "VALIDATION_FAILED",
            error: mes[0].context?.message || mes[0].message || "Validation error"
        });
    }

    if (!err.statusCode) {
        err.statusCode = 400;
    }

    return res.status(err.statusCode).json({
        success: false,
        message: err.message || "Bad Request",
        error: err
    });
};

module.exports = { validateRequest };