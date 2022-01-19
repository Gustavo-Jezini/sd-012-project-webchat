module.exports = (io) => io.on('connection', (socket) => {
  console.log(`Usuário conectado ID: ${socket.id}`);

  socket.on('clientMessage', (message) => {
    console.log(`Mensagem: ${message}`);
    io.emit('serverMessage', message);
  });
});