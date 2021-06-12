const router = require('express').Router();
const drinkRoutes = require('./drink-routes');
const ingredientRoutes = require('./ingredient-routes');
const userRoutes =require('./user-routes.js');
const postRoutes = require('./post-routes');


router.use('/drinks', drinkRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;