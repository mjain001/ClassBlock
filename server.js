const mongoose = require("mongoose");
const Classroom = require("./models/classroom");
const Student = require("./models/student");
const Event = require("./models/Events");
const Post = require("./models/post");
const Teacher = require("./models/teacher");
const student = require("./routes/student");
const teacher =require("./routes/teacher");
const classroom =require("./routes/classroom");
const events =require("./routes/events");
const storywall = require("./routes/storywall");
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use("/api/student",student);
app.use("/api/teacher",teacher);
app.use("/api/classroom",classroom);
app.use("/api/events",events);
app.use("/api/storywall",storywall)


mongoose.connect(
  "mongodb+srv://MANASVI:manasvi@cluster0.fiebu.mongodb.net/classblock?retryWrites=true&w=majority",
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

const port = process.env.PORT || 5000
app.listen(port,()=>{console.log(`Server running on port number :${port}`)})

