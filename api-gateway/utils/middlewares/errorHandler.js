const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const responseBody = {
        success: false,
        error: process.env.NODE_ENV === 'production' ? undefined : err,
        message: err.message || "Internal Server Error",
        status: statusCode
    };
    res.status(statusCode).json(responseBody);
};

const notFoundHandler = (req, res, next) => {
    const error = new Error(`API Route Not Found: ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
};

module.exports = { errorHandler, notFoundHandler };