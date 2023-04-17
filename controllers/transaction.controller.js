const { Transaction } = require('../models');

const getAllTransaction = async (req, res) => {
    let transactions;
    if (req.query.transactionId)
        transactions = await Transaction.findByPk(req.query.transactionId)
    else
        transactions = await Transaction.findAll({});

    if (transactions)
        return res.json(transactions);
    else
        return res.status(400).json({ message: 'transactions not found' })
}

const getTransaction = async (req, res) => {
    const transaction = await Transaction.findByPk(req.query.transactionId)
    return res.json(transaction);
}
const createTransaction = async (req, res) => {
    // 3. create transaction
    const transaction = await Transaction.create({
        appointment_id: req.body.appointment_id,
        estimated_price: req.body.estimated_price,
        remarks: req.body.remarks,
        is_paid: req.body.is_paid,
        status: req.body.status,
        final_price: req.body.final_price,

    });
    return res.json(transaction);
};

const updateTransaction = async (req, res) => {
    const transaction = await Transaction.update({
        appointment_id: req.body.appointment_id,
        estimated_price: req.body.estimated_price,
        remarks: req.body.remarks,
        is_paid: req.body.is_paid,
        status: req.body.status,
        final_price: req.body.final_price,
    }, {
        where: {
            id: req.query.transactionId
        }
    });
    return res.json({ message: 'transaction successfully updated' });
};

const deleteTransaction = async (req, res) => {
    const transaction = await Transaction.destroy({
        where: {
            id: req.query.transactionId
        }
    });
    return res.json({ message: 'transaction successfully deleted' });
};
module.exports = {
    getAllTransaction,
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
}