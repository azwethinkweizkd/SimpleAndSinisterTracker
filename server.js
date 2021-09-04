const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost:27017/SAndSFitnessTracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to db successfully"))
  .catch((e) => console.log(e));

app.use(require("./routes/homeRoute"));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
