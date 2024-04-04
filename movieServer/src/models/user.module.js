const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },
    address:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"addresses"
        }
    ],
    
    rating:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }
    ],
    review:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const User = mongoose.model("users", UserSchema);  // name of this model should be start with uppercase
module.exports = User;