require('dotenv').config()
const axios = require('axios')
const PRODUCT_SERVICE = process.env.PRODUCT_SERVICE_URL
console.log(` Product service: ${PRODUCT_SERVICE}`)

const getProduct = async (req, res) => {
    try {
        const response = await axios.get(`${PRODUCT_SERVICE}/product`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(error.response ? error.response.status : 500)
            .json(error.response ? error.response.data : 'Internal Server Error')
    }
}

module.exports = {
    getProduct,
}