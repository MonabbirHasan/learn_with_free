const { v4: uuidv4 } = require('uuid')
const Childrens = require('../models/Children.model')

const GetAllChildren = async (req, res) => {
  try {
    const GetAll = await Childrens.find()
    res.status(200).json({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingleChildren = async (req, res) => {
  try {
    const GetSingle = await Childrens.findOne({ id: req.params.id })
    res.status(200).json({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateChildren = async (req, res) => {
  try {
    const NewChildren = new Childrens({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Sub: req.body.sub,
      Status: req.body.status,
    })
    await NewChildren.save()
    res.status(200).json({ NewChildren })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteChildren = async (req, res) => {
  try {
    await Childrens.deleteOne({ id: req.params.id })
    // await Childrens.deleteMany()
    res.status(200).json({ message: 'Children Is Deleted success' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateChildren = async (req, res) => {
  try {
    const Update = await Childrens.findOne({ id: req.params.id })
    Update.id=uuidv4()
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
  GetAllChildren,
  GetSingleChildren,
  CreateChildren,
  DeleteChildren,
  UpdateChildren,
}
