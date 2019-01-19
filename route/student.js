const express = require("express");
const router = express.Router();
let students = [{ id: 1, name: "Dan" }, { id: 2, name: "Karen" }];

//if someome wasnt to get information about sutdents, is to send that file for them to
router.get("/", (req, res, next) => {
  res.send(students);
});

//post and put have req.body -> an object that is being passed.
//addig a new thing to a table

router.post("/", (req, res, next) => {
  //its adding the new student (req.body) to the students array
  //or optional:
  const updatedStudents = [...students, req.body];
  students.push(req.body);
});

//to modify existing data we use put. We would page we would specify.

router.put("/:studentId", (req, res, next) => {
  try {
    const studentId = req.params.studentId;
    //we want to find corresponding id based from the students to make change
    //specific student is found that you want to make change....finding which student to update.
    const currentStudent = students.filter(st => {
      return st.id === Number(req.params.studentId);
    })[0];
    //We have the [0] bc we want the object inside of the array!!!!!!!
    //we created a new objcet and copied over, and we spreated over.

    //if we wanted to update specific key from students table. we want to do below:
    const change = req.body; //{name: Matthew}
    //id: 2, name: "Karen" , name: Kristin
    //currentStudent.name = change.name
    //{id: 2, name: "Karen" , name: Kristin}
    const updatedStudents = { ...currentStudent, ...change };
    //if you use spread operator on object,  it return key value pairs and you can replace with next parameter. We use spread operator because we don't know what value has been changed.

    //when you use spread operator with an object it is looking as key value pairs... And we are able to update whatever the change that was made in value...
    /*
    Example:
    currentObj = {id: 2, name: "Karen" }
    newInput = {name: Kristin}
    const updatedObj = {...currentObj, ...currentObj};
    now the updatedObj = {id: 2, name: "Kristin"}
    */

    // currentStudent.name = change.name
    res.send(updatedStudents);
  } catch (error) {
    next(err);
  }
});

//which record is going to be deleted.
//
router.delete("/:id", (req, res, next) => {
  try {
    //we are going to return all students that does not match id number
    const updatedStudents = students.filter(student => {
      return student.id !== Numnber(req.params.id);
    });
    //returns the updated table to the browser.
    res.send(updatedStudents);
  } catch (error) {}
});
module.exports = router;
