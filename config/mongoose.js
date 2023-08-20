const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to Database!'));

db.once('open', function () {
  console.log("Successfully connected to Database!");
});

module.exports = db;