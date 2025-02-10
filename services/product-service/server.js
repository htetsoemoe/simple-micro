require('dotenv').config()
const express = require('express')
const connectDB = require('../product-service/db/connectDB')
const app = express()

const PORT = process.env.PRODUCT_PORT || 3002
app.use(express.json())

app.get('/product', (req, res) => {
    res.status(200).json({ message: 'Hello from product-service' })
})

app.listen(PORT, () => {
    connectDB()
    console.log(`product-service is running on port ${PORT}`)
})