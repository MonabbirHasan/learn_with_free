const express = require('express')
const {
  GetCategory,
  GetSingleCategory,
  UpdateCategory,
  DeleteCategory,
  CreateCategory,
} = require('../controllers/category.controller')
const router = express.Router()

router.get('/', GetCategory)
router.post('/', CreateCategory)
router.get('/:id', GetSingleCategory)
router.patch('/:id', UpdateCategory)
router.delete('/:id', DeleteCategory)
// router.delete('/', DeleteCategory)

module.exports = router
