const studentRouter = require("express").Router();
const student = require("express");

//for practice: we are using fake data but normally you would be importing this and it would look like this:
/*
You will be saying ok get the data from db folder where student information is .
Because module.export is exporting object, we have to decontruct and say const {studentData} = db;
We are storing to student variable to use that information.

const db = require("../db/db")
const {students} = db;
*/
let studentData = [
  { id: 1, name: "June" },
  { id: 2, name: "Huibin" },
  { id: 3, name: "Catherine" }
];

//we said on app.js every time someone goes to /student
//get '/' -> this means this is /student
studentRouter.get("/", (req, res, next) => {
  try {
    res.send({ ...studentData });
  } catch (error) {
    next(error);
  }
});

// get id!

studentRouter.get("/:id", (req, res, next) => {
  try {
    let idNum = Number(req.params.id);
    let returnStudent = studentData.filter(studentObj => {
      if (studentObj.id === idNum) {
        return true;
      }
    })[0];
    res.send(returnStudent);
  } catch (error) {
    next(err);
  }
});

//post -> creates new information
studentRouter.post("/", (req, res, next) => {
  try {
    let info = req.body;
    let newStudent = { id: info.id, name: info.name };
    studentData.push(newStudent);
    res.send(newStudent);
  } catch (error) {
    next(error);
  }
});

//put -> update information

studentRouter.put("/:id", (req, res, next) => {
  try {
    //1. store currentStudet variable to store the student you want to update
    //2. store the chang you want to make in a variable
    //3. store newUdated information in a variable using {..., ...}
    //4. update the data
    let idNum = Number(req.params.id);
    let currentStudet = studentData.filter(studentObj => {
      return idNum === studentObj.id;
    })[0];
    let change = req.body;
    let updatedStudent = { ...currentStudet, ...change };
    studentData[idNum] = updatedStudent;
    res.send(studentData);
  } catch (error) {
    next(error);
  }
});

studentRouter.delete("/:id", (req, res, next) => {
  try {
    let newData = studentData.filter(studentObj => {
      if (studentObj.id !== +req.params.id) {
        return true;
      }
    });
    studentData = newData;
    res.send(studentData);
  } catch (error) {
    next(error);
  }
});
module.exports = studentRouter;
