const { v4: uuidv4 } = require('uuid')
const rcomments = require('../models/rcomment.model')
const GetAllRComment = async (req, res) => {
  try {
    const GetAll = await rcomments.find()
    res.status(200).json({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingleRComment = async (req, res) => {
  try {
    const GetSingle = await rcomments.findOne({ id: req.params.id })
    res.status(200).json({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateRComment = async (req, res) => {
  try {
    const NewrComment = new rcomments({
      id: uuidv4(),
      Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone,
      Address: req.body.address,
      Category: req.body.category,
      Image: req.body.image,
      Comment: req.body.comment,
      Status: req.body.status,
    })
    await NewrComment.save()
    res.status(200).json({ NewrComment })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteRComment = async (req, res) => {
  try {
    await rcomments.deleteOne({ id: req.params.id })
    res.status(200).json({ message: ' delete r comment success' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateRComment = async (req, res) => {
  try {
    const Update = await rcomments.findOne({ id: req.params.id })
    Update.Name = req.body.name
    Update.Email = req.body.email
    Update.Phone = req.body.phone
    Update.Address = req.body.address
    Update.Category = req.body.category
    Update.Image = req.body.image
    Update.Comment = req.body.comment
    Update.Status = req.body.status
    Update.save()
    res.status(200).json({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  GetAllRComment,
  GetSingleRComment,
  CreateRComment,
  DeleteRComment,
  UpdateRComment,
}
