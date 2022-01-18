const socket = window.io();

function gerenateRandomString(size) {
  let randomString = '';
  let caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < size; i++) {
      randomString += caracters.charAt(Math.floor(Math.random() * caracters.length));
  }
  return randomString;
};

function passingUserForDocument(user) {
  const span = document.querySelector('span');
  const randomUser = gerenateRandomString(16);
  span.innerText = `${user || randomUser}`;
};

passingUserForDocument();

const messageButton = document.querySelector('#message-button');
const messageList = document.querySelector('#message-list');
const nicknameButton = document.querySelector('#nickname-button');

socket.on('message', (message) => {
  const li = `<li data-testid="message">${message}</li>`;
  messageList.innerHTML = messageList.innerHTML + li;
});

messageButton.addEventListener('click', () => {
  const messageInput = document.querySelector('#message-input');
  const nickname = sessionStorage.getItem('nickname') || socket.id;
  socket.emit('message', { chatMessage: messageInput.value, nickname });
  messageInput.value = '';
});

nicknameButton.addEventListener('click', () => {
  const nicknameInput = document.querySelector('#nickname-input');
  sessionStorage.setItem('nickname', nicknameInput.value);
  passingUserForDocument(nicknameInput.value);
  nicknameInput.value = '';
});