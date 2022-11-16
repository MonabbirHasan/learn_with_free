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
const subCategorySchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  Sub: {
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

module.exports = mongoose.model('sub', subCategorySchema)
