const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    score:{
       type: Number,
       default:0
    }
})

const UserModel=mongoose.model("user",userSchema)
module.exports={UserModel}