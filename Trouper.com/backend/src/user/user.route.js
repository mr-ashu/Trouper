const express = require("express");
const User = require("./user.model")

const app = express.Router();
 

app.get("/", async (req, res) => {
    try {
        let u = await User.find({}, { password: 0 })
        res.send(u)
    } catch (er) {
        res.status(404).send(er.message)
    }
})
app.post("/login", async (req, res) => {
    let {email,password}=req.body;
 
   try {
    let u = await User.findOne({email,password})
   
    if(!u){
    return res.status(401).send("Authentication Failed")
    }

    res.send({
        token:`${u.email}_#_${u.password}`,user:u
})
   } catch (e) {
      res.status(404).send(e.message)
   }
})
 
app.post("/signup", async (req, res) => {
    let {email,userId}=req.body;
 
   try {
    let u =await User.findOne({email})
    let v =await User.findOne({userId})
   
    if(u||v){
        return res.status(404).send("user already exist")
 
    }
    else{ 
    let user=await User.create({...req.body})
    res.send([{token:`${user.email}_#_${user.password}`},{user}])
    }
   } catch (e) {
      res.status(404).send(e.message)
   }
})

app.delete("/:id", async (req, res) => {
    let {id}=req.params;
    try {
        let u = await User.findByIdAndDelete({_id:id})
        res.send(u)
    } catch (e) {
        res.status(404).send(e.message)
    }
})

app.get("/:id",async(req,res)=>{
    let {id}=req.params;
    let user=await User.findOne({_id:id})
     res.send(user)
     
     
   })


module.exports = app;