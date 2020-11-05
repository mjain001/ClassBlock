const post = require("../models/Post");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const { findOneAndDelete } = require("../models/Post");

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newpost = new post({
      postedBy: req.user.id,
      userType: req.user.type,
      content: req.body.content,
    });
    newpost
      .save()
      .then((entry) => {
        if (entry) res.json(entry).status(200);
        res.json({ error: "post was not created" }).status(401);
      })
      .catch((error) => {
        res.json(error).status(451);
      });
    //res.json({ msg: "add post works", user: req.user });
  }
);

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    post.find();
  }
);

module.exports = router;
