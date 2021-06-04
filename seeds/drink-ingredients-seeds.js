const { DrinkIngredient } = require('../models');
const seedIngredients = require('./ingredients-seed');

const drinkingredientData = [
    {
        drink_id: 1,
        ingredient_id: 5
    }
];

const seedDrinkIngredient = () => DrinkIngredient.bulkCreate(drinkingredientData);

module.exports = seedDrinkIngredient;