const { v4: uuidv4 } = require('uuid')
const Comments = require('../models/comment.model')
const GetAllComment = async (req, res) => {
  try {
    const GetAll = await Comments.find()
    res.status(200).json({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingleComment = async (req, res) => {
  try {
    const GetSingle = await Comments.findOne({ id: req.params.id })
    res.status(200).json({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateComment = async (req, res) => {
  try {
    const NewComment = new Comments({
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
    await NewComment.save()
    res.status(200).json({ NewComment })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteComment = async (req, res) => {
  try {
    await Comments.deleteOne({ id: req.params.id })
    res.status(200).json({ message: 'comment is Deleted' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateComment = async (req, res) => {
  try {
    const Update = await Comments.findOne({ id: req.params.id })
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
  GetAllComment,
  GetSingleComment,
  CreateComment,
  DeleteComment,
  UpdateComment,
}
