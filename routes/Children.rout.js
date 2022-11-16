const express = require('express')
const {
  GetAllChildren,
  GetSingleChildren,
  DeleteChildren,
  UpdateChildren,
  CreateChildren,
} = require('../controllers/Children.controller')
const router = express.Router()

router.get('/', GetAllChildren)
router.post('/', CreateChildren)
router.get('/:id', GetSingleChildren)
router.delete('/:id', DeleteChildren)
// router.delete('/', DeleteChildren)
router.patch('/:id', UpdateChildren)

module.exports = router
