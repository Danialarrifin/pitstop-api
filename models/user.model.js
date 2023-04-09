const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const User = sequelize.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = User;
