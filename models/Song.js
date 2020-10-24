const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class Song extends Model { }
Song.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'song' })

Song.sync()

module.exports = Song
