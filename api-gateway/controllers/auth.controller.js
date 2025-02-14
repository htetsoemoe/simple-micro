require('dotenv').config()
const AuthService = require('../services/auth.service')

const getAuth = async (req, res) => {
    try {
        const authService = new AuthService()
        const { message } = await authService.getAuth()
        res.status(200).json({
            data: message,
            success: true,
            message: 'Auth retrieved successfully',
        })
    } catch (error) {
        res.status(error.response ? error.response.status : 500)
            .json(error.response ? error.response.data : 'Internal Server Error')
    }
}

const signUp = async (req, res) => {
    try {
        const authService = new AuthService()
        const { name, username, password, email, phone, address } = req.body
        if (!name || !username || !password || !email || !phone || !address) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }

        const signUpData = {
            name: name,
            username: username,
            password: password,
            email: email,
            phone: phone,
            address: address
        }

        const response = await authService.signUp(signUpData)
        res.status(201).json({
            data: response.user,
            success: true,
            message: 'User created successfully',
        })
    } catch (error) {
        console.log(`error: ${error.message}, ${typeof error.message}`)
        if (error.message.includes('400')) {
            return res.status(400).json({
                success: false,
                message: 'Username is already exists'
            })
        }
        res.status(error.response ? error.response.status : 500)
            .json(error.response ? error.response.data : 'Internal Server Error')
    }
}

const signIn = async (req, res) => {
    try {
        const authService = new AuthService()
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Username and password are required'
            })
        }
        console.log(username, password)
        const loginData = {
            username: username,
            password: password
        }

        const response = await authService.signIn(loginData)
        res.status(200).json({
            data: response.data,
            success: true,
            message: 'User signed in successfully'
        })
    } catch (error) {
        res.status(error.response ? error.response.status : 500)
            .json(error.response ? error.response.data : 'Internal Server Error')
    }
}

module.exports = {
    getAuth,
    signIn,
    signUp,
}
