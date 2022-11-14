const express = require("express");
const Cart = require("./cart.model");


const app = express.Router();
 

app.get("/", async (req, res) => {
    try {
        let u = await Cart.find()
        res.send(u)
    } catch (er) {
        res.status(404).send(er.message)
    }
})
 
 
app.post("/", async (req, res) => {
 
   try {
    
    let pdt=await Cart.create({
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
        let u = await Cart.findByIdAndDelete({_id:id})
        res.send(u)
    } catch (e) {
        res.status(404).send(e.message)
    }
});
 
app.get("/:id",async(req,res)=>{
    let {id}=req.params;
    let user=await  Cart.findOne({_id:id})
     res.send(user)
     
     
   })
 


module.exports = app;