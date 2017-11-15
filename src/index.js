import io from 'socket.io-client'
import React from 'react'
import { render } from 'react-dom'

const socket = io('http://localhost:3000')

class App extends React.Component {
  state = {
    status: 'disconnected',
  }

  componentDidMount() {
    socket.on('connect', () => this.setState({ status: 'connected' }))
    socket.on('event', data => console.log('event', data))
    socket.on('disconnect', () => this.setState({ status: 'disconnected' }))
  }

  render() {
    return (
      <div>
        <div>{this.state.status}</div>
        <h1>Hello world!</h1>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
