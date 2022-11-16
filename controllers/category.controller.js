const { v4: uuidv4 } = require('uuid')
const Categorys = require('../models/category.model')

const GetCategory = async (req, res) => {
  try {
    const GetAll = await Categorys.find()
    res.status(200).json({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingleCategory = async (req, res) => {
  try {
    const GetSingle = await Categorys.findOne({ id: req.params.id })
    res.status(200).json({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateCategory = async (req, res) => {
  try {
    const NewCategory = new Categorys({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Sub: req.body.sub,
      Status: req.body.status,
    })
    await NewCategory.save()
    res.status(200).json({ NewCategory })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteCategory = async (req, res) => {
  try {
    await Categorys.deleteOne({ id: req.params.id })
    // await Categorys.deleteMany()
    res.status(200).json({ message: 'Category Delete Success' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateCategory = async (req, res) => {
  try {
    const Update = await Categorys.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Image = req.body.image
    Update.Sub = req.body.sub
    Update.Status = req.body.status
    Update.save()
    res.status(200).json({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  GetCategory,
  GetSingleCategory,
  DeleteCategory,
  UpdateCategory,
  CreateCategory,
}
