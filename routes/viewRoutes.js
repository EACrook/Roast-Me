const router = require('express').Router();
const apiRoutes = require('./api');


router.get('/', (req,res) => {
    res.render('home')
})

router.get('/blackboard', (req,res) => {
    res.render('blackboard', {bodyClass: 'blackboard'})
})

router.get('/edit-caption', (req,res) => {
    // get ingredients with sequelize then pass into view {ingredients}
    res.render('edit-caption')
})

router.get('/login', (req,res) => {
    res.render('login')
})
module.exports = router;