const Drink = require('./Drink');
const Ingredient = require ('./Ingredient');
const DrinkIngredient = require('./DrinkIngredient')
const Insult = require('./Insult')
const Post = require('./Post')
const User = require('./User')

// // Ingredient belongs to Drink
// Drink.belongsTo(Ingredient, {
//     foreignKey: 'ingredient_id'
// })
Post.belongsTo(User, {
    foreignKey: 'user_id'
})
User.hasMany(Post, {
    foreignKey: 'user_id'
})

// // Drink has many Ingredients
// Ingredient.hasMany(Drink, {
//     foreignKey: 'ingredient_id'
// });

// Drinks belongToMany Ingredients (through DrinkIngredient)
Drink.belongsToMany(Ingredient, {
    through: DrinkIngredient,
    foreignKey: 'drink_id'
})

// Ingredients belongToMany Drinks (through DrinkIngredient)
Ingredient.belongsToMany(Drink, {
    through: DrinkIngredient,
    foreignKey: 'ingredient_id'
})

DrinkIngredient.belongsTo(Drink, {
    foreignKey: 'drink_id'
})

DrinkIngredient.belongsTo(Ingredient, {
    foreignKey: 'ingredient_id'
})

module.exports = {
    Drink,
    Ingredient,
    DrinkIngredient,
    Insult,
    Post,
    User
}
