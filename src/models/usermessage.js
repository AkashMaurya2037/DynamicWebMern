const mongoose = require("mongoose")

const validator = require("validator")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Entered email id is invalid")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    },
    date:{
        type:Date,
        default: Date.now
    }
})

// Creating Collection
const User= mongoose.model("User",userSchema)

module.exports = User