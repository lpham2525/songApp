const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./connection')
  .sync()
  .then(() => app.listen(3000, () => console.log('Server? What server?')))
  .catch(err => console.log(err))
