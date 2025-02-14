require('dotenv').config()
const axios = require('axios')
const AUTH_SERVICE = process.env.AUTH_SERVICE_URL
console.log(`Auth service: ${AUTH_SERVICE}`)

module.exports = class AuthService {
    constructor() { }

    async getAuth() {
        try {
            const response = await axios.get(`${AUTH_SERVICE}/auth`)
            return response.data
        } catch (error) {
            throw new Error(`Error getting auth: ${error.message}`)
        }
    }

    async signUp({ name, username, password, email, phone, address }) {
        try {
            const response = await axios.post(`${AUTH_SERVICE}/auth/sign-up`,
                { name, username, password, email, phone, address }
            )
            return response.data
        } catch (error) {
            throw new Error(`Error in user sign-up service: ${error.message}`)
        }
    }

    async signIn({ username, password }) {
        try {
            const response = await axios.post(`${AUTH_SERVICE}/auth/sign-in`, 
                { username, password }
            )
            return response.data
        } catch (error) {
            throw new Error(`Error in user sign-in service: ${error.message}`)
        }
    }
}