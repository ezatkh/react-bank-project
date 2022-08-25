const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const api = require("./server/routes/api.js");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/bankeDB");

app.use("/", api);

app.listen(8000, function () {
  console.log("Server up and running on port 8000");
});
