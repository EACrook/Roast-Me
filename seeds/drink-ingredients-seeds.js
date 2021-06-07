const { DrinkIngredient } = require('../models');
const seedIngredients = require('./ingredients-seed');

const drinkingredientData = [
    {
        drink_id: 1,
        ingredient_id: 5
    },
    {
        drink_id: 1,
        ingredient_id: 14
    },
    {
        drink_id: 2,
        ingredient_id: 5
    },
    {
        drink_id: 2,
        ingredient_id: 14
    },
    {
        drink_id: 2,
        ingredient_id: 35
    },
    {
        drink_id: 2,
        ingredient_id: 58
    },
    {
        drink_id: 3,
        ingredient_id: 5
    },
    {
        drink_id: 3,
        ingredient_id: 59
    },
    {
        drink_id: 4,
        ingredient_id: 14
    },
    {
        drink_id: 4,
        ingredient_id: 35
    },
    {
        drink_id: 5,
        ingredient_id: 5
    },
    {
        drink_id: 5,
        ingredient_id: 22
    },
    {
        drink_id: 6,
        ingredient_id: 1
    },
    {
        drink_id: 7,
        ingredient_id: 50
    },
    {
        drink_id: 8,
        ingredient_id: 57
    },
    {
        drink_id: 8,
        ingredient_id: 14
    },
    {
        drink_id: 9,
        ingredient_id: 56
    },
    {
        drink_id: 9,
        ingredient_id: 59
    },
    {
        drink_id: 9,
        ingredient_id: 14
    }
];

const seedDrinkIngredient = () => DrinkIngredient.bulkCreate(drinkingredientData);

module.exports = seedDrinkIngredient;