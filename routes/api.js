const router = require("express").Router();
const { Exercise } = require("../model");

router.get("/workouts", async (req, res) => {
  try {
    const exercise = await Exercise.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);
    res.json(exercise);
  } catch (e) {
    res.json(e);
  }
});

router.put("/workouts/:id", async ({ body, params }, res) => {
  try {
    const updateExercise = await Exercise.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    );

    res.json(updateExercise);
  } catch (e) {
    res.json(e);
  }
});

router.post("/workouts", async (req, res) => {
  try {
    const newExercise = await Exercise.create({});
    res.json(newExercise);
  } catch (e) {
    res.json(e);
  }
});

router.get("/workouts/range", async (req, res) => {
  try {
    const exerciseRange = await Exercise.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);
    res.json(exerciseRange);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
