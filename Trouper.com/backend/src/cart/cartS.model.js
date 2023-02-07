const {Schema , model} = require("mongoose")

const ProductSchema = new Schema({
    title: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      imageFileSet: {
        type: String,
        require: true,
      }
 
})

 const ProductModel = model("crt" , ProductSchema )

 module.exports = ProductModel