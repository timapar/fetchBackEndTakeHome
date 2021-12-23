const spendPointsRouter = require('express').Router()
const { spendPoints } = require('../controllers/spendPoints')

spendPointsRouter.post('/', spendPoints)

module.exports = { spendPointsRouter }
