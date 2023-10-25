require('dotenv').config();
const express = require('express'); 
// express app
const app = express();

const workout = require('./routes/workout');

// middlewares
app.use( express.json());

//listen for workout requests requests
app.use( '/workouts' , workout);

// GET all workouts
app.get( "/", (req, res)=>{
    res.send(" get all the workouts  ") ;
})

// GET a single workout by its id
app.get( "/:id" , (req,res) =>{
    res.send( " get a workout by its id");
})

// CREATE a new workout 
app.post( "/" , (req,res) =>{
    res.send( " POST a new workout");
})

// DELETE A WORKOUT
app.delete( "/" , (req,res) =>{
    res.send( " DELETE a new workout");
})

// UPDATE a workout by its id
app.patch( "/:id" , (req,res) =>{
    res.send( " UPDATE a workout by its id");
})
app.listen( process.env.PORT , ()=> console.log('listening at port 4000'));