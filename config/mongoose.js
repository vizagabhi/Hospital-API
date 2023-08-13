const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/Hos_DB`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to Database!'));

db.once('open', function () {
  console.log("Successfully connected to Database!");
});

module.exports = db;