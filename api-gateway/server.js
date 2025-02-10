require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3500
const AUTH_SERVICE = process.env.AUTH_SERVICE_URL
const PRODUCT_SERVICE = process.env.PRODUCT_SERVICE_URL
console.log(`Auth service: ${AUTH_SERVICE}, Product service: ${PRODUCT_SERVICE}`)

const app = express()
app.use(bodyParser.json())
app.use(express.json())

app.get('/auth', async (req, res) => {
    try {
        const response = await axios.get(`${AUTH_SERVICE}/auth`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(error.response ? error.response.status : 500)
            .json(error.response ? error.response.data : 'Internal Server Error')
    }
})

app.get('/product', async (req, res) => {
    try {
        const response = await axios.get(`${PRODUCT_SERVICE}/product`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(error.response ? error.response.status : 500)
            .json(error.response ? error.response.data : 'Internal Server Error')
    }
})

app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`)
})