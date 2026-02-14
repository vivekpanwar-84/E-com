import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { createRequire } from 'module';
import { connect } from 'http2';
const require = createRequire(import.meta.url);
import connectDB from './config/mongodb.js';
import connectcloudinary from './config/cloudnary.js';
import userRouter from './router/userRoute.js';
import productRouter from './router/productRouter.js';
import orderRouter from './router/orderRoute.js';

//add config 
const app = express();
const port = process.env.PORT || 3030;
connectDB();
connectcloudinary();


// middleware
app.use(express.json());
app.use(cors());

// api endpoint
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);


app.listen(port, () => {
    console.log(`server start....${port}`);
});


app.get("/api/obj", (req, res) => {
    const obj = [{
        name: "vivke",
        age: 20,
    }];
    res.send(obj);
});


// app.use("*" , (req,res)=>{
//     res.send("React...");
// });

