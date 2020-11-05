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
   sets: Number,
   reps: Number,
   image: {
      data: Buffer,
      contentType: String
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
})

module.exports = mongoose.model('Workout', WorkoutSchema);