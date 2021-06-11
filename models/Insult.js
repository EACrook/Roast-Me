const {
    Model,
    DataTypes,
    STRING
} = require('sequelize');

const sequelize = require('../config/connection');

class Insult extends Model {}

Insult.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    insult: {
        type: STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'insult'
});

module.exports = Insult;