const express =require("express")
const Teacher = require("../models/teacher")
const router = express.Router()

router.get("/id=:id",(req,res,next)=>{
    console.log(res)
    res.json({msg:`${req.params.id}`})
})
router.get("/post/id=:id",(req,res,next)=>{
    console.log(res)
    res.json({msg:`${req.params.id}`})
})
router.get("/test/id=:id",(req,res,next)=>{
    console.log(res)
    res.json({msg:`${req.params.id}`})
})
router.get("/details/id=:id",(req,res,next)=>{
    console.log(res)
    res.json({msg:`${req.params.id}`})
})
router.get("/studentperformance/id=:id",(req,res,next)=>{
    console.log(res)
    res.json({msg:`${req.params.id}`})
})

router.post("/register",(req,res,next)=>{
    console.log(res)
    const newTeacher = new Teacher({
       name: req.body.name,
       employeeid: req.body.employeeid,
       mobilenumber: req.body.mobilenumber,
       email: req.body.email,
       branch: req.body.branch
    }) 
    newTeacher.save().then(result=>{
        res.json(result).status(200)
    })
})

module.exports =router