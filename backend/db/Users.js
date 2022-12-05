const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    enrollmentno: {
        type: Number,
        
        required: false
    },
    fname: {
        type: String,
        maxLength: 35,
        required: false
    },
    lname: {
        type: String,
        maxLength: 35,
        required: false
    },
    emailid: {
        type: String,
    
        required: false
    },
    contactno: {
        type: Number,
        required: false,
       
    },
    password: {
        type: String,
       
        required: false
    },
    role: {
        type: String,
        required: false
    },

    status:{
       type: Number,
       required: false,
       default: 0
    }
});

module.exports = mongoose.model("user",userSchema);