const mongoose = require("mongoose");

const url = "mongodb://localhost:27017";
const databaseName = "e-comm";

mongoose.connect(url + "/" + databaseName);
