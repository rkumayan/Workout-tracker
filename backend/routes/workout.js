const express = require('express');
const router = express.Router();

router.get( '/' , (req,res) =>{
    res.send( ' busy in my workouts ')
});

module.exports = router;