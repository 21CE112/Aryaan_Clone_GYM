const express = require('express')
const app = express()

// import express from "express";
//const express = require('express');
// import { config } from "dotenv"; 
// import paymentRoute from "/paymentroute.js";
const paymentRoute = require('../../DB/paymentroute');
// import cors from "cors"
const cors = require('cors')
// config({ path: "./config/config.env"});

//const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",paymentRoute);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})