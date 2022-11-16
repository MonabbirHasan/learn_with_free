const express = require('express')
const {
  GetAllSeller,
  GetSingleSeller,
  DeleteSeller,
  CreateSeller,
  UpdateSeller,
} = require('../controllers/seller.controller')
const router = express.Router()

router.get('/', GetAllSeller)
router.post('/', CreateSeller)
router.get('/:id', GetSingleSeller)
router.delete('/:id', DeleteSeller)
router.patch('/:id', UpdateSeller)

module.exports = router
