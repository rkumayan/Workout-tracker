const { default: mongoose } = require('mongoose');
const WorkoutModel = require('../models/workout.js');

// get all the workouts
const getWorkouts = async(req, res)=>{
    try{
        const result = await WorkoutModel.find().sort( {date : -1});
        res.send(result);
    }
    catch( err){
        res.send( { 'err ' : err.message});
    }
    
};

// get a single workout by its id
const getSingleWorkout = async( req,res) =>{
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send( {error : ' Invalid id'});
    try{
        const workout = WorkoutModel.findById(id);
        if( !workout)
            return res.status(400).send( {error : 'no such workout exists'});
        
        const result = await WorkoutModel.find( { _id : id});
        res.send(result);
    }
    catch( err){
        res.send( {'error ' : err.message});
    }
}

// create a new workout
const createWorkout =  async (req,res) =>{
    try{
        const workout = new WorkoutModel(req.body);
        const result = await workout.save();
        
        res.send(result);
    }
    catch( error ){
        console.log(  error.message );
        res.status(400).send( {error : error.message})
    }
    
}

// delete a workout
const deleteWorkout = async( req,res) =>{
    
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send( {error : ' Invalid id'});

    try{
        const workout = WorkoutModel.findById(id);
        if( !workout)
            return res.status(400).send( {error : 'no such workout exists'})
        
        const result = await WorkoutModel.findOneAndDelete({ _id : id});
        res.send(result);
    }
    catch( err){
        res.send( {'error ' : err.message});
    }
}

// update a workout
const updateWorkout = async(req,res)=>{
    const id = req.params.id;
    if( !mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send( {error : ' Invalid id'});

    try{
        const workout = await WorkoutModel.findOneAndUpdate( {_id : id} , req.body);
        if( !workout)
            return res.status(400).send( {error : 'no such workout exists'})
        res.send( workout);
    }
    catch(err){
        res.send( {'error ' : err.message});
    }
}
module.exports = {
    getWorkouts ,getSingleWorkout , createWorkout, deleteWorkout,
    updateWorkout

};