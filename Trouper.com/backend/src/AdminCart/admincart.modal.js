const mongoose=require("mongoose");

const adminCartSchema=new mongoose.Schema({
   product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"product",
    required:true,
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true,

   },
 
   quantity:{
    type:Number,
  
    min:1,
   },
   dispatch:{
    type:String,
    
   }
  
    


});

const Admincart=mongoose.model("admincart",adminCartSchema)

module.exports=Admincart