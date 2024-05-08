const mongoose =require ('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    Fullname:{
        type:String,
        require:true
    },
    gymPlan:{
        type:String,
        default:'no'
    },
    order_id:{
        type:String,
        default:null
    },
    email:{
        type:String,
        require:true
    },
    
    MobileNO:{
        type:String,
        require:true
    },
    Age:{
        type:String,
        require:true
    },
    DOB:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    HealthStatus:{
        type:String,
        require:true
    },
    MarriageStatus:{
        type:String,
        require:true
    },
    payment:{
        type:String,
        default:"false"
    },
    startDate:{
        type:String,
    },
    endDate:{
        type:String
    },
    time:{
        type:String
    }

})

const User = mongoose.model('USER',userSchema);  

module.exports = User;