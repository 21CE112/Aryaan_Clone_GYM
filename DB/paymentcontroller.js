// import{instance} from "server.js"
// const instance = require('./server')
const Razorpay = require('razorpay')

const instance = new Razorpay({
    key_id:'rzp_test_UbPmU5malWnsEz',
    key_secret: '3ItfTHcFpZa7rShu1t1ImoLe',
})

  const checkout =async(req,res) =>{
    console.log(req.body.amount)
    const options = {
        amount:Number(req.body.amount ),
        currency:"INR",
        
    };
    // let order = null;
    console.log(options)
   try{
    const order = await instance.orders.create(options);
   console.log(order)
   res.status(200).json({
    success:true,
    order,

});}
   catch(error)
   {
    console.log("Error is : \n",error)
    res.status(400).json({
        success:false,
    });
   }

     
    // order=await order.json();
    // console.log(order);
    // res.status(200).send({
    //     success:true,
    //     order,
    
    // });
        // res.json(req.body.amount)

};

const paymentverification =async(req,res) =>{
  console.log(req.body);
    res.status(200).json({
        success:true,
        
    });
};
let contorllers = {
    checkout,
    paymentverification
}
module.exports=contorllers;