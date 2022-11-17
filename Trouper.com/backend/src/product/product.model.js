const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
       type:String,
       
    },
    profilePic:{
        type:String,
        data:Buffer
    },
    about:{
      type:String,
    },
    searchTag:{
        type:String
    },
    language:{
        type:String
    },
    occupation:{
        type:String
    },
   title: {
        type : String
      
    },
    category: {
        type : String
     
    },
    price:{
        type:String
    },
    description:{
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
   email:{
    type:String,
    required:true
   },
   password:{
    type:String
   },
   address:{
       type:String
   },
   contact:{
    type:Number
   },
   isComplete:{
      type:Boolean
   }
 
},
{ versionKey: false })

const Product = mongoose.model("product", productSchema);

module.exports = Product;