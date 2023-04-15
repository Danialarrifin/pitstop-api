const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Review = sequelize.define('reviews', {
    rating: {
        type: DataTypes.INTEGER
    },
    remarks: {
        type: DataTypes.STRING
    },
    reviewer: {
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

module.exports = Review;