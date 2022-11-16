const express = require('express')
const app = express()
const cors = require('cors')
require('./config/db')
const userRouter = require('./routes/user.route')
const sellerRouter = require('./routes/seller.route')
const categoryRouter = require('./routes/category.route')
const subCategoryRouter = require('./routes/subCategory.route')
const childrenRouter = require('./routes/Children.rout')
const commentRouter = require('./routes/comment.route')
const r_comment = require('./routes/r_comment.route')
const courseRouter = require('./routes/course.route')
const paymentRouter = require('./routes/payment.route')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/category', categoryRouter)
app.use('/api/sub', subCategoryRouter)
app.use('/api/children', childrenRouter)
app.use('/api/comment', commentRouter)
app.use('/api/rcomment', r_comment)
app.use('/api/course', courseRouter)
app.use('/api/payment', paymentRouter)

// const filename=require("./uploaded_file")

app.get('/file', (req, res) => {
  res.sendFile(__dirname + '/./views/index.html')
})
app.use((req, res, next) => {
  res.status(404).json({ message: 'this rout is not found' })
})
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'something is wrong' })
})
module.exports = app
