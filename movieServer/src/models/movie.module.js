const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
    
    
    imageUrl:{
        type:String
    },
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
    numRatings:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Movie = mongoose.model("movies", movieSchema)
module.exports = Movie