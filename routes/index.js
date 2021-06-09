const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');



router.use('/api', apiRoutes);
router.use('/', viewRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;