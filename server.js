const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./Develop/routes/api.js"));
