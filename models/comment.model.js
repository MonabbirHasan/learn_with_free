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
const CommentSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Name: {
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
  Address: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  Comment: {
    type: String,
    require: true,
  },
  CreateAt: {
    type: String,
    default: fullDate,
  },
  Status: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('comment', CommentSchema)
