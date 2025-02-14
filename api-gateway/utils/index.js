const { validateRequest } = require('./middlewares/validateRequest')
const { errorHandler, notFoundHandler } = require('./middlewares/errorHandler')

module.exports = {
    validateRequest,
    errorHandler,
    notFoundHandler,
}