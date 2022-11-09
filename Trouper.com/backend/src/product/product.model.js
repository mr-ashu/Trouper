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
    language:{
        type:String
    },
    occuption:{
        type:String
    },
    pSkill:{
        type:String
    },
    education:{
        type:String
    },
    email:{
        type:String,
        uniqe:true,
        required:true
    },
    phone:{
        type:Number,
        uniqe:true,
        min:10
       
    }
    ,
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
        required: true
    },
    skill:{
        type:String,
        required:true
    },
    basePrice:{
        type:Number,
        required:true
    },
    standerdPrice:{
        type:Number
    },
    premiumPrice:{
        type:Number
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
    Lavel:{
        type:Number
    },
    country:{
        type:String
    },
    sort:{
        type:String
    }
   
   

},
{ versionKey: false })

const Product = mongoose.model("product", productSchema);

module.exports = Product;