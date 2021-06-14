const Drink = require('./Drink');
const Ingredient = require ('./Ingredient');
const DrinkIngredient = require('./DrinkIngredient')
const Insult = require('./Insult')
const User = require('./User');
const Post = require('./Post');


// create a reference for the id column in the User model to link to the corresponding foreign key pair (user_id in Post model)
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// reverse association - define relationship of Post model to the User
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

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
    User,
    Post
}

