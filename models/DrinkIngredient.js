const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection');

class DrinkIngredient extends Model{}

DrinkIngredient.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    drink_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'drink',
            key: 'id'
        }
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ingredient',
            key: 'id'
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'drinkingredient'
});

module.exports = DrinkIngredient;