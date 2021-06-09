const router = require('express').Router();
const drinkRoutes = require('./drink-routes');
const ingredientRoutes = require('./ingredient-routes');
const userRoutes =require('./user-routes.js');

router.use('/drinks', drinkRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/users', userRoutes);

module.exports = router;