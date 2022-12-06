const express =require("express");
 
const Product = require("../product/product.model");
const User = require("../user/user.model");
const Admincart = require("./admincart.modal");
 
 
 
 
const app=express.Router()

const authmiddleware=async (req,res,next)=>{
    let token=req.headers.token;
    if(!token){
        return res.send("token not found")
    }
    const [email,password]=token.split("_#_");
    try {
        let user= await User.findOne({email});
        if(user){
            if(password===user.password){
                req.userId=user.id;
                next()
            }
            else{
                res.status(404).send(`Auth Failed,incorrect password`)
            }
        }
        else{
            res.send(404).send(`user with email:${email} not found`)
        }
    } catch (error) {
        res.status(404).send(e.message)
        
    }
}

app.use(authmiddleware)
app.get("/",async(req,res)=>{
 
    try {
       
        let carts=await Admincart.find({user:req.userId}).populate([
            "user",
            "product",
            
        ]);
        res.send(carts)
    } 
    catch (error) {
        res.status(400).send(e.message)
    }
})

app.post("/",async(req,res)=>{
     
    try {

     let product=await Product.findById(req.body.product);
    //  if(product.quantity>req.body.quantity){
        let cart=await Admincart.create({
            ...req.body,
            user:req.userId,
        });
        res.send(cart)

        // await Product.findByIdAndUpdate(product.id,{
        //     quantity:product.quantity-cart.quantity,
        // })
    //  }
    //  else{
    //     res.send("fronted only:product.quantity ammount left")
    //  }
        
    } 
    catch (error) {
        res.status(400).send(e.message)
    }
})



app.delete("/:id", async (req, res) => {
    let {id}=req.params;
    try {
        let u = await Admincart.findByIdAndDelete({_id:id})
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

        let u = await  Admincart.replaceOne({_id:id}, req.body)
    
         res.send(u)
       
    } catch (e) {
        res.status(500).send(e.message)
    }
});
app.get("/:id",async(req,res)=>{
    let {id}=req.params;
    let user=await Admincart.findOne({_id:id})
     res.send(user)
     
     
   })
 
module.exports=app