const Joi = require('joi');

const getInvoice = Joi.object().keys({
    invoiceId: Joi.string().required(),
});

const createInvoice = Joi.object().keys({
    sub_total: Joi.string().required(),
    grand_total: Joi.string().required(),
    discount: Joi.string().required(),
    service_charge: Joi.string().required(),
    invoice_number: Joi.string().required(),
    invoice_date: Joi.string().required(),

})

module.exports = {
    getInvoice,
    createInvoice
}