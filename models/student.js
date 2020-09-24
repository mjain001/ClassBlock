const mongoose = require("mongoose");
const studentschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Enrollment: {
    type: String,
    unique: true,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  Mobilenumber: {
    type: Number,
    unique: true,
    required: true,
  },
  Mailid: {
    type: String,
    unique: true,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  Profileurl: {
    type: String,
    unique: true,
    required: true,
  },
  Resumeurl: {
    type: String,
    unique: true,
    required: true,
  },
  Year: String,
  Branch: String,
  Datecreated: Date,
  Dateupdated: Date,
  isCR: Boolean,
});
const Student = mongoose.model("student", studentschema);
module.exports = Student;
