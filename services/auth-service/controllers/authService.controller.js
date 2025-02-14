const bcryptjs = require('bcryptjs')
const AuthService = require('../services/authService.service')

const getAuth = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Hello from auth-service'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error`,
            error: error.message
        })
    }
}

const signUp = async (req, res) => {
    try {
        const authService = new AuthService()
        const { name, username, password, email, phone, address } = req.body

        // check if user already exists using username
        const existedUser = await authService.findExistedUser(username)
        console.log(`existedUser`, existedUser)
        if (existedUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }

        const hashedPassword = bcryptjs.hashSync(password, 10)
        const user = await authService.signUp({
            name,
            username,
            password: hashedPassword,
            email,
            phone,
            address
        })

        const { password: pass, __v, ...rest } = user._doc

        return res.status(201).json({
            user: rest,
            success: true,
            message: 'User signed up successfully!!!!'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error`,
            error: error.message
        })
    }
}

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body
        console.log(req.body)
        console.log(`username: ${username}, password: ${password}`)

        // TODO: validate username and password
        // TODO: check if user exists in database
        // TODO: there's no existed user, create new user

        return res.status(200).json({
            data: {
                username,
                password
            },
            success: true,
            message: 'User signed in successfully!!!!'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error`,
            error: error.message
        })
    }
}

module.exports = {
    getAuth,
    signUp,
    signIn,
}