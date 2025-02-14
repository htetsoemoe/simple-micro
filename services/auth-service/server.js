require('dotenv').config()
const express = require('express')
const connectDB = require('../auth-service/db/connectDB')
const authServiceRouter = require('./routers/authService.route')

const app = express()
const PORT = process.env.AUTH_PORT || 3001

app.use(express.json())

app.use('/auth', authServiceRouter)

app.listen(PORT, () => {
    connectDB()
    console.log(`auth-service is running on port ${PORT}`)
})