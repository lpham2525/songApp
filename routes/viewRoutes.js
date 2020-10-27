const router = require('express').Router()
const { User, Song } = require('../models')

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/dashboard/:id', (req, res) => {
  User.findOne({ id: req.params.id, include: [Song] })
    .then(user => {
      res.render('dashboard', { user: user.dataValues })
    })
    .catch(err => console.error(err))
})

module.exports = router
