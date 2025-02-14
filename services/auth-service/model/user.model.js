const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchemaModel = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = userSchemaModel