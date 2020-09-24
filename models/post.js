const mongoose = require("mongoose");

const likeschema = new mongoose.Schema({
  user_Id: {
    type: Number,
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
});

const commentschema = new mongoose.Schema({
  user_Id: {
    type: Number,
    unique: true,
    required: true,
  },
  comment: String,
  Datecreated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
  Dateupdated: {
    type: Date,
    default: today.toLocaleDateString("en-US"),
  },
});

const postschema = new mongoose.Schema({
  user_Id: {
    type: Number,
    unique: true,
    required: true,
  },
  userName: {
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
  comments: [commentschema],
  likes: [likeschema],
});

const Post = mongoose.model("post", postschema);
const Like = mongoose.model("like", likeschema);
const Comment = mongoose.model("comment", commentschema);

module.exports = Post;
