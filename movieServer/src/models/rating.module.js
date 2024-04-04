const mongoose = require("mongoose")

const ratingSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"movies",
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Rating = mongoose.model("ratings", ratingSchema)
module.exports = Rating