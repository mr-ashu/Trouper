const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
   
    
    about:{
      type:String,
    },
   
    title: {
        type : String,
        required: true
      
    },
  
  
    price:{
        type:String
    },
  
    Image:{
        type:String,
        
    },
    rating:{
      type:Number
    },
    lavel:{
        type:String
    },
  
},
{ versionKey: false })

const  Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;