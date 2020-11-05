const mongoose = require("mongoose");
const student = require("./routes/student");
const teacher = require("./routes/teacher");
const classroom = require("./routes/classroom");
const events = require("./routes/events");
const post = require("./routes/post");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/student", student);
app.use("/api/teacher", teacher);
app.use("/api/classroom", classroom);
app.use("/api/events", events);
app.use("/api/post", post);

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port number :${port}`);
});
