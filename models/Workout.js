const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
   name: {
      type: String,
      trim: true,
      required: [true, 'Name is required']
   },
   description: {
      type: String,
      trim: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
})

module.exports = mongoose.model('Workout', WorkoutSchema);