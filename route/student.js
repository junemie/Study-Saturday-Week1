const express = require("express");
const router = express.Router();
let student = [{ id: 1, name: "Dan" }, { id: 2, name: "Karen" }];

//if someome wasnt to get information about sutdents, is to send that file for them to
rounter.get("/", (req, res, next) => {
  try {
    res.send(students);
  } catch (err) {
    console.log(err);
    //if we do have an error we want to make sure it encounters an error
  }
});

module.exports = router;
