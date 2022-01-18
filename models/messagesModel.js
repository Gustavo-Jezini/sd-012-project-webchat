const connection = require('./connection');

async function create(data) {
  const { timestamp, nickname, message } = data;

  return connection()
  .then(async (db) => {
    const { insertedId } = await db.collection('messages')
    .insertOne({ timestamp, nickname, message });

    return insertedId;
  });
}

async function getAll() {
    return connection()
    .then(async (db) => {
      const messages = await db.collection('messages')
      .find({}).toArray();

      return messages;
    });
  }

module.exports = { getAll, create };