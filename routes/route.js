const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.get("/students", (req, res, next) => {
  Student.find(function(err, student) {
    res.json(student);
  });
});

router.post("/student", (req, res, next) => {
  let newStudent = new Student({
    roll_no: req.body.roll_no,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });

  newStudent.save((err, student) => {
    if (err) {
      res.json({ msg: "Failed to add contact. Error : " + err });
    } else {
      res.json({ msg: "Contact added successfully" });
    }
  });
});

router.delete("/student/:id", (req, res, next) => {
  console.log(req.params.id);
  Student.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
