const { Invoice } = require('../models');

const getAllInvoice = async (req, res) => {
    let invoices;
    if (req.query.invoiceId)
        invoices = await Invoice.findByPk(req.query.invoiceId)
    else
        invoices = await Invoice.findAll({});

    if (invoices)
        return res.json(invoices);
    else
        return res.status(400).json({ message: 'invoice not found' })
};

const createInvoice= async (req, res) => {
    const invoice = await Invoice.create({
        sub_total: req.body.sub_total,
        grand_total: req.body.grand_total,
        discount: req.body.discount,
        service_charge: req.body.service_charge,
        invoice_number: req.body.invoice_number,
        invoice_date: req.body.invoice_date,

    });
    return res.json(invoice);
};

const updateInvoice= async (req, res) => {
    const invoice = await Invoice.update({
        sub_total: req.body.sub_total,
        grand_total: req.body.grand_total,
        discount: req.body.discount,
        service_charge: req.body.service_charge,
        invoice_number: req.body.invoice_number,
        invoice_date: req.body.invoice_date,
        
    }, {
        where: {
            id: req.query.invoiceId
        }
    });
    return res.json({ message: 'invoice successfully updated' });
};

const deleteInvoice = async (req, res) => {
    const invoice = await Invoice.destroy({
        where: {
            id: req.query.invoiceId
        }
    });
    return res.json({ message: 'invoice successfully deleted' });
};

module.exports = {
    getAllInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice,
}