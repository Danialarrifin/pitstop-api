const Joi = require('joi');

const getUser = Joi.object().keys({
    userId: Joi.string().required(),
})

module.exports = {
    getUser
}