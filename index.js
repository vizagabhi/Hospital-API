require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/mongoose')

const port = 8000;

//database connection
db.connect();

//Used for Session Cookie
const passport = require('passport');
const passportJWT = require('./config/passport-strategy')

//Middlewares
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());

// Use express router
app.use('/', require('./routes/index'))

app.get('/',(req,res)=>{
   return res.send('<h1>Welcome to Hospital API.</h1>')
})

app.listen(process.env.PORT||port, function (error) {
    if (error) {
        console.log(`Error in running the Server. Error is : ${error}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})