const router = require('express').Router();
const drinkRoutes = require('./drink-routes');
const ingredientRoutes = require('./ingredient-routes');

router.use('/drinks', drinkRoutes);
router.use('/ingredients', ingredientRoutes);

module.exports = router;