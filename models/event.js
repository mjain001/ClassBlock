const mongoose = require("mongoose");

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
  Datecreated: Date,
  Dateupdated: Date,
});

const event = mongoose.model("event", eventschema);
module.exports = event;
