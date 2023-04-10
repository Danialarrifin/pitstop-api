const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Invoice = sequelize.define('invoices', {
    sub_total: {
        type: DataTypes.FLOAT
    },
    grand_total: {
        type: DataTypes.FLOAT
    },
    discount: {
        type: DataTypes.FLOAT
    },
    service_charge: {
        type: DataTypes.FLOAT
    },
    invoice_number: {
        type: DataTypes.STRING
    },
    invoice_date: {
        type: DataTypes.DATE
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Invoice;