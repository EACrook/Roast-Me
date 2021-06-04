const Drink = require('./Drink');
const Ingredient = require ('./Ingredient');

// Ingredient belongs to Drink
Drink.belongsTo(Ingredient, {
    foreignKey: 'ingredient_id'
})

// Drink has many Ingredients
Ingredient.hasMany(Drink, {
    foreignKey: 'ingredient_id'
});

module.exports = {
    Drink,
    Ingredient
}