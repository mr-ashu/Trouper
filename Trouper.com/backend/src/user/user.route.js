const express = require("express");
const User = require("./user.model")

const app = express.Router();
 


app.post("/login", async (req, res) => {
    let {email,password}=req.body;
 
   try {
    let u = await User.findOne({email,password})
   
    if(!u){
    return res.status(401).send("Authentication Failed")
    }

    res.send({
        token:`${u.id}:${u.email}:${u.password}`
    })
   } catch (e) {
      res.status(500).send(e.message)
   }
})
 
app.post("/signup", async (req, res) => {
    let {email}=req.body;
 
   try {
    let u = await User.findOne({email})
   
    if(u){
        return res.status(404).send("user already exist")
 
    }
    let createuser=await User.create(req.body)
    res.send({
        
        token:`${createuser.id}:${createuser.email}:${createuser.password}`
    })
   } catch (e) {
      res.status(500).send(e.message)
   }
})

 


module.exports = app;