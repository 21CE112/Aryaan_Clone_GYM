// import express from "express";
const express = require('express')
// import { checkout } from "paymentcontroller.js";
const contorllers = require('./paymentcontroller')

const router = express.Router();

router.route("/checkout").post(contorllers.checkout);
// router.route('/').get((req,res)=>{
//     res.json("hello")
// })
router.route("/paymentverification").post(contorllers.paymentverification);

module.exports =  router; 