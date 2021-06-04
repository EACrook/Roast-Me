const router = require('express').Router();
const {
    Drink,
    Ingredient,
    DrinkIngredient
} = require('../../models');

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
})

module.exports = router;