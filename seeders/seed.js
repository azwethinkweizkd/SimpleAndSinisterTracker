const mongoose = require("mongoose");
const db = require("../model");
const dotenv = require("dotenv");
dotenv.config();
const exerciseSeed = [
	{
		day: new Date(new Date().setDate(new Date().getDate() - 9)),
		exercises: [
			{
				type: "resistance",
				name: "Bicep Curl",
				duration: 20,
				weight: 100,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 8)),
		exercises: [
			{
				type: "resistance",
				name: "Lateral Pull",
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 7)),
		exercises: [
			{
				type: "resistance",
				name: "Push Press",
				duration: 25,
				weight: 185,
				reps: 8,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 6)),
		exercises: [
			{
				type: "cardio",
				name: "Running",
				duration: 25,
				distance: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 5)),
		exercises: [
			{
				type: "resistance",
				name: "Bench Press",
				duration: 20,
				weight: 285,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 4)),
		exercises: [
			{
				type: "resistance",
				name: "Bench Press",
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 3)),
		exercises: [
			{
				type: "resistance",
				name: "Quad Press",
				duration: 30,
				weight: 300,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 2)),
		exercises: [
			{
				type: "resistance",
				name: "Bench Press",
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4,
			},
		],
	},
	{
		day: new Date(new Date().setDate(new Date().getDate() - 1)),
		exercises: [
			{
				type: "resistance",
				name: "Military Press",
				duration: 20,
				weight: 300,
				reps: 10,
				sets: 4,
			},
		],
	},
];

const seedDatabase = async () => {
	try {
		await mongoose.connect(
			process.env.MONGODB_URI ||
				"mongodb://localhost:27017/SAndSFitnessTracker",
			{
				useNewUrlParser: true,
				useFindAndModify: false,
				useUnifiedTopology: true,
			}
		);
		await db.Exercise.deleteMany({}, { maxTimeMS: 20000 });

		const result = await db.Exercise.collection.insertMany(exerciseSeed);

		console.log(result.result.n + " records inserted!");
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

seedDatabase();
