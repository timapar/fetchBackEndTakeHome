const { findWhichPointsUsed } = require('../models/spendPoints')
const { pointsBalance, updatePointsBalance } = require('../cache')

const spendPoints = (req, res) => {
  // Destructure request body
  const { points } = req.body
  // If user wants to spend more points than they have, respond with helpful message
  if (points > pointsBalance.totalPoints) {
    res.status(200).send('You do not have enough points')
  } else {
    // Otherwise, determine which payers the points are coming from
    const pointsSpent = findWhichPointsUsed(points)
    // Update the overall point balance
    updatePointsBalance(points)
    // Respond with which points were spent
    res.status(201).json(pointsSpent)
  }
}

module.exports = { spendPoints }
