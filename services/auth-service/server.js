require('dotenv').config()
const express = require('express')
const connectDB = require('../auth-service/db/connectDB')

const app = express()
const PORT = process.env.AUTH_PORT || 3001

app.use(express.json())

app.get('/auth', (req, res) => {
    res.status(200).json({ message: 'Hello from auth-service' })
})

app.listen(PORT, () => {
    connectDB()
    console.log(`auth-service is running on port ${PORT}`)
})