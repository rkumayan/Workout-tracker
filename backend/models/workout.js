const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        minlength : 3
    },
    reps :{
        type : Number,
        required : true,
        min : 1
    },
    load : {
        type : Number,
        required : true,
        min : 1
    },
    date : { type : Date, default: Date.now},

} );
const WorkoutModel = mongoose.model('Workout', workoutSchema);

module.exports = WorkoutModel;