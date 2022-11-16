const express = require('express')
const {
  GetAllComment,
  GetSingleComment,
  DeleteComment,
  UpdateComment,
  CreateComment,
} = require('../controllers/comment.controller')
const router = express.Router()

router.get('/', GetAllComment)
router.post('/', CreateComment)
router.get('/:id', GetSingleComment)
router.delete('/:id', DeleteComment)
router.patch('/:id', UpdateComment)

module.exports = router
