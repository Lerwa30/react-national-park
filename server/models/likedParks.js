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
        // userId: {
        //     allowNull: true,
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // },
        name: DataTypes.STRING,
        state: DataTypes.STRING,
        description: DataTypes.TEXT,
        privateStatus: DataTypes.BOOLEAN

    })
}



