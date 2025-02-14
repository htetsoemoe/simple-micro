const mongoose = require('mongoose')
const userSchemaModel = require('../model/user.model')

module.exports = class AuthService {
    constructor() {
        this.userCollectionName = 'users'
        this.userModel = mongoose.model(
            this.userCollectionName,
            userSchemaModel
        )
    }

    async signUp(user) {
        try {
            return await this.userModel.create(user)
        } catch (error) {
            throw new Error(`Error signing up user: ${error.message}`)
        }
    }

    async findExistedUser(username) {
        try {
            return await this.userModel.findOne({ username })
        } catch (error) {
            throw new Error(`Error finding user: ${error.message}`)
        }
    }
}