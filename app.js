// Require Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Init App
const app = express();

// Basic Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//Mount the Router:
//Every time it goes to this route on the website, go to student.js
const studentRouter = require("./route/student");
app.use("/student", studentRouter);
// or can be done like this too: app.use("/student", require("./route/student"));

// Listen on server

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
