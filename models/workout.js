const mongoose = require('mongoose');
const Schema = mongoose.Schema;

WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{

        type: {
            type: String,
            trim: true,
            required: 'Exercise type is required'
        },
        name: {
            type: String,
            trim: true,
            required: 'Exercise name is required'
        },
        duration: {
            type: Number,
            required: 'Exercise duration is required'
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }]
});
  
// Creates a virtual property called 'totalDuration' which is used for the reporting view/feature, but not stored in the database
WorkoutSchema.virtual('totalDuration').get(() => {
    let totalDuration = 0;

    this.exercises.forEach(exercise => {
        totalDuration += exercise.duration;
    });
    return totalDuration;
});

// Allows us to pass virtual properties as JSON in our response to the view engine 
WorkoutSchema.set('toJSON', { virtuals: true });
  
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;