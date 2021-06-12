const Drink = require('./Drink');
const Ingredient = require ('./Ingredient');
const DrinkIngredient = require('./DrinkIngredient')
const User = require('./User');
const Post = require('./Post');
// // Ingredient belongs to Drink
// Drink.belongsTo(Ingredient, {
//     foreignKey: 'ingredient_id'
// })

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

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    Drink,
    Ingredient,
    DrinkIngredient,
    User,
    Post
}



