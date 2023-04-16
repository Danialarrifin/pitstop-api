const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Transaction = sequelize.define('transactions', {
    appointment_id: {
        type: DataTypes.INTEGER
    },
    estimated_price: {
        type: DataTypes.STRING
    },
    remarks: {
        type: DataTypes.STRING
    },
    is_paid: {
        type: DataTypes.BOOLEAN
    },
    status: {
        type: DataTypes.STRING
    },
    final_price: {
        type: DataTypes.STRING
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Transaction;