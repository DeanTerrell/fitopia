const express = require('express');
const router = express.Router();
const {getAllWorkouts, getWorkout, addWorkout, deleteWorkout} = require('../controllers/workout-controller');

// Route to controller
router
   .route('/')
   .get(getAllWorkouts)
   .post(addWorkout);

router
   .route('/:id')
   .get(getWorkout)
   .delete(deleteWorkout);

module.exports = router;