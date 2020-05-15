const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
    },
    exercise :[
        {   
            type: String,
            name: String,
            weight: Number,
            sets: Number,
            reps: Number,
            duration: Number,
        
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;