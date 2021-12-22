const pointsBalanceRouter = require('express').Router()
const { getPointsBalance } = require('../controllers/pointsBalance')

pointsBalanceRouter.get('/', getPointsBalance)

module.exports = { pointsBalanceRouter }
