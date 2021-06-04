const {
    Model,
    DataTypes,
    STRING
} = require('sequelize');

const sequelize = require('../config/connection');

class Drink extends Model {}

Drink.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        
    },
    drink_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    temp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ingredient',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'drink'
});

module.exports = Drink;