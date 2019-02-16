const express = require('express');
const SocketServer = require('ws').Server;
const fetch = require('node-fetch');
const uuid = require('uuid');
const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

const giffyTest = (text) => {
  return !!(text.match(/\/giffy (.+)/));
}
// Create the WebSockets server
const wss = new SocketServer( {server} );
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
const postMessage = message => {
  message.type = 'incomingMessage';
  return message;
}
const postNotification = message => {
  message.type = 'incomingNotification';
  return message;
}
const updateUserCount = (ws) => {
  const userCount = {
    type: 'incomingUserCount'
  }
  userCount.count = wss.clients.size;
  console.log(userCount.count);
  wss.clients.forEach(client => {
    if (client.readyState === ws.OPEN) {
      client.send(JSON.stringify(userCount));
    }
  })
}
wss.on('connection', (ws) => {
  console.log('Client connected');
  updateUserCount(ws);
  ws.on('message', (message) => {
    message = JSON.parse(message);
    message.id = uuid();
    if(giffyTest(message.content)){
      fetch(`http://api.giphy.com/v1/gifs/search?api_key=I1Utz0W5UJVY5czMtnSgV41QUocCV704&q=${message.content}&limit=1`)
        .then(response => response.json())
        .then(response => {
          let data = response.data[0];
          message.content = data.images.original.url;
          let newMessage = message.type === 'postMessage' ? postMessage(message) : postNotification(message);
          newMessage = JSON.stringify(newMessage);
          wss.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
              client.send(newMessage);
            }
          })
        })
    } else {
      let newMessage = message.type === 'postMessage' ? postMessage(message) : postNotification(message);
      newMessage = JSON.stringify(newMessage);
      wss.clients.forEach(client => {
        if (client.readyState === ws.OPEN) {
          client.send(newMessage);
        }
      })
    }
  })
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    updateUserCount(ws)
  });
})