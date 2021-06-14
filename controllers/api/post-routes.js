const router = require('express').Router();
const {Post, User} = require('../../models');

router.get('/', (req,res) => {
   
    Post.findAll({
        attributes: ['id', 'photo_url', 'comment', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'photo_url', 'comment', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
      Post.create({
          comment: req.body.comment,
          photo_url: req.body.photo_url,
          user_id: req.body.user_id
      })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
  });

  router.put('/:id', (req, res) => {
      Post.update(
          {
              comment: req.body.comment
          },
          {
              where: {
                  id: req.params.id
              }
          }
      )
      .then(dbPostData => {
          if (!dbPostData) {
              res.status(404).json({ message: 'No post found with this id'});
              return
          }
          res.json(dbPostData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
  });

  router.delete('/:id', (req,res) => {
      Post.destroy({
          where: {
              id: req.params.id
          }
      })
      .then(dbPostData => {
          if(!dbPostData) {
              res.status(404).json({ message: 'No post found with this id'});
              return;
          }
          res.json(dbPostData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
  });



module.exports = router;