const express = require('express');
const router = express.Router();
const multer = require('multer');
const {getAllWorkouts, getWorkout, addWorkout, updateWorkout, deleteWorkout} = require('../controllers/workout-controller');

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, '../uploads')
   },
   filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
   }
})
const upload = multer({storage: storage});

// Route to controller
router
   .route('/')
   .get(getAllWorkouts)
   .post(addWorkout)
   .put(upload.single('image'), addWorkout);

router
   .route('/:id')
   .get(getWorkout)
   .delete(deleteWorkout);

module.exports = router;