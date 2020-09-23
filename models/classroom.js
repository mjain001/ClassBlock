const mongoose = require("mongoose");
const classroomschema = new mongoose.Schema({
  studentName: String,
  teacherName: String,
  teacherProfileurl: String,
  SubjectName: String,
  Date: Date,
  Datecreated: Date,
  Dateupdated: Date,
});
const classroom = mongoose.model("classroom", classroomschema);

module.exports = classroom;
