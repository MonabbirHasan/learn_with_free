const express = require('express')
const {
  GetAllCourse,
  GetSingleCourse,
  DeleteCourse,
  UpdateCourse,
  CreateCourse,
} = require('../controllers/course.controller')
const router = express.Router()
const multer =require("multer")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploaded_file/')
  },
  filename: function (req, file, cb) {
    const newName = Date.now() + '-' + file.originalname
    cb(null, newName)
  }
})
const upload = multer({ storage: storage })

router.get('/', GetAllCourse)
router.post('/',upload.single("video"), CreateCourse)
router.get('/:id', GetSingleCourse)
router.delete('/:id', DeleteCourse)
router.patch('/:id', UpdateCourse)
module.exports = router
