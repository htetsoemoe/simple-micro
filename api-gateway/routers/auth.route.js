require('dotenv').config()
const express = require('express')
const {
    signUpValidation,
    signInValidation,
} = require('../validators/auth.validator.js')
const {
    getAuth,
    signIn,
    signUp,
} = require('../controllers/auth.controller.js')
const authRouter = express.Router()

authRouter.get('/', getAuth)
authRouter.post('/sign-up', signUpValidation, signUp)
authRouter.post('/sign-in', signInValidation, signIn)

module.exports = authRouter
