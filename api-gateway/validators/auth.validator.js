const {Joi, validate} = require('express-validation')

const signUpValidation = validate({
    body: Joi.object({
        name: Joi.string().max(100).required().messages({
            "any.required": "name is required",
            "string.max": "name can't more than 100",
        }),
        username: Joi.string().max(100).required().messages({
            "any.required": "username is required",
            "string.max": "username can't more than 100",
        }),
        password: Joi.string().min(6).max(30).required().messages({
            "any.required": "password is required",
            "string.min": "password can't less than 6",
            "string.max": "password can't more than 30",
        }),
        email: Joi.string().email().required().messages({
            "any.required": "email is required",
            "string.email": "email is invalid",
        }),
        phone: Joi.string().max(20).required().messages({
            "any.required": "phone is required",
            "string.max": "phone can't more than 20",
        }),
        address: Joi.string().max(200).required().messages({
            "any.required": "address is required",
            "string.max": "address can't more than 200",
        })
    })
})

const signInValidation = validate({
    body: Joi.object({
        username: Joi.string().max(100).required().messages({
            "any.required": "username is required",
            "string.max": "username can't more than 100",
        }),
        password: Joi.string().min(6).max(30).required().messages({
            "any.required": "password is required",
            "string.min": "password can't less than 6",
            "string.max": "password can't more than 30",
        }),
    })
})

module.exports = {
    signUpValidation,
    signInValidation,
}