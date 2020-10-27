const User = require('./User.js')
const Song = require('./Song.js')

User.hasMany(Song)
Song.belongsTo(User)

module.exports = { User, Song }
