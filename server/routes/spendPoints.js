const spendPointsRouter = require('express').Router()
const { spendPoints } = require('../controllers/spendPoints')

spendPointsRouter.put('/', spendPoints)

module.exports = { spendPointsRouter }
