const mongoose = require("mongoose");
const today = require("./date.js");
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
  password: {
    type: String,
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
  Datecreated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  Dateupdated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  isCR: Boolean,
});
const Student = mongoose.model("student", studentschema);
module.exports = Student;
