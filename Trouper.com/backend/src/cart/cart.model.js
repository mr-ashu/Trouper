const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
   
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    
       },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true,
    
       },
    quantity:{
        type:Number,
      
        min:1,
       },
  
},
{ versionKey: false })

const  Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;