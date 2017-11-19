import Head from 'next/head'

import io from 'socket.io-client'
import * as React from 'react'
import { render } from 'react-dom'

const socket = io('http://localhost:3001')

let i = 0

export default class App extends React.Component {
  state = {
    status: 'disconnected',
    messages: [],
  }

  componentDidMount() {
    socket.on('connect', () => this.setState({ status: 'connected' }))

    socket.on('message', message =>
      this.setState({ messages: [...this.state.messages, message] })
    )
    socket.on('disconnect', () => this.setState({ status: 'disconnected' }))
    socket.emit('message', {
      authorId: 'authorId',
      body: `message ${i++}`,
    })
  }

  render() {
    return (
      <div>
        <Head>
          <title>Chatapp</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div>{this.state.status}</div>
        <h1>Hello world!</h1>
        {this.state.messages.map(({ body, authorId }) => (
          <li>
            {authorId}: {body}
          </li>
        ))}
      </div>
    )
  }
}
