const { getTotalPoints } = require('../models/pointsBalance')

const getPointsBalance = (req, res) => {
  const totalPoints = getTotalPoints()
  
  res.status(200).json(totalPoints)
}

module.exports = { getPointsBalance }
