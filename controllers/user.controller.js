const Users = require('../models/user.model')
const { v4: uuidv4 } = require('uuid')

const GetAllUser = async (req, res) => {
  try {
    const GetAll = await Users.find()
    res.status(200).json({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingleUser = async (req, res) => {
  try {
    const GetSingle = await Users.find({ id: req.params.id })
    res.status(200).json({ GetSingle })
  } catch (error) {
    req.status(500).send(error.message)
  }
}
const CreateUser = async (req, res) => {
  try {
    const NewUser = new Users({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Address: req.body.address,
      Email: req.body.email,
      Phone: req.body.phone,
      Status: req.body.status,
    })
    await NewUser.save()
    res.status(200).json({ NewUser })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteUser = async (req, res) => {
  try {
    await Users.deleteOne({ id: req.params.id })
    res.status(200).json({ message: 'User Is Deleted' })
  } catch (error) {
    req.status(500).send(error.message)
  }
}
const UpdateUser = async (req, res) => {
  try {
    const Update = await Users.findOne({ id: req.params.id })
    Update.id=uuidv4()
    Update.Name = req.body.name
    Update.Image = req.body.image
    Update.Address = req.body.address
    Update.Email = req.body.email
    Update.Phone = req.body.phone
    Update.Status = req.body.status
    Update.save()
    res.status(200).json({ Update })
  } catch (error) {
    req.status(500).send(error.message)
  }
}

module.exports = {
  GetAllUser,
  GetSingleUser,
  CreateUser,
  DeleteUser,
  UpdateUser,
}
