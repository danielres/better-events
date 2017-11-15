const cors = require('cors')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000

app.use(cors())

io.on('connection', socket => console.log('a user connected'))

http.listen(PORT, () => console.log(`listening on *:${PORT}`))
