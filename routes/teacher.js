const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Teacher = require("../models/teacher");
const { secret } = require("../config/keys");
const router = express.Router();

router.get("/id=:id", (req, res, next) => {
  console.log(res);
  res.json({ msg: `${req.params.id}` });
});
router.get("/post/id=:id", (req, res, next) => {
  console.log(res);
  res.json({ msg: `${req.params.id}` });
});
router.get("/test/id=:id", (req, res, next) => {
  console.log(res);
  res.json({ msg: `${req.params.id}` });
});
router.get("/details/id=:id", (req, res, next) => {
  console.log(res);
  res.json({ msg: `${req.params.id}` });
});
router.get("/studentperformance/id=:id", (req, res, next) => {
  console.log(res);
  res.json({ msg: `${req.params.id}` });
});

router.post("/register", (req, res, next) => {
  Teacher.findOne({
    $or: [
      {
        email: req.body.email,
      },
      {
        employeeid: req.body.employeeid,
      },
    ],
  }).then((teacher) => {
    if (teacher)
      res.json({ msg: "Teacher with same email or employeeid already exists" });

    const newTeacher = new Teacher({
      name: req.body.name,
      employeeid: req.body.employeeid,
      email: req.body.email,
      password: req.body.password,
    });
    bcrypt.genSalt(10, (error, salt) => {
      if (error) throw error;
      bcrypt.hash(newTeacher.password, salt, (error, hash) => {
        if (error) throw error;
        newTeacher.password = hash;
        newTeacher
          .save()
          .then((result) => {
            res.json(result).status(200);
          })
          .catch((error) => {
            if (error) throw error;
          });
      });
    });
  });
});

router.post("/login", (req, res) => {
  console.log(req);
  const employeeid = req.body.employeeid;
  const password = req.body.password;
  Teacher.findOne({ employeeid: employeeid }).then((teacher) => {
    if (!teacher) res.json({ msg: "No teacher with this employeeid exists" });
    bcrypt.compare(password, teacher.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: teacher._id,
          employeeid: teacher.employeeid,
          name: teacher.name,
          type: "Teacher",
        };
        jwt.sign(payload, secret, (error, token) => {
          if (error) res.json({ error }).status(401);
          res.json({ success: true, token: `Bearer ${token}` }).status(200);
        });
      } else res.json({ msg: "Password does not match " }).status(400);
    });
  });
});

module.exports = router;
