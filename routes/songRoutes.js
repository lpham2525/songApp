const router = require('express').Router()
const { Song } = require('../models')

// GET all songs
router.get('/songs', (req, res) => {
  Song.findAll()
    .then(songs => res.json(songs))
    .catch(err => console.error(err))
})

// GET one song
router.get('/songs/:id', (req, res) => {
  Song.findOne({ where: { id: req.params.id } })
    .then(song => res.json(song))
    .catch(err => console.error(err))
})

// POST one song
router.post('/songs', (req, res) => {
  Song.create(req.body)
    .then(song => res.json(song))
    .catch(err => console.error(err))
})

// UPDATE one song
router.put('/songs/:id', (req, res) => {
  Song.update(req.body, { where: { id: req.params.id } })
    .then(() => { res.sendStatus(200) })
    .catch(err => console.error(err))
})

// DELETE one song
router.delete('/songs/:id', (req, res) => {
  Song.destroy({ where: { id: req.params.id } })
    .then(() => { res.sendStatus(200) })
    .catch(err => console.error(err))
})

module.exports = router
