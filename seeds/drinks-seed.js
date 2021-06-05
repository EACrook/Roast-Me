const { Drink } = require('../models');

const drinksData = [{
    drink_name: 'Latte',
    temp: 'hot'
},
{
    drink_name: 'Mocha',
    temp: 'hot'
},
{
    drink_name: 'Americano',
    temp: 'hot'
},
{
   drink_name: 'Hot Chocolate',
   temp: 'hot' 
},
{
    drink_name: 'Cappuccino',
    temp: 'hot'
},
{
    drink_name: 'Brewed Coffee',
    temp: 'hot'
},
{
    drink_name: 'Hot Tea',
    temp: 'hot'
},
{
    drink_name: 'Green Tea Latte',
    temp: 'hot'
},
{
    drink_name: 'Chai Tea Latte',
    temp: 'hot'
}
];

const seedDrinks = () => Drink.bulkCreate(drinksData);

module.exports = seedDrinks;