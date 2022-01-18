const moment = require('moment');
const connection = require('./connection');

const formatMessage = () => moment().format('DD-MM-YYYY HH:mm:ss');

const removeSelectedUser = (id, list) => list.filter((item) => item.id !== id);

const getAllMessages = async () => {
  try {
      const makeConnection = await connection();
      const getAll = await makeConnection.collection('messages').find().toArray();
      return getAll;
  } catch (error) {
      console.error(error);
  }
};

const saveMessage = async (nickname, message, timestamp) => {
  try {
      const makeConnection = await connection();
      await makeConnection.collection('messages').insertOne({ message, nickname, timestamp });
  } catch (error) {
      console.error(error);
  }
};

module.exports = {
  formatMessage,
  removeSelectedUser,
  getAllMessages,
  saveMessage,
};
