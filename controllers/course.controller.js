const { v4: uuidv4 } = require('uuid')
const Courses = require('../models/course.model')

const GetAllCourse = async (req, res) => {
  try {
    const GetAll = await Courses.find()
    res.status(200).json({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingleCourse = async (req, res) => {
  try {
    const GetSingle = await Courses.findOne({ id: req.params.id })
    res.status(200).json({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateCourse = async (req, res) => {
  try {
    const NewCourse = new Courses({
      id: uuidv4(),
      Name: req.body.name,
      Title: req.body.title,
      SubTitle: req.body.subtitle,
      Rating: req.body.rating,
      Tstudent: req.body.tstudent,
      Trating: req.body.trating,
      Author: req.body.author,
      UploadDate: req.body.uploaddate,
      Duration: req.body.duration,
      CourseTopic: req.body.coursetopic,
      Hourse: req.body.hourse,
      AccTime: req.body.acctime,
      Certification: req.body.certification,
      Thumbnail: req.body.thumbnail,
      Video: req.file.filename,
      Price: req.body.price,
      Descount: req.body.descount,
      DescountEndTime: req.body.descountEndTime,
      Guarantee: req.body.guarantee,
      Payment: req.body.payment,
      Category:req.body.category,
      Status: req.body.status,
    })
    await NewCourse.save()
    res.status(200).json({ NewCourse })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteCourse = async (req, res) => {
  try {
    await Courses.deleteOne({ id: req.params.id })
    res.status(200).json({ message: 'Course Is Deleted' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateCourse = async (req, res) => {
  try {
    const Update = await Courses.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Title = req.body.title
    Update.SubTitle = req.body.subtitle
    Update.Rating = req.body.rating
    Update.Tstudent = req.body.tstudent
    Update.Trating = req.body.trating
    Update.Author = req.body.author
    Update.UploadDate = req.body.uploaddate
    Update.Duration = req.body.duration
    Update.CourseTopic = req.body.coursetopic
    Update.Hourse = req.body.hourse
    Update.AccTime = req.body.acctime
    Update.Certification = req.body.certification
    Update.Thumbnail = req.body.thumbnail
    Update.Video = req.file.filename
    Update.Price = req.body.price
    Update.Descount = req.body.descount
    Update.DescountEndTime = req.body.descountEndTime
    Update.Guarantee = req.body.guarantee
    Update.Payment = req.body.payment
    Update.Category=req.body.category;
    Update.Status = req.body.status
    Update.save()
    res.status(200).json({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  GetAllCourse,
  GetSingleCourse,
  CreateCourse,
  DeleteCourse,
  UpdateCourse,
}
