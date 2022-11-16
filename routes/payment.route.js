const express = require('express')
const {
  GetAllPayment,
  GetSinglePayment,
  DeletePayment,
  UpdatePayment,
  CreatePayment,
} = require('../controllers/payment.controller')
const router = express.Router()

router.get('/', GetAllPayment)
router.post('/', CreatePayment)
router.get('/:id', GetSinglePayment)
router.delete('/:id', DeletePayment)
router.patch('/:id', UpdatePayment)

module.exports = router
