const { v4: uuidv4 } = require('uuid')
const Sellers = require('../models/seller.model')

const GetAllSeller = async (req, res) => {
  try {
    const GetAll = await Sellers.find()
    res.status(200).json({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingleSeller = async (req, res) => {
  try {
    const GetSingle = await Sellers.findOne({ id: req.params.id })
    res.status(200).json({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateSeller = async (req, res) => {
  try {
    const NewSeller = new Sellers({
      id: uuidv4(),
      Name: req.body.name,
      T_course: req.body.t_course,
      T_student: req.body.t_student,
      T_sellse: req.body.t_sellse,
      Email: req.body.email,
      Phone: req.body.phone,
      Image: req.body.image,
      Address: req.body.address,
      Pay_method: req.body.pay_method,
      Status: req.body.status,
    })
    await NewSeller.save()
    res.status(200).json({ NewSeller })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteSeller = async (req, res) => {
  try {
    await Sellers.deleteOne({ id: req.params.id })
    res.status(200).json({ message: 'Seller Is Deleted success' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateSeller =async (req, res) => {
  try {
    const Update=await Sellers({id:req.params.id});
    Update.id=uuidv4()
    Update.Name=req.body.name;
    Update.T_course=req.body.t_course;
    Update.T_student=req.body.t_student;
    Update.T_sellse=req.body.t_sellse;
    Update.Email=req.body.email;
    Update.Phone=req.body.phone;
    Update.Image=req.body.image;
    Update.Address=req.body.address;
    Update.Pay_method=req.body.pay_method;
    Update.Status=req.body.status;
    Update.save();
    res.status(200).json({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  GetAllSeller,
  GetSingleSeller,
  CreateSeller,
  DeleteSeller,
  UpdateSeller,
}
