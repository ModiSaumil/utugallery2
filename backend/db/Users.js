const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    enrollmentno: {
        type: Number,
        maxLength: 15,
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
        maxLength: [60, 'Only 60 characters are allowed1'],
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            'Invalid Email Address'
        ],
        unique: true,
        required: false
    },
    contactno: {
        type: Number,
        minLength: 10,
        maxLength: 10,
        required: false,
        unique: true,
        match: [/^[789]\d{9}$/, 'Please Fill a valid Contact Number']
    },
    password: {
        type: String,
        // match: [
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        //     'Password must contain 1 number,1 uppercase and lowercase letter and 1 special character'
        // ],
        required: false
    },
    role: {
        type: String,
        required: false
    },

    STATUS:{
        type:Number,
        required: false

    }
});

module.exports = mongoose.model("user",userSchema);