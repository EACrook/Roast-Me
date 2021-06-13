const router = require('express').Router();
const {
    Drink,
    Ingredient,
    DrinkIngredient,
    Insult
} = require('../models');
const {
    sequelize,
    findAll
} = require('../models');
const apiRoutes = require('../controllers');

router.get('/', (req, res) => {
    res.render('home', {
        homeHeader: 'home-header',
        homeRoastMe: 'home-roast-me'
    })
})

router.get('/blackboard', (req, res) => {
        let data = {
        drinks: '',
        ingredients: ''
    }
    // Pull all drinks to display
    Drink.findAll({
        attributes: [
            'id',
            'drink_name',
            'temp',
            'ingredient_id'
        ],
        include: [{
            model: Ingredient,
                attributes: ['ingredient_name'],
                    // include: {
                    //     model: DrinkIngredient,
                    //     attributes: ['drink_id', 'ingredient_id']
                    // }
            },
                // {
                //     model: DrinkIngredient,
                //     attributes: ['drink_id', 'ingredient_id']
                // }
        ]
    }).then(dbDrinkData => {
        // console.log('DRINKS', dbDrinkData.ingredients);

        const drinks = dbDrinkData.map(drink => drink.get({
            plain: true
        }));
        data.drinks = drinks;

        // console.log('drinksplain', drinks)
        Ingredient.findAll({
            attributes: [
                'id',
                'ingredient_name'
            ]
        }).then(dbIngredientData => {
            // console.log('ingredients', dbIngredientData)
            const ingredients = dbIngredientData.map(ingredient => ingredient.get({
                plain: true
            }));
            data.ingredients = ingredients;

            Insult.findAll({
                attributes: [
                    'id',
                    'insult'
                ]
            }).then(dbInsultData => {
                const insults = dbInsultData.map(insults => insults.get({
                    plain: true
                }));
                let insultLength = insults.length

                let idx = Math.floor(Math.random()*insultLength)
                    
                data.insults = insults[idx];
                // console.log('data.insults length', data.insults)
                // console.log('data', data)
                res.render('blackboard', data);
            })
        })

    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit-caption', (req, res) => {
    // action: get ingredients with sequelize then pass into view {ingredients}
    res.render('edit-caption', {
        pageHeader: 'page-header',
        pageRoastMe: 'page-roast-me'
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        pageHeader: 'page-header',
        pageRoastMe: 'page-roast-me',
    })
})
module.exports = router;