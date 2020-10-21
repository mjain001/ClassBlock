const mongoose = require("mongoose");
const today = require("./date.js");
const teacherschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeid: {
    type: String,
    unique: true,
    required: true,
  },
  mobilenumber: {
    type: Number,
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
  branch: {
    type: String,
  },
  biourl: String,
  datecreated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  dateupdated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
});

const Teacher = mongoose.model("teacher", teacherschema);

module.exports = Teacher;
