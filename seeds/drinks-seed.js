const { Drink } = require('../models');

const drinksData = [{
    drink_name: 'Latte',
    temp: 'hot'
},
{
    drink_name: 'Mocha',
    temp: 'hot'
}
];

const seedDrinks = () => Drink.bulkCreate(drinksData);

module.exports = seedDrinks;