const {
    Model,
    DataTypes,
    STRING
} = require('sequelize');

const sequelize = require('../config/connection');

class Insult extends Model {}

module.exports = Insult;