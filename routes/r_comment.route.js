const express = require('express')
const {
  GetAllRComment,
  GetSingleRComment,
  DeleteRComment,
  UpdateRComment,
  CreateRComment,
} = require('../controllers/r_comment.controller')
const router = express.Router()

router.get('/', GetAllRComment)
router.post('/', CreateRComment)
router.get('/:id', GetSingleRComment)
router.delete('/:id', DeleteRComment)
router.patch('/:id', UpdateRComment)

module.exports = router
