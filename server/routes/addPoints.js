const addPointsRouter = require('express').Router()
const { addPoints } = require('../controllers/addPoints')

addPointsRouter.post('/', addPoints)

module.exports = { addPointsRouter }
