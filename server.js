// Faça seu código aqui
require('dotenv').config();
const express = require('express');
const moment = require('moment');

const app = express();
const http = require('http').createServer(app); // conexão entre servidor e cliente

const io = require('socket.io')(http, { // servidor ao qual iremos nos comunicar e verbos de acesso
  cors: {
    origin: 'http://localhost:3002/',
    method: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('message', ({ chatMessage, nickname }) => {
    const timestamp = moment().format('DD-MM-YYYY HH:mm:ss');
    // addMessage(timestamp, chatMessage, nickname);
    io.emit('message', `${timestamp} - ${nickname}: ${chatMessage}`);
  });
});

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`); // aqui informamos onde as views serão procuradas

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render(`${__dirname}/src/views/chat`);
});

const { PORT = 3002 } = process.env;

http.listen(PORT, () => console.log(`App runnign on port: ${PORT}`));