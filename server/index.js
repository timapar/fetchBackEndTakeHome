const express = require('express')
const { addPointsRouter } = require('./routes/addPoints')

const app = express()
const port = process.env.PORT || 1337

app.use('/', express.json())

app.get('/', (req, res) => {
  res.send('Fetch Backend Assessment API')
})
app.use('/points/add', addPointsRouter)

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})