const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Profileurl: String,
  Mobilenumber: {
    type: Number,
    required: true,
  },
  Enrollment: {
    type: String,
    required: true,
  },
  Mailid: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  Year: Date,
  Branch: String,
  Resumeurl: String,
  Datecreated: Date,
  Dateupdated: Date,
  isCR: Boolean,
});

const Student = mongoose.model("student", studentschema);
module.exports = Student;
