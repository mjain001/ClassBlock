const express = require('express')
const Student = require('../models/student')
const router = express.Router()

router.get("/id",(req,res,next)=>{
    res.json({msg:"student id  is working"})
})
router.post("/register",(req,res,next)=>{
    console.log(req.body)
    const newStudent = new Student({
        name : req.body.name,
        enrollment: req.body.enrollment,
        program: req.body.program,
        mobilenumber: req.body.mobilenumber,
        email: req.body.email,
        dob: req.body.dob,
    })
    newStudent.save().then(result=>{
        res.json(result).status(200)
    })
})


module.exports = router
