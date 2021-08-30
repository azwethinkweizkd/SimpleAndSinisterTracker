const { model, Schema } = require("mongoose");

const exercises = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: [true, "What is the type of exercise"],
      },
      name: {
        type: String,
        trim: true,
        required: [true, "What is the name of exercise"],
      },
      duration: {
        type: Number,
        trim: true,
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
    },
  ],
});

module.exports = model("Exercise", exercises);
