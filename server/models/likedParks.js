const { DataTypes } = require('sequelize');
const { sequelize } = require('../utility/database');

module.exports = {
    Likes: sequelize.define('likes', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            
        },
        name: DataTypes.STRING,
        states: DataTypes.STRING,
        description: DataTypes.TEXT,
        privateStatus: DataTypes.BOOLEAN

    })
}



