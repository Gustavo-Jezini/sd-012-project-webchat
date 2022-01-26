const socket = window.io();

const messageForm = document.querySelector('#message-form');
const messageBox = document.querySelector('#message-box');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

//   console.log('get the message?'); shows the message in front - console

  socket.emit('message', {
    chatMessage: messageBox.value,
  });
  messageBox.value = '';
});

const addMessageToList = (msgContent) => {
  const messageList = document.querySelector('#message-list');
  const newMsg = document.createElement('li');
  newMsg.innerHTML = msgContent;
  messageList.appendChild(newMsg);
};

// connection that allows getting a message from server and add it to the list
socket.on('message', (msg) => { 
  console.log(msg);
  addMessageToList(msg);
});
