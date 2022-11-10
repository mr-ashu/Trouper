require("dotenv").config();

const express = require("express");
const cors = require("cors");
 
const userRouter = require("./user/user.route");
const productRouter =require("./product/product.route")

const connect = require("./config/db")
const PORT = process.env.PORT

const app = express();
app.use(express.json());
app.use(cors());
 
app.use("/users", userRouter);
app.use("/products", productRouter);


app.listen(PORT, async () => {
    await connect();
    console.log(`listning to http://localhost:${PORT}`)
})