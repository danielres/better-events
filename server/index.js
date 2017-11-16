import { resolve } from 'url'

const cors = require('cors')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000
app.use(cors())

let messages = []

const persistMessage = message =>
  new Promise((resolve, reject) => {
    messages = [...messages, message]
    resolve()
  })

let i = 1
io.on('connection', socket => {
  console.log('a user connected')
  setTimeout(
    () =>
      io.emit('message', {
        username: 'socket.username',
        message: `message ${i++}`,
      }),
    1000
  )
  socket.on('message', m => persistMessage(m).then(() => console.log('yeah')))
  socket.on('message', () => console.log(messages))
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})
