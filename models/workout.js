// TO DO: SET UP WORKOUT MODEL

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        required: "Workout type is required"
      },
      name: {
        type: String,
        required: "Workout needs a name"
      },
      duration: {
        type: Number,
        required: "Duration needs to be defined"
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
  }
  ],
  day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
