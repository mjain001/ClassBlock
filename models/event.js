const mongoose = require("mongoose");
const today = require("./date.js");

const eventschema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  EventUrl: {
    type: String,
    unique: true,
    required: true,
  },
  Date: {
    type: String,
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
});

const event = mongoose.model("event", eventschema);
module.exports = event;
