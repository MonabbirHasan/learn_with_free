const mongoose = require('mongoose')
const dateTime=new Date();
const fullDate=dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds()+"/"+dateTime.getDate()+"-"+dateTime.getMonth()+"-"+dateTime.getFullYear();

const SellerSchema = mongoose.Schema({
  id:{
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  T_course: {
    type: String,
    require: true,
  },
  T_student: {
    type: String,
    require: true,
  },
  T_sellse: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  Phone: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
  Pay_method: {
    type: String,
    require: true,
  },
  CreateAt:{
    type:String,
    default:fullDate
  },
  Status: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('seller', SellerSchema)
