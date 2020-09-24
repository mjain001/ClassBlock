const mongoose = require("mongoose");
const classroomschema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  teacherName: {
    type: String,
    required: true,
  },
  SubjectName: {
    type: String,
    required: true,
  },
  teacherProfileurl: {
    type: String,
    unique: true,
    required: true,
  },
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
const classroom = mongoose.model("classroom", classroomschema);

module.exports = classroom;
