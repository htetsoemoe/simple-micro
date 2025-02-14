const express = require('express');
const authServiceRouter = express.Router();
const {
    getAuth,
    signUp,
    signIn,
} = require('../controllers/authService.controller')

authServiceRouter.get('/', getAuth)
authServiceRouter.post('/sign-up', signUp)
authServiceRouter.post('/sign-in', signIn)

module.exports = authServiceRouter