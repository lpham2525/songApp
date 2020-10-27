document.getElementById('addSong').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/songs', {
    name: document.getElementById('name').value,
    artist: document.getElementById('artist').value,
    userId: event.target.dataset.id
  })
    .then(() => {
      let songElem = document.createElement('li')
      songElem.textContent = `Name: ${document.getElementById('name').value} |
      Artist: ${document.getElementById('artist').value}`
      document.getElementById('listSongs').append(songElem)
      document.getElementById('name').value = ''
      document.getElementById('artist').value = ''
    })
    .catch(err => console.error(err))
})
