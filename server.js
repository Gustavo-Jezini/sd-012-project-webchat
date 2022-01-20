const express = require('express');
const path = require('path');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  } });

require('./sockets/chat')(io);

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/public/webchat.ejs'));
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});