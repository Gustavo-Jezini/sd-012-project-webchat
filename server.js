const express = require('express');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET'],
  },
});

const webchatController = require('./controllers/webchat');

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static(`${__dirname}/views`));

app.get('/', webchatController);

require('./sockets/webchat')(io);

http.listen(3000, () => console.log('listening on port 3000'));
