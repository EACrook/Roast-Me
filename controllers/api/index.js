const router = require('express').Router();
const drinkRoutes = require('./drink-routes');
const ingredientRoutes = require('./ingredient-routes');
const insultRoutes = require('./insult-routes');

router.use('/drinks', drinkRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/insults', insultRoutes);

module.exports = router;