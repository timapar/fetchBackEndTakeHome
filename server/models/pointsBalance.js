const { pointsBalance } = require('../cache')

const getTotalPoints = () => {
  return pointsBalance
}

module.exports = { getTotalPoints }
