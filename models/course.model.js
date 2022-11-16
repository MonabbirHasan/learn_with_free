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
const courseSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  Title: {
    type: String,
    require: true,
  },
  SubTitle: {
    type: String,
    require: true,
  },
  Rating: {
    type: String,
    require: true,
  },
  Tstudent: {
    type: String,
    require: true,
  },
  Trating: {
    type: String,
    require: true,
  },
  Author: {
    type: String,
    require: true,
  },
  UploadDate: {
    type: String,
    require: true,
  },
  Duration: {
    type: String,
    require: true,
  },
  CourseTopic: {
    type: String,
    require: true,
  },
  Hourse: {
    type: String,
    require: true,
  },
  AccTime: {
    type: String,
    require: true,
  },
  Certification: {
    type: String,
    require: true,
  },
  Thumbnail: {
    type: String,
    require: true,
  },
  Video: {
    type: String,
    require: true,
  },
  Price: {
    type: String,
    require: true,
  },
  Descount: {
    type: String,
    require: true,
  },
  DescountEndTime: {
    type: String,
    require: true,
  },
  Guarantee: {
    type: String,
    require: true,
  },
  Payment: {
    type: String,
    require: true,
  },
  Category: {
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
module.exports = mongoose.model('course', courseSchema)
