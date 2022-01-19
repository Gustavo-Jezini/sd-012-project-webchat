module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('serverMessage', 'teststtststs');
  console.log(`Usuário conectado. ID: ${socket.id} `);
  socket.on('message', ({ nickname, chatMessage }) => {
    const time = new Date();
    const msg = `${time.toLocaleString('es-CL', { timeZone: 'UTC' })} ${nickname}: ${chatMessage}`;
    console.log(msg);
    io.emit('message', msg);
  });
});