const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
   
    profilePic:{
        type:String,
        data:Buffer
 
    },
    about:{
      type:String,
    },
  
    language:{
        type:String
    },
    occupation:{
        type:String
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
        data:Buffer
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