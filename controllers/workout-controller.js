const Workout = require('../models/Workout');
const fs = require('fs');
const path = require('path');

/* @desc   Get all workouts
   @route  GET /api/workouts
   @access Public
*/
exports.getAllWorkouts = async (req, res, next) => {
   try {
      const workouts = await Workout.find();

      return res.status(200).json({
         success: true,
         count: workouts.length,
         workouts
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         error: 'Server Error'
      })
   }
}

/* @desc   Get workout
   @route  GET /api/workout/:id
   @access Public
*/
exports.getWorkout = async (req, res, next) => {
   try {
      const workout = await Workout.findById(req.params.id);
      
      return res.status(200).json({
         success: true,
         workout
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         error: 'Server Error'
      })
   }
}

/* @desc   Add workout
   @route  Post /api/workouts
   @access Public
*/
exports.addWorkout = async (req, res, next) => {
   try { 
      const workout = await Workout.create(req.body);
   
      return res.status(201).json({
         success: true,
         workout
      });
   } catch (error) {
      if(error.name === 'ValidationError') {
         const messages = Object.values(error.errors).map(val => val.message);

         return res.status(400).json({
            success: false,
            error: messages
         });
      } else {
         return res.status(500).json({
            success: false,
            error: 'Server Error'
         });
      }
   }
}

/* @desc   Update workout
   @route  Put /api/workouts
   @access Public
*/
exports.updateWorkout = async (req, res, next) => {
   try {
      console.log(req);
      let workout = await Workout.findById(req.body.id);
      workout = {
         ...workout,
         ...req.body,
         image: {
            data: fs.readFileSync(path.join(__dirname + '../uploads/' + req.file.filename)),
            contentType: 'image/png'
         }
      }      
      const updatedWorkout = await Workout.update(workout);
   
      return res.status(201).json({
         success: true,
         updatedWorkout
      });
   } catch (error) {
      if(error.name === 'ValidationError') {
         const messages = Object.values(error.errors).map(val => val.message);

         return res.status(400).json({
            success: false,
            error: messages
         });
      } else {
         return res.status(500).json({
            success: false,
            error: 'Server Error'
         });
      }
   }
}

/* @desc   Delete workout
   @route  DELETE /api/workouts/:id
   @access Public
*/
exports.deleteWorkout = async (req, res, next) => {
   try {
      const workout = await Workout.findById(req.params.id);

      if(!workout) {
         return res.status(404).json({
            success: false,
            error: 'No workout found'
         });
      }
      await workout.remove();

      return res.status(200).json({
         success: true,
         data: {}
      })
   } catch (error) {
      return res.status(500).json({
         success: false,
         error: 'Server Error'
      });
   }
}