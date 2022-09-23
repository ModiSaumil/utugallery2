const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:String,
    emailid:String,
    password:String
});

module.exports = mongoose.model("user",userSchema);