const mongoose = require('mongoose')
const dateTime = new Date()
const fullDate =
  dateTime.getHours() +
  ':' +
  dateTime.getMinutes() +
  ':' +
  dateTime.getSeconds() +
  '/' +
  dateTime.getDate() +
  '-' +
  dateTime.getMonth() +
  '-' +
  dateTime.getFullYear()
const paymentSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Author: {
    type: String,
    require: true,
  },
  Method: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Course: {
    type: String,
    require: true,
  },
  CreateAt: {
    type: String,
    default: fullDate,
  },
  Image: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('payment', paymentSchema)
