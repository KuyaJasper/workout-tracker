const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// mongodb+srv://KuyaJasper:<password>@cluster0.iogd3.mongodb.net/workoutsdb?retryWrites=true&w=majority

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/pages.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
