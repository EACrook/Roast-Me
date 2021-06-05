const {
    Model,
    DataTypes,
    STRING
} = require('sequelize');

const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ingredient_name: {
        type: STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient'
});

module.exports = Ingredient;