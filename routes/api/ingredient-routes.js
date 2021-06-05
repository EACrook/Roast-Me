const router = require('express').Router();

const {
    Drink,
    Ingredient,
    DrinkIngredient
} = require('../../models');

// get all ingredients
router.get('/', (req, res) => {
    Ingredient.findAll({})
    .then(dbIngredientData => res.json(dbIngredientData))
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
        if(!dbIngredientData) {
            res.status(400).json ({ message: 'No post found with this id' });
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

// delete ingredient from drink?

module.exports = router;