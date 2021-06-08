const router = require('express').Router();

const {
    Drink,
    Ingredient,
    DrinkIngredient
} = require('../../models');

// get all ingredients
router.get('/', (req, res) => {
    Ingredient.findAll({})
        .then(dbIngredientData => {
            //res.render('ingredients', {ingredients: dbIngredientData})
            res.json(dbIngredientData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// get one ingredient
router.get('/:id', (req, res) => {
    Ingredient.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(dbIngredientData => {
            if (!dbIngredientData) {
                res.status(400).json({
                    message: 'No post found with this id'
                });
                return;
            }
            res.json(dbIngredientData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

// create a new ingredient
router.post('/', (req, res) => {
    Ingredient.create({
            ingredient_name: req.body.ingredient_name
        })
        .then(dbIngredientData => res.json(dbIngredientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// update 1 ingredient { ingredient_id, new_ingredient_id, drink_id }
router.put('/:id', (req, res) => {
    DrinkIngredient.update({
        ingredient_id: req.body.new_ingredient_id
    }, {
        where: {
            ingredient_id: req.body.ingredient_id,
            drink_id: req.body.drink_id
        }
    }).then((drink) => {
        res.json(drink)
    }).catch((err) => {
        console.log('err', err)
    });
});

// delete an ingredient in a drink
router.delete('/', (req, res) => {
    DrinkIngredient.destroy({
        where: {
            ingredient_id: req.body.ingredient_id,
            drink_id: req.body.drink_id
        }
    }).then((ingredient) => {
        res.json(ingredient)
    }).catch((err) => {
        console.log('err', err)
    });
});

// add ingredient to drink
router.post('/addingredient', (req, res) => {
    DrinkIngredient.create({
        drink_id: req.body.drink_id,
        ingredient_id: req.body.ingredient_id
    }).then((ingredient) => {
        res.json(ingredient)
    }).catch((err) => {
        console.log('err', err)
    });
});
module.exports = router;