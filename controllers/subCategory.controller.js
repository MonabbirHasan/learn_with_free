const { v4: uuidv4 } = require('uuid')
const subCategory = require('../models/subCategory.model')

const GetAllSubCategory = async (req, res) => {
  try {
    const GetAll = await subCategory.find()
    res.status(200).json({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingleSubCategory = async (req, res) => {
  try {
    const GetSingle = await subCategory.findOne({ id: req.params.id })
    res.status(200).json({ GetSingle })
  } catch (error) {
    res.statu(500).send(error.message)
  }
}
const CreateSubCategory = async (req, res) => {
  try {
    const NewSub = new subCategory({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Sub: req.body.sub,
      Status: req.body.status,
    })
    await NewSub.save()
    res.status(200).json({ NewSub })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteSubCategory = async (req, res) => {
  try {
    await subCategory.deleteOne({ id: req.params.id })
    res.status(200).json({ message: 'sub category is Deleted success' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateSubCategory = async (req, res) => {
  try {
    const Update = await subCategory.findOne({ id: req.params.id })
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
  GetAllSubCategory,
  GetSingleSubCategory,
  CreateSubCategory,
  DeleteSubCategory,
  UpdateSubCategory,
}
