require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_PRODUCT_URI)
        console.log(`Mongo productDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("Error connecting to database", error.message)
        process.exit(1) // 1 is failure, 0 is success
    }
}

module.exports = connectDB