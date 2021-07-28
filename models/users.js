const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    username :{
        type:String,
        required: true,
        unique:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    profileimage:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now

    }
});

const User = mongoose.model("User",userSchema);
module.exports = User;