const mongoose = require("mongoose");

const teacherschema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Emoployeeid: {
    type: Number,
    required: true,
  },
  Mobilenumber: {
    type: Number,
    required: true,
  },
  Mailid: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  Year: Date,
  Branch: {
    type: String,
    required: true,
  },
  Biourl: String,
  Enroll: String,
  Datecreated: Date,
  Dateupdated: Date,
});

const Teacher = mongoose.model("teacher", teacherschema);

module.exports = Teacher;
