const express = require("express");
require("./db/conn");
const Student =require("./models/students");
 const app = express();
const port = process.env.PORT  ||3000;

app.use(express.json())

//creat a new students

 app.post("/students", (req,res)=>{
console.log(req.body);
const  user = new Student(req.body);

user.save().then(()=>{
  res.status(201).send(user);
}).catch((e) =>{
  res.status(400).send(e);
})

  
app.post("/student", async(req,res)=>{
  try{
    
  
  const  user = new Student(req.body);

     const creatUser = await user.save();
     res.status(201).send(user);
  }
     catch(e){
      res.status(400).send(e);
    }
  

})
  
 })

 app.listen(port, () =>{
    console.log(`connection is setup at ${port}`);

 })
 

 app.get("/students", async(req,res)=>{
  try{
      const studentData= await Student.find();
      res.send(studentData);

  }catch(e){
    res.sendStatus(e);

  }
 })

 app.get("/students/:id", async(req,res)=>{
  try{
      const _id= req.params.id;
         const studentsData = await Student.findById({_id})
      res.send(studentsData);

  }catch(e){
    res.sendStatus(e);

  }
 })

 app.patch("/students/:id", async(req,res)=>{
  try{
      const _id= req.params.id;
         const updateStudents = await Student.findByIdAndUpade(_id, rea.body,{
          new :true
         });
      res.send(updateStudents);

  }catch(e){
    res.status(400).send(e);

  }
 })

 app.delete("/students/:id", async(req,res)=>{
  try{
      const _id= req.params.id;
         const  deleteStudnts = await Student.findByIdAndDelete({_id})
      res.send(deleteStudnts);

  }catch(e){
    res.sendStatus(e);

  }
 })