const app = require('../course-api/app')
const config = require('../course-api/config/config')

const PORT = config.app.port
app.listen(PORT, (req, res) => {
  console.log(`server run success localhost:4000`)
})
