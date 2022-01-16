
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projSchema = new Schema({
Underscoreid:String , 

title:String , 

image:String , 

abstract:String 


})

module.exports = {
  Proj : mongoose.model('Proj', projSchema),
}

