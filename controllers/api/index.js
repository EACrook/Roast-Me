const router = require('express').Router();
const drinkRoutes = require('./drink-routes');
const ingredientRoutes = require('./ingredient-routes');
<<<<<<< HEAD:routes/api/index.js
const userRoutes =require('./user-routes.js');
const postRoutes = require('./post-routes');


router.use('/drinks', drinkRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
=======
const insultRoutes = require('./insult-routes');

router.use('/drinks', drinkRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/insults', insultRoutes);
>>>>>>> 31b51c7a7b0a406b0dd3cb48a0ef58cd7dcfeecf:controllers/api/index.js

module.exports = router;