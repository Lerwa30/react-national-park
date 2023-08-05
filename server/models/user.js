const { sequelize } = require('../utility/database')
const { DataTypes } = require('sequelize');

module.exports = {
User: sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
})
};
