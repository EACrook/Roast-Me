const seedDrinks = require('./drinks-seed');
const seedIngredients = require('./ingredients-seed');
const seedDrinkIngredient = require('./drink-ingredients-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n--------DATABASE SYNCED--------\n')

    await seedIngredients();
    console.log('\n----- DRINKS SEEDED -----\n');

    await seedDrinks();
    console.log('\n----- INGREDIENTS SEEDED -----\n');

    await seedDrinkIngredient();
    console.log('\n----- BRIDGE TABLE SEEDED -----\n')

    process.exit(0);
};

seedAll();