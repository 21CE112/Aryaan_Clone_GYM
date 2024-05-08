const mongoose = require('mongoose');

const connect =async ()=>{ await mongoose.connect("mongodb://127.0.0.1:27017/GYM")}
if(connect()){
    console.log("connected to database GYM ");
}
else 
{ 
    console.log("There was an error while connecting to the database.");
}