const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Address = sequelize.define('addresses', {
    address: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    postcode: {
        type: DataTypes.INTEGER
    },
    city: {
        type: DataTypes.STRING
    },
    latitude: {
        type: DataTypes.STRING
    },
    longitude: {
        type: DataTypes.STRING
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Address;
