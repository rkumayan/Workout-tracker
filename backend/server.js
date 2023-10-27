require('dotenv').config();
const express = require('express'); 
// express app
const app = express();
const workout = require('./routes/workout');
const mongoose = require('mongoose');

// middlewares
app.use( express.json());

// connect to database
let connectionString = 'mongodb://127.0.0.1/workout'
mongoose.connect( connectionString)
    .then( () =>{
        //listen for workout requests 
        app.listen( process.env.PORT , ()=> console.log('listening at port 4000'));
        
    })
    .catch( err =>{
        console.log( 'something went wrong in connecting to database');
    });
// route for workout
app.use( '/api/workouts' , workout);
