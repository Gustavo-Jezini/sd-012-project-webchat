const { saveMessage, formatMessage } = require('../controllers');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('message', (message) => {
    const rightMessage = formatMessage(message);
    io.emit('message', rightMessage);
  });
  socket.on('saveMessage', (messageInfo) => {
    saveMessage(messageInfo);
  });
});