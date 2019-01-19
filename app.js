/*// Require Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const studentRouter = require('./route/student')
//doing the same thing as line 5. We are using {} to deconstruct since it is exporting object from module.exports on index.js
const { studentRouter } = require("./route");

// Init App
const app = express();

// Basic Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//our code:
app.use("/student", studentRouter);
// Listen on server
app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});

*/

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const studentsRouter = require("./route/student");

// Init App
const app = express();

// Basic Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Mount Router
app.use("/student", studentsRouter);

// Listen on server
app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
