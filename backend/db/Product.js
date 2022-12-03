const mongoose = require('mongoose');
const { stringify } = require('uuid');

const productSchema = new mongoose.Schema({
    imgname:String,
    userid:String,
    tag:String,
    category:String,
    photo:String,
    status:String,
})

module.exports = mongoose.model("photos",productSchema);