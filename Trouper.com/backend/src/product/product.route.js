const express = require("express");
const Product = require("./product.model")

const app = express.Router();
 

app.get("/", async (req, res) => {
    try {
        let u = await Product.find()
        res.send(u)
    } catch (er) {
        res.status(404).send(er.message)
    }
})
 
 
app.post("/", async (req, res) => {
 
   try {
    
    let pdt=await Product.create({
        ...req.body
    })
    res.send(pdt)
   
   } catch (e) {
      res.status(404).send(e.message)
   }
})

app.delete("/:id", async (req, res) => {
    let {id}=req.params;
    try {
        let u = await Product.findByIdAndDelete({_id:id})
        res.send(u)
    } catch (e) {
        res.status(404).send(e.message)
    }
});
 
app.patch("/:id", async (req, res) => {
    let {id}=req.params;
    
    let product=Product.findById({_id:id})
 
     if(!product){
        return res.status(404).send("not found")
     }
    try {

        let u = await  Product.replaceOne({_id:id}, req.body)
    
         res.send(u)
       
    } catch (e) {
        res.status(500).send(e.message)
    }
});
app.get("/:id",async(req,res)=>{
    let {id}=req.params;
    let user=await Product.findOne({_id:id})
     res.send(user)
     
     
   })
 
   app.post("/login", async (req, res) => {
    let {email,password}=req.body;
 
   try {
    let u = await Product.findOne({email,password})
   
    if(!u){
    return res.status(401).send("Authentication Failed")
             }

    res.send({
        token:`${u.id}:${u.email}:${u.password}`,user:u
            })
   } catch (e) {
      res.status(404).send(e.message)
   }
})
 
app.post("/signup", async (req, res) => {
    let {email}=req.body;
 
   try {
    let u =await Product.findOne({email})
 
   
    if(u){
        return res.status(404).send("user already exist")
 
           }
    else{ 
    let user=await Product.create({...req.body})
    res.send([{token:`${user.id}:${user.email}:${user.password}`},{user}])
    }
   } catch (e) {
      res.status(404).send(e.message)
   }
})



module.exports = app;