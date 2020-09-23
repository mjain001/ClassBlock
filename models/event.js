const mongoose = require("mongoose");

const eventschema = new mongoose.Schema({
  Name: String,
  EventUrl: String,
  Date: Date,
  Datecreated: Date,
  Dateupdated: Date,
});

const event = mongoose.model("event", eventschema);
module.exports = event;
