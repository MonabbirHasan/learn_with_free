const express = require('express')
const {
  GetAllUser,
  GetSingleUser,
  DeleteUser,
  UpdateUser,
  CreateUser,
} = require('../controllers/user.controller')
const router = express.Router()

router.get('/', GetAllUser)
router.post('/', CreateUser)
router.get('/:id', GetSingleUser)
router.delete('/:id', DeleteUser)
router.patch('/:id', UpdateUser)

module.exports = router
