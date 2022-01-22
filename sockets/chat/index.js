const date = require('../../utils/createData');

const chat = (io) => {
  io.on('connection', (socket) => {
    console.log(`usuario conectado, id: ${socket.id}`);
    socket.emit('welcome', 'Seja benvindo ao chat!');
    socket.on('message', ({ chatMessage, nickname }) => {
      io.emit('message', `${date(new Date())} - ${nickname}: ${chatMessage}`);
    });
  });
};

module.exports = { chat };
