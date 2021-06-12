const router = require('express').Router();
const drinkRoutes = require('./drink-routes');
const ingredientRoutes = require('./ingredient-routes');
const userRoutes =require('./user-routes');
const postRoutes = require('./post-routes');
const insultRoutes = require('./insult-routes');


router.use('/drinks', drinkRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/insults', insultRoutes);

module.exports = router;