const express = require("express");
const { isValidObjectId } = require("mongoose");
const ProductModel = require("../Schema/ProductSchema");
 
const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
    // const {title ,description , imageFileSet ,  publishedAt }  = req.body
    //  console.log(title ,description , imageFileSet ,  publishedAt);
    const { body } = req;
      console.log(body)
    // const { error, value } = validatePost({ body });
    // // console.log(" error------" , error);
    // if (error) {
    //   res.status(400).send({ error, message: "invalid form data" });
    // }
    //  so now to post our data to the server we have to make the new data object and the we have post it
    console.log({ ...body });
    const newPost = new ProductModel({ ...body })
    console.log(newPost,"-----------") 
    if (newPost.title === "" || newPost.imageFileSet === "" || newPost.description === "" ) {
      return res.status(400).send("empty post object ! Please fill all the data");
    }else{
      const post = await newPost.save();
     res.status(200).send("Data added successfully")
    } 
     
  });
  
  
  //delete req
  
  app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).send("invalid object id");
    }
    try {
      let data = await ProductModel.findByIdAndDelete(id);
      //  await data.remove() // we are also use this approch
      return res.status(200).send("post deleted success");
    } catch (error) {
      console.log(error);
    }
  });
  