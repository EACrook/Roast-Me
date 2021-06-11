const router = require('express').Router();

const {
    Insult
} = require('../../models');

// get all insults
router.get('/', (req, res) => {
    Insult.findAll({})
        .then(dbInsultData => {
            res.json(dbInsultData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// get one insult
router.get('/:id', (req, res) => {
    Insult.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(dbInsultData => {
            if (!dbInsultData) {
                res.status(400).json({
                    message: 'No post found with this id'
                });
                return;
            }
            res.json(dbInsultData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

module.exports = router;