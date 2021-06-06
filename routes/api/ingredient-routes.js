const router = require('express').Router();
const {
    Ingredient,
    DrinkIngredient
} = require('../../models');

router.get('/', (req, res) => {
    Ingredient.findAll({
            include: [{
                model: Ingredient,
                through: DrinkIngredient
            }]
        }).then((ingredients) => res.json(ingredients))
            .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/', (req,res) => {
    Ingredient.create(req.body)
    .then((ingredients) => res.status(200).json(ingredients))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;