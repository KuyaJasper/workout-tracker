// TODO: SET THIS UP FOR WORKOUTS

const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields:{
totalDuration: {$sum: "$exercises.duration"},
      }
    },
  ]).then(workoutDuration =>{
    res.json(workoutDuration);
  })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
Workout.findByIdAndUpdate(req.params.id,{ $push: {exercises:req.body}}, {new: true})
    .then(newWorkout => {
      res.json(newWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
Workout.create(req.body)
    .then(newWorkout => {
      res.json(newWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields:{
totalDuration: {$sum: "$exercises.duration"},
      }
    },
  ]).sort({_id: -1}).limit(7).then(newWorkout => {
    res.json(newWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;
