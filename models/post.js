const mongoose = require("mongoose");

const likeschema = new mongoose.Schema({
  user_Id: Number,
  Datecreated: Date,
  Dateupdated: Date,
});

const commentschema = new mongoose.Schema({
  user_Id: Number,
  comment: String,
  Datecreated: Date,
  Dateupdated: Date,
});

const postschema = new mongoose.Schema({
  user_Id: Number,
  userName: String,
  Datecreated: Date,
  Dateupdated: Date,
  comments: [commentschema],
  likes: [likeschema],
});

const Post = mongoose.model("post", postschema);
const Like = mongoose.model("like", likeschema);
const Comment = mongoose.model("comment", commentschema);

module.exports = Post;
