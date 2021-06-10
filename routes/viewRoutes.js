const router = require('express').Router();
const apiRoutes = require('./api');


router.get('/', (req,res) => {
    res.render('home', {homeHeader: 'home-header'})
})

router.get('/blackboard', (req,res) => {
    res.render('blackboard', {blackboardBody: 'blackboard'})
})

router.get('/edit-caption', (req,res) => {
    // get ingredients with sequelize then pass into view {ingredients}
    res.render('edit-caption', {editCaptionHeader: 'edit-caption-header'})
})

router.get('/login', (req,res) => {
    res.render('login')
})
module.exports = router;