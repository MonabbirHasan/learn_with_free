const { v4: uuidv4 } = require('uuid')
const payments = require('../models/payment.model')

const GetAllPayment = async (req, res) => {
  try {
    const GetAll = await payments.find()
    res.status(200).json({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSinglePayment = async (req, res) => {
  try {
    const GetSingle = await payments.findOne({ id: req.params.id })
    res.status(200).json({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreatePayment = async (req, res) => {
  try {
    const NewPayment = new payments({
      id: uuidv4(),
      Author: req.body.author,
      Method: req.body.method,
      Category: req.body.category,
      Course: req.body.course,
      Image:req.body.image,
      Status: req.body.status,
    })
    await NewPayment.save()
    res.status(200).json({ NewPayment })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeletePayment = async (req, res) => {
  try {
    await payments.deleteOne({ id: req.params.id })
    res.status(200).json({ message: 'payment is deleted success' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdatePayment = async (req, res) => {
  try {
    const Update = await payments.findOne({ id: req.params.id })
    Update.id=uuidv4()
    Update.Author = req.body.author
    Update.Method = req.body.method
    Update.Category = req.body.category
    Update.Course = req.body.course
    Update.Image=req.body.image
    Update.Status = req.body.status
    Update.save()
    res.status(200).json({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  GetAllPayment,
  GetSinglePayment,
  CreatePayment,
  DeletePayment,
  UpdatePayment,
}
