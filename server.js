// Faça seu código aqui
require('dotenv').config();
const express = require('express');

const app = express();
const http = require('http').createServer(app); // conexão entre servidor e cliente

const io = require('socket.io')(http, { // servidor ao qual iremos nos comunicar e verbos de acesso
  cors: {
    origin: 'http://localhost:3000/',
    method: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`${socket.id} Acabou de se conectar!`);
});

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`); // aqui informamos onde as views serão procuradas

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/views/chat`);
});

const { PORT = 3000 } = process.env;

http.listen(PORT, () => console.log(`App runnign on port: ${PORT}`));