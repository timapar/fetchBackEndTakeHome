const express = require('express')
const { addPointsRouter } = require('./routes/addPoints')
const { pointsBalanceRouter } = require('./routes/pointsBalance')
const { spendPointsRouter } = require('./routes/spendPoints')

const app = express()
const port = process.env.PORT || 1337

app.use('/', express.json())

app.get('/', (req, res) => {
  res.send('Fetch Backend Assessment API')
})
app.use('/points/add', addPointsRouter)
app.use('/points/balance', pointsBalanceRouter)
app.use('/points/spend', spendPointsRouter)

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})