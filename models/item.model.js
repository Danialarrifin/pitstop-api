const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Item = sequelize.define('items', {
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    workshop_id: {
        type: DataTypes.INTEGER
    },

}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Item;