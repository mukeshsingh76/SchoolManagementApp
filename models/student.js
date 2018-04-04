const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  roll_number: {
    type: String,
    require: true
  },
  first_name: {
    type: String,
    require: true
  },
  last_name: {
    type: String,
    require: true
  },
  sex: {
    type: String,
    require: true
  }
});

const Student = (module.exports = mongoose.model("student", StudentSchema));
