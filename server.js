const mongoose = require("mongoose");
const Classroom = require("./models/classroom");
const Student = require("./models/student");
const Event = require("./models/event");
const Post = require("./models/post");
const Teacher = require("./models/teacher");

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
