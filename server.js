const express = require('express');

const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const socketIo = require('socket.io');
const { format } = require('date-fns');
const { insertMessage, getAllMessages } = require('./models/messagesConnect');
const { geraStringAleatoria } = require('./helpers/helper');

const io = socketIo(http, {
    cors: {
        origin: 'http://localhost:3000',
        method: ['GET', 'POST'],
    },
});

app.use(cors());

const listUser = [];

let messages = [];

const func1 = async () => {
   messages = await getAllMessages();
  //  console.log(messages);
};

func1();

const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');

io.on('connection', async (socket) => {
  // const messages = await getAllMessages();
  // console.log(messages);
  socket.emit('historyMessages', messages);

  socket.on('newUser', (nickname) => {
    listUser.push({ id: socket.id, nickname });
    io.emit('updateUsers', listUser);
  });

  socket.on('message', async ({ chatMessage, nickname = geraStringAleatoria(16) }) => {
    messages.push({ chatMessage, nickname, timestamp });
    io.emit('message', `${timestamp} - ${nickname} - ${chatMessage}`);
    await insertMessage({ chatMessage, nickname, timestamp });
  });

  socket.on('disconnect', async () => {
    const users = listUser.findIndex((user) => user.id === socket.id);
    listUser.splice(users, 1);
    io.emit('updateUsers', listUser);
  });
});

io.on('connection', (socket) => {
  socket.on('changeNick', (nickname) => {
    listUser.forEach((user) => {
      const userToEdit = user;
      if (user.id === socket.id) {
        userToEdit.nickname = nickname;
      }
    });
    io.emit('updateUsers', listUser);
  });
});

app.get('/', (_req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

http.listen(3000, () => console.log('Ouvindo a porta 3000'));