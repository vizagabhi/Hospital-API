const mongoose = require('mongoose');

const url = process.env.MONGO_URI;

mongoose.set('strictQuery',false);

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};

















// mongoose.connect(process.env.MONGO_URI);

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to Database!'));

// db.once('open', function () {
//   console.log("Successfully connected to Database!");
// });

// module.exports = db;