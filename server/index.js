const express = require('express')

const app = express()
const port = process.env.PORT || 1337

app.get('/', (req, res) => {
  res.send('Fetch Backend Assessment API')
})

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})