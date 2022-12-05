const mongoose = require('mongoose');
const { stringify } = require('uuid');

const productmulSchema = new mongoose.Schema({
    imgname:String,
    userid:String,
    tag:String,
    photo:Array,
    category:String,
})

module.exports = mongoose.model("photosmul",productmulSchema);