const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Show dotenv where the config file is
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

const workoutsRouter = require('./routes/workoutsRouter');

const app = express();



// Use body parser middleware (POST requests)
app.use(express.json());
app.use(express.urlencoded({extended: false}))

if(process.env.NODE_ENV === "development") {
   app.use(morgan('dev'));
}

app.use('/api/workouts', workoutsRouter)

if(process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'));

   app.get('*', (req, res) => res.sendFile(path.resolve(
      __dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

