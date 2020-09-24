const mongoose = require("mongoose");

const teacherschema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Emoployeeid: {
    type: Number,
    unique: true,
    required: true,
  },
  Mobilenumber: {
    type: Number,
    required: true,
  },
  Mailid: {
    type: String,
    unique: true,
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
  Datecreated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  Dateupdated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
});

const Teacher = mongoose.model("teacher", teacherschema);

module.exports = Teacher;
