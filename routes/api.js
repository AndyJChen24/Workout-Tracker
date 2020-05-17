const router = require("express").Router(); 
const path = require("path"); 
const Workout = require("../models/workout.js"); 

router.post("/api/workouts", ({body}, res) => {
    Workout.create({body})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});
router.put("/api/workouts/:id",({body,params},res)=>{
  Workout.findByIdAndUpdate(
    params.id,
    {$push:{exercises: body} },
    {new:true, runValidators:true}
  ).then(dbWorkout =>{
    res.json(dbWorkout);
  }).catch(err=>{
    res.json(err);
  })
})

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// GET - Find all workouts in last seven days
router.get("/api/workouts/range", (req, res) => {
	Workout.find({ })
		.sort({ day: 1 })
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});
module.exports = router;