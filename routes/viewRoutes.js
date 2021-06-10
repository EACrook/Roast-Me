const router = require('express').Router();
const apiRoutes = require('./api');


router.get('/', (req,res) => {
    res.render('home', {
        homeHeader: 'home-header',
        homeRoastMe: 'home-roast-me',
        homeLog: 'home-log'
    })
})

router.get('/blackboard', (req,res) => {
    res.render('blackboard', {blackboardBody: 'blackboard'})
})

router.get('/edit-caption', (req,res) => {
    // action: get ingredients with sequelize then pass into view {ingredients}
    res.render('edit-caption', {
        editCaptionHeader: 'edit-caption-header',
        editCaptionRoastMe: 'edit-caption-roast-me',
        editCaptionLog: 'edit-caption-log'
    })
})

router.get('/login', (req,res) => {
    res.render('login')
})
module.exports = router;