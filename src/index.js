import io from 'socket.io-client'
import React from 'react'
import { render } from 'react-dom'

const socket = io('http://localhost:3000')

socket.on('connect', () => console.log('connected'))

socket.on('event', data => console.log('event', data))

socket.on('disconnect', () => console.log('disconnected'))

const App = () => (
  <div>
    <h1>Hello world!!</h1>
  </div>
)

render(<App />, document.getElementById('root'))
