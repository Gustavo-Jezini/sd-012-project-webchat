const handleDate = require('../helpers/handleDate');
const { saveMessage } = require('../models/saveMessage');

module.exports = (io) => io.on('connection', (socket) => {
  console.log(`O usuário ${socket.id} entrou na conversa!`);

  socket.emit('newConnection', socket.id);
  
  socket.on('disconnect', () => {
    console.log('userDisconnected', `O usuário ${socket.id} saiu da conversa!`);
  });

  socket.on('message', ({ chatMessage, nickname }) => {
    const date = new Date();
    const treatedDate = handleDate(date);
    saveMessage('messages', { chatMessage, nickname, treatedDate });
    io.emit('message', `${treatedDate} ${nickname} >> ${chatMessage}`);
  });
});