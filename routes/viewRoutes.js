const router = require('express').Router();
const apiRoutes = require('./api');

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/blackboard', (req, res) => {
    res.render('blackboard')
})

router.get('/edit-caption', (req, res) => {
    res.render('edit-caption')
})

router.get('/login', (req, res) => {
    res.render('login')
})
module.exports = router;