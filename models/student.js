const mongoose = require("mongoose");
const today = require("./date.js");
const studentschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enrollment: {
    type: String,
    unique: true,
    required: true,
  },
  program: {
    type: String,
  },
  mobilenumber: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  followedByStudent: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student",
  },
  followedByTeacher: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Teacher",
  },
  studentFollowing: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student",
  },
  teacherFollowing: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Teacher",
  },
  dob: {
    type: Date,
  },
  profileurl: {
    type: String,
  },
  resume: {
    type: String,
  },
  year: String,
  branch: String,
  datecreated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  dateupdated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  isCR: {
    type: Boolean,
    default: false,
  },
});
const Student = mongoose.model("student", studentschema);
module.exports = Student;
//following are to be added
//password field
//followers and following list
