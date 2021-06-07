const router = require('express').Router();
const {
    Drink,
    Ingredient,
    DrinkIngredient
} = require('../../models');

// get all drinks
router.get('/', (req, res) => {
    Drink.findAll({
            include: [{
                model: Ingredient,
                through: DrinkIngredient
            }]
        }).then((drinks) => res.json(drinks))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one drink
router.get('/:id', (req, res) => {
    Drink.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbDrinkData => {
        if(!dbDrinkData) {
            res.status(400).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbDrinkData);
    });
});

// create new drink
router.post('/', (req, res) => {
    Drink.create(req.body)
    .then((drink) => {
        // if there's ingredient tags, we create bulk create in DrinkIngredient model
        if (req.body.ingredientIds.length) {
            const drinkIngredientIdArr = req.body.ingredientIds.map((ingredient_id) => {
                return {
                    drink_id: drink.id,
                    ingredient_id
                };
            });
            return DrinkIngredient.bulkCreate(drinkIngredientIdArr);
        }
    })
    .then((drinkIngredientIds) => res.status(200).json(drinkIngredientIds))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

// delete a drink
router.delete('/:id', (req, res) => {
    Drink.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbDrinkData => {
        if (!dbDrinkData) {
            res.status(404).json({ message: 'No product found with this id' });
            return;
        }
        res.json(dbDrinkData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update a drink temperature
router.put('/:id', (req, res) => {
    // update temperature of drink
    Drink.update({temp: req.body.temp}, {
        where: {
            id: req.params.id
        },
    })
    .then((updatedDrinkIngredient) => res.json(updatedDrinkIngredient))
    .catch((err) => {
        console.log('err', err);
        res.status(400).json(err);
    });
});


module.exports = router;