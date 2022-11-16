const express = require('express')
const {
  GetAllSubCategory,
  GetSingleSubCategory,
  DeleteSubCategory,
  UpdateSubCategory,
  CreateSubCategory,
} = require('../controllers/subCategory.controller')
const router = express.Router()

router.get('/', GetAllSubCategory)
router.post('/', CreateSubCategory)
router.get('/:id', GetSingleSubCategory)
router.delete('/:id', DeleteSubCategory)
router.patch('/:id', UpdateSubCategory)

module.exports = router
