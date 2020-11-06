const mongoose = require("mongoose");
const today = require("./date.js");

const commentschema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "userType",
  },
  userType: {
    type: String,
    required: true,
    enum: ["Student", "Teacher"],
  },
  body: {
    type: String,
    required: true,
  },
  likedByStudent: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student",
  },
  likedByTeacher: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Teacher",
  },
  reply: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Comment",
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

//const Like = mongoose.model("like", likeschema);
const Comment = mongoose.model("comment", commentschema);

module.exports = Comment;
