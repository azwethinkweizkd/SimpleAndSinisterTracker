const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;

const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.set("debug", true);

mongoose
	.connect(
		process.env.MONGODB_URI || "mongodb://localhost:27017/SAndSFitnessTracker",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		}
	)
	.then(() => console.log("Connected to db successfully"))
	.catch((e) => console.log(e));

app.use(require("./routes"));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
