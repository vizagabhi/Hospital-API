require('dotenv').config();
const cors = require("cors");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const db = require('./config/mongoose')

const PORT = process.env.PORT || 8000

//database connection as per cyclic compatibility
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

//Used for Session Cookie
const passport = require('passport');
const passportJWT = require('./config/passport-strategy')

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());

// Use express router
app.use('/', require('./routes/index'))

app.get("/",(req,res)=>{
   return res.json({message:"Welcome to hospital API."})
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})

// app.listen(process.env.PORT||port, function (error) {
//     if (error) {
//         console.log(`Error in running the Server. Error is : ${error}`);
//         return;
//     }
//     console.log(`Server is up and running on the port: ${port}`);
// })