const express = require('express');
const router = express.Router();
const WorkoutModel = require('../models/workout.js');
const workoutController = require('../controller/workoutController.js')

// GET all workouts
router.get( "/", workoutController.getWorkouts)

// GET a single workout by its id
router.get( "/:id" , workoutController.getSingleWorkout)

// CREATE a new workout 
router.post( "/" , workoutController.createWorkout)

// DELETE A WORKOUT
router.delete( "/:id" , workoutController.deleteWorkout)

// UPDATE a workout by its id
router.patch( "/:id" , workoutController.updateWorkout)
module.exports = router;