const express = require('express')
const app = express()
const cors = require('cors')
require('./connection')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
const Razorpay = require('razorpay')
const Admin = require('./adminschema')
const PaymentDB = require('./transchema')
//const paymentRoute = require('../../DB/paymentroute');
//app.use("/api",paymentRoute);


// var bodyParser=require("body-parser");
const Userschema = require('./userschema')
const bcrypt = require('bcrypt')
const { getDateInSecs } = require('razorpay/dist/utils/razorpay-utils')
//const { checkout } = require('./paymentcontroller')
 
app.post("/register",async(req,res)=>{
    if(req.body.username)
    {
        const password_hash = await bcrypt.hashSync(req.body.password,10)
    const data = {
        username:req.body.username,
        Fullname:req.body.Fullname,
        email:req.body.email,
        password:password_hash,
        email:req.body.email,
        Gender:req.body.Gender ,
        Age:req.body.Age,
        DOB:req.body.DOB,
        Address:req.body.Address,
        MobileNO:req.body.MobileNO,
        HealthStatus:req.body.HealthStatus,
        MarriageStatus:req.body.MarriAgeStatus
    }
    const user = new Userschema(data)
    const result = await user.save();
    if(result)
    {
        res.json(result._id)
    }
    else
    {
         res.json("error while registering a new user")  
     }
    }
    else
    {
        const customerList = await Userschema.find().select('-password')
        if(customerList)
        {
            res.json(customerList)
        }
        else
        {
            res.json("No Customers Found")
        }
    }
})


app.post('/login',async(req,res)=>{
    // res.send("login page")
    try{
        if(req.body.username && req.body.password)
        {
            pass = req.body.password
            const data = {
                username:req.body.username,
            }
    const result = await Userschema.findOne(data)
    // console.log(r,req.body.password,result)
    if(result)
        {
        const r = await bcrypt.compare(pass,result.password)
        if(r){
        const currDate = new Date().getDate()
        const currMonth = new Date().getMonth()
        const currYear = new Date().getFullYear()
        const today = `${currDate}/${(currMonth+1)%12==0?12:(currMonth+1)%12}/${currYear}`
        
        if(result.gymPlan==='yes' && Date.parse(today)>=Date.parse(result.endDate)){
            const user_plan_cancel = await Userschema.updateOne({_id:result._id},{$set:{gymPlan:"no"}})
        res.json({result:"Your Plan has been expired..!! Please Register and buy a new plan to continue"})
        }
        else if(result.gymPlan==='no' && Date.parse(today)>=Date.parse(result.endDate)){
        res.json({result:"Your Plan has been expired..!! Please Register and buy a new plan to continue"})
        }
        else if(result.gymPlan!=='no'){
            console.log(result);
            const data = {
                result,
                role:"User"
            }
            res.send(data); 
    
        }
        
    }else{res.json({result:"Enter Correct Credentials"})}

    }
    else
    {
        const Admin_Result = await Admin.findOne(data)
        if(Admin_Result)
            {
        const r = await bcrypt.compare(req.body.password,Admin_Result.password)
        console.log(Admin_Result);
        if(r){
        const data = {
            Admin_Result,
            role:"Admin"
        }
        res.send(data);}
        else{

        }
    }
    else
    {
        res.json({result:"No Users Found"})
    }
    }
}
else
{
    res.json({result:"Enter proper values"})
    console.log("no proper credentials")
}
}
catch(e)
{
    console.log("Error",e)
    res.send(e);
}
})

app.post("/updatePayment", async (req, res) => {
    try {
      const userId = req.body.userId;
  
      // Update the payment attribute to true for the specified user
      const result = await Userschema.findByIdAndUpdate({_id:userId},{ payment: "true" });
      if (result) {
        res.json({ success: true, message: "Payment attribute updated successfully" });
      } else {
        res.json({ success: false, message: "User not found or error updating payment attribute" });
      }
    } catch (error) {
      console.error("Error updating payment attribute:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
  

app.post ("/checkout",async(req,res)=> {
    console.log(req.body.amount," and userID is ",req.body._id)
    console.log(req.body._id)
    const instance = new Razorpay({
        key_id:'rzp_test_UbPmU5malWnsEz',
        key_secret: '3ItfTHcFpZa7rShu1t1ImoLe',
    })
    console.log(req.body.amount*100)
    const options = {
        amount:Number(req.body.amount*100 ),
        currency:"INR",
        
    };
    // let order = null;
    console.log(options)
   try{
    const order = await instance.orders.create(options);
   console.log(order)
   const result = await Userschema.updateOne({_id:req.body._id},{$set:{gymPlan:"yes",order_id:order.id}})
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
}
)
app.post("/paymentverification/:obj/:time",async(req,res)=>{
        console.log("Payment success")

        const obj =  JSON.parse(req.params.obj)
        const time =  parseInt(JSON.parse(req.params.time))

        const userId = obj.userId

        const currDate = new Date().getDate()
        const currMonth = new Date().getMonth()
        const currYear = new Date().getFullYear()
        const startDate =`${currDate}/${currMonth+1}/${currYear}`
        const endDate = `${currDate}/${(currMonth+1+time)%12==0?12:(currMonth+1+time)%12}/${currYear+Math.round((time)/12)}`
        // console.log("User id is ",obj)
        // console.log("Startdate ",startDate)
        // console.log("Enddate ",endDate)

        // res.json({userId,time,startDate,endDate})
     
        try
        {
        if(userId) 
        {
            const pay = new PaymentDB(req.body)
            console.log("Hello")
            const result = await pay.save();
            const r = await Userschema.findByIdAndUpdate({_id:userId},{ payment: "true" ,startDate:startDate,time:time,endDate:endDate});

            res.redirect("http://localhost:3000/") 
        }
        else
        res.json('not ok')
        }
        catch(e){
            console.log("Error has been occured..!!")
        res.json(e)}
        
    })


app.get('/getTransactionList',async(req,res)=>{
    const result = await PaymentDB.find()
    if(result)
    {
        res.json(result)
    }
    else
    {
        res.json('No Transactions Found')
    }
})

app.post('/getUser',async(req,res)=>{
    const _id = req.body.userId
    console.log(_id)
    const user = await Userschema.findById(_id).select('-password')
    if(user)
    {
        res.json(user)
    }
    else
    res.json("no users found")
})

app.post('/updatePlan',async(req,res)=>{
    try{
        const result = await Userschema.updateOne({_id:req.body._id},{$set:{gymPlan:"yes",order_id:"jnbosrgnb"}})
        if(result)
    {
        res.json(result) 
    }
    else
    { 
        res.json("Error while updating gym plan")
    }
    }
    catch(e)
    {
        console.log("Error is",e)
        res.json("Error is",e)
    }
})

app.get("/hello",(req,res)=>{
    // res.json(`${new Date().getDate()}/${(new Date().getMonth()+1+3)%12}/${new Date().getFullYear()}`)
    res.json(`${new Date().getDate()}/${(new Date().getMonth()+1)%12}/${new Date().getFullYear()}`)

})
app.listen(8000,async()=>{
    console.log("server has been created..!!");
})
