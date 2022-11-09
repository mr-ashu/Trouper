const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
      type:String
    },
    email: {
        type : String,
        required: true,
        unique: true,
    },
    userId: {
        type : String,
         required:true,
        unique: true
    },
    password: {
        type : String,
        required: true
    },
  
   

},
{ versionKey: false })

const User = mongoose.model("user", userSchema);

module.exports = User;