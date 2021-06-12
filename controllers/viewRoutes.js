const router = require('express').Router();
const { Drink, Ingredient, DrinkIngredient } = require('../models');
const { sequelize } = require('../models/Drink');
const apiRoutes = require('./api');


router.get('/', (req,res) => {
    res.render('home', {
        homeHeader: 'home-header',
        homeRoastMe: 'home-roast-me'
    })
})

router.get('/blackboard', (req,res) => {
    Drink.findAll({
        attributes: [
            'id',
            'drink_name',
            'temp',
            // 'ingredient_id'
        ],
        // include: [
        //     {
        //         model: DrinkIngredient,
        //         attributes: ['ingredient_name'],
        //         include: {
        //             model: Ingredient,
        //             attributes: ['ingredient_name']
        //         }
        //     },
        //     {
        //         model: Ingredient,
        //         attributes: ['ingredient_name']
        //     }
        // ]
    })
    .then(dbDrinkData => {
        console.log(dbDrinkData);
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
        // pass the drinks to the page
        res.render('blackboard', { drinks });
        // {blackboardBody: 'blackboard'}
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit-caption', (req,res) => {
    // action: get ingredients with sequelize then pass into view {ingredients}
    res.render('edit-caption', {
        pageHeader: 'page-header',
        pageRoastMe: 'page-roast-me'
    })
})

router.get('/login', (req,res) => {
    res.render('login', {
        pageHeader: 'page-header',
        pageRoastMe: 'page-roast-me',
    })
})
module.exports = router;