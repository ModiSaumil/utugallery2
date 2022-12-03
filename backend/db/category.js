const mongoose = require('mongoose');
const { stringify } = require('uuid');

const CategorySchema = new mongoose.Schema({
    category:String,
   
})

module.exports = mongoose.model("category",CategorySchema);