const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    flightName:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    day:{
        type:Array,
        required:true,
        default:[]
    },
    availableSeats:{
        type:Number,
        default:60
    }
})

module.exports =  mongoose.model("Flight", flightSchema);