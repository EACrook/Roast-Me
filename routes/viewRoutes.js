const router = require('express').Router();
const apiRoutes = require('./api');

//added loginhbrs as first page to show w/ Roast Me header
router.get('/', (req, res) => {
    res.render('login', {
        homeHeader: 'home-header',
        homeRoastMe: 'home-roast-me'
    })
})
//now homehbrs has LOGOUT at top lest corner- working once we get user route and model setup and linked to be able to save user login/signup data to db so it can be retrieved
router.get('/', (req, res) => {
    res.render('home', {
        homeHeader: 'home-header',
        homeRoastMe: 'home-roast-me'
    })
})

router.get('/blackboard', (req, res) => {
    res.render('blackboard', { blackboardBody: 'blackboard' })
})

router.get('/edit-caption', (req, res) => {
    // action: get ingredients with sequelize then pass into view {ingredients}
    res.render('edit-caption', {
        pageHeader: 'page-header',
        pageRoastMe: 'page-roast-me'
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        pageHeader: 'page-header',
        pageRoastMe: 'page-roast-me',
    })
})
module.exports = router;