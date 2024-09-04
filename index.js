import express from "express";
import env from "dotenv";
import mongoose, { mongo } from "mongoose";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js"

env.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res)=>{
    res.send("Welcome to node-API with Mongo-DB")
});

//routes
app.use("/api/products", productRoute);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to MongoDb!");
    app.listen(port, ()=>{
        console.log(`Server is running from port: ${port}`)
    });
})
.catch(()=>{
    console.log("MongoDb connection failed!")
})
