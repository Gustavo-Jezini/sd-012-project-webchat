const express = require('express');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET'], // Métodos aceitos pela url
  },
});

require('./sockets/chat')(io);

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static(`${__dirname}/views`));

app.get('/', (_req, res) => {
  res.render('index', {});
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});