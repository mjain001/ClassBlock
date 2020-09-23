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
