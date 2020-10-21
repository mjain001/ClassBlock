const mongoose = require("mongoose");
const today = require("./date.js");
const Student = require("./student.js");

// const likeschema = new mongoose.Schema({
//   likedBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     unique: false,
//     refPath:'userType',
//     required: true, 
//   },
//   userType:{
//     type:String,
//     required:true,
//     enum:['Student','Teacher'],
//   },
//   //Dynamic References via `refPath`
//   //https://mongoosejs.com/docs/populate.html#dynamic-ref
//   Datecreated: {
//     type: Date,
//     default: today.toLocaleDateString("en-US"),
//   },
//   Dateupdated: {
//     type: Date,
//     default: today.toLocaleDateString("en-US"),
//   },
// });

const commentschema = new mongoose.Schema({
  postedBy: {
    type:mongoose.Schema.Types.ObjectId,
    required: true,
    refPath:'userType',
  },
  userType:{
    type:String,
    required:true,
    enum:['Student','Teacher'],
  },
  body: {
   type:String,
   required:true,
  },
  likedByStudent:{  
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Student',
  },
  likedByTeacher:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Teacher',
  },
  reply:{ 
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Comment',
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

const postschema = new mongoose.Schema({
  postedBy: {
    type:mongoose.Schema.Types.ObjectId,
    refPath:'userType',
    required:true,
  },
  userType:{
    type:String,
    required:true,
    enum:['Student','Teacher'],
  },
  likedByStudent:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Student',
  },
  likedByTeacher:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Teacher',
  },
  content:{
    type:String,
    required:true, 
  }, 
  media:{
    type:String,
    required:true,
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
 // like: [likeschema]
});

const Post = mongoose.model("post", postschema);
//const Like = mongoose.model("like", likeschema);
const Comment = mongoose.model("comment", commentschema);

module.exports = Post;
