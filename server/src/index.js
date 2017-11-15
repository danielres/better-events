const cors = require('cors')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000

app.use(cors())

let i = 1
io.on('connection', socket => {
  console.log('a user connected')
  setInterval(
    () =>
      io.emit('message', {
        username: 'socket.username',
        message: `message ${i++}`,
      }),
    5000
  )
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})
