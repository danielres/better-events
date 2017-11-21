// @flow
const cors = require('cors')
const app = require('express')()
// flow-disable-next-line
const http = require('http').Server(app)
const io = require('socket.io')(http)
import type { Message } from './types'

const PORT = process.env.PORT || 3001
app.use(cors())

let messages = []

const persistMessage = (message: Message) =>
  new Promise((resolve, reject) => {
    messages = [...messages, message]
    resolve()
  })

let i = 1
io.on('connection', socket => {
  console.log('a user connected')
  setTimeout(
    () =>
      io.emit(
        'message',
        ({
          authorId: 'authorId',
          body: `message ${i++}`,
        }: Message)
      ),
    1000
  )

  socket.on('message', async m => {
    try {
      io.emit('message', (m: Message))
      await persistMessage(m)
    } catch (error) {
      console.error(error)
    }
  })
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})
