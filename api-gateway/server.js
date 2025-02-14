require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { validateRequest, errorHandler, notFoundHandler } = require('./utils/index')
const authRouter = require('./routers/auth.route')
const productRouter = require('./routers/product.route')

const PORT = process.env.PORT || 3500

const app = express()
app.use(bodyParser.json())
app.use(express.json())

app.use('/gateway/v1/auth', authRouter)
app.use('/gateway/v1/product', productRouter)

app.use(validateRequest)
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`)
})