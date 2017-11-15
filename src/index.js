import io from 'socket.io-client';
import React from 'react';
import { render } from 'react-dom';

const socket = io('http://localhost:3000');

socket.on('connect', function(){
  console.log('connected');
});

socket.on('event', function(data){
  console.log('event', data);
});

socket.on('disconnect', function(){
  console.log('disconnected');
});



const App = () => (
  <div>
    <h1>Hello world!!</h1>
  </div>
);

render(<App />, document.getElementById('root'));
