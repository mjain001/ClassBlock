const mongoose = require("mongoose");
const today = require("./date.js");

const eventschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  eventurl: {
    type: String,
    unique: true,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  datecreated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  dateupdated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
});

const events = mongoose.model("events", eventschema);
module.exports = events;
