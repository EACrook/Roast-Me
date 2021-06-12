const router = require('express').Router();
const {User} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  User.findAll({
    include: [Users],
  })
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    User.findOne({
      where: {
        id: req.params.id,
      },
      include: [Users],
    })
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json(err));
  });

router.post('/', (req, res) => {
  User.create(req.body)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(err));
});






const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});



router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});
