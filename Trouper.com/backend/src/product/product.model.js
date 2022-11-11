const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true
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
        type : String,
        required: true
      
    },
    category: {
        type : String,
        required: true
      
    },
    subCategory: {
        type : String,
       
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
   
   
   
   

},
{ versionKey: false })

const Product = mongoose.model("product", productSchema);

module.exports = Product;