const mongoose =require ('mongoose');
const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    // cpassword:{
    //     type:String,
    //     require:true
    // },
    // Fullname:{
    //     type:String,
    //     require:true
    // },
    // email:{
    //     type:String,
    //     require:true
    // },
    
    // MobileNO:{
    //     type:String,
    //     require:true
    // },
    // Age:{
    //     type:String,
    //     require:true
    // },
    // DOB:{
    //     type:String,
    //     require:true
    // },
    // Gender:{
    //     type:String,
    //     require:true
    // },
    // Address:{
    //     type:String,
    //     require:true
    // },
    // HealthStatus:{
    //     type:String,
    //     require:true
    // },
    // MarriageStatus:{
    //     type:String,
    //     require:true
    // }
})

const Admin = mongoose.model('admin',adminSchema);  

module.exports = Admin;