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
 
   app.post("/users/:id",async(req,res)=>{
    let {id}=req.params;
    let ap=await Product.findOne({_id:id})
    if(!ap){
        return res.status(404).send("not found")
     }
    try {

        let u = await  Product.create({...req.body})
    
         res.send(u)
       
    } catch (e) {
        res.status(500).send(e.message)
    }
     
     
   })
 
   
 
 



module.exports = app;