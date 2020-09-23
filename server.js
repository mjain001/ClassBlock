const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mayankj:07544263923@cluster0.ioj9x.mongodb.net/classBlock",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", () => {
  console.log("Database connected successfully");
});

const studentschema = new mongoose.schema({
  _Id: Number,
  Name: String,
  Profileurl: String,
  Mobilenumber: Number,
  Mailid: String,
  DOB: Date,
  Year: Date,
  Branch: String,
  Resumeurl: String,
  Enroll: String,
  Datecreated: Date,
  Dateupdated: Date,
});

const teacherschema = new mongoose.schema({
  _Id: Number,
  Name: String,
  Profileurl: String,
  Mobilenumber: Number,
  Mailid: String,
  DOB: Date,
  Year: Date,
  Branch: String,
  Biourl: String,
  Enroll: String,
  Datecreated: Date,
  Dateupdated: Date,
});

const classroomschema = new mongoose.schema({
  _Id: Number,
  studentName: String,
  teacherName: String,
  teacherProfileurl: String,
  SubjectName: String,
  Date: Date,
  Datecreated: Date,
  Dateupdated: Date,
});

const eventschema = new mongoose.schema({
  _Id: Number,
  Name: String,
  EventUrl: String,
  Date: Date,
  Datecreated: Date,
  Dateupdated: Date,
});

const likeschema = new mongoose.schema({
  _Id: Number,
  user_Id: Number,
  Datecreated: Date,
  Dateupdated: Date,
});

const commentschema = new mongoose.schema({
  _id: String,
  user_Id: Number,
  comment: String,
  Datecreated: Date,
  Dateupdated: Date,
});

const postschema = new mongoose.schema({
  _Id: Number,
  user_Id: Number,
  userName: String,
  Datecreated: Date,
  Dateupdated: Date,
  comments: [commentschema],
  likes: [likeschema],
});

constStudent = mongoose.model("student", studentschema);
constTeacher = mongoose.model("teacher", teacherschema);
constclassroom = mongoose.model("classroom", classroomschema);
constPost = mongoose.model("post", postschema);
constLike = mongoose.model("like", likeschema);
constComment = mongoose.model("comment", commentschema);
