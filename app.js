"use strict";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const bearerToken = require("express-bearer-token");
const app = express();
const db = require("./configs/database");

const userRoutes = require("./routes/user.routes");

//Database Connection
db.connect();

app.use(bearerToken());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.urlencoded());

app.use("/api", userRoutes);

app.listen(8888, () => {
  console.log("Server running on Port 8888");
});

module.exports = app;
