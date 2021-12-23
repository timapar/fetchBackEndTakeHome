const { transactionLog, usePoints, updatePointsBalance } = require('../cache')

const findWhichPointsUsed = (points) => {
  // Create collection to save which points are used
  const pointsUsedByPayer = {}
  // Iterate through transactions from oldest to newest
  for (const entry of transactionLog) {
    const { availablePoints, transactionID, payer } = entry
    // If current entry doesn't have any points available, move on to next
    if (availablePoints === 0) continue

    // Determine how many points to use out of the current entry
    const pointsToUse = Math.min(points, availablePoints)
    // Update the transactionLog to reflect points used
    usePoints(transactionID, pointsToUse)
    // Subtract the points used on this entry from the total points to be spent
    points -= pointsToUse

    // If a previous entry was the same payer, update the points used, otherwise create new entry for payer
    pointsUsedByPayer[payer] ? pointsUsedByPayer[payer] -= pointsToUse : pointsUsedByPayer[payer] = -pointsToUse

    // If all points have been assigned, break out of loop
    if (points === 0) break
  }
  // Transform data to more user friendly format
  const listOfPointsUsed = []
  for (const payer in pointsUsedByPayer) {
    listOfPointsUsed.push({ payer, "points": pointsUsedByPayer[payer]})
  }
  // Update the total point balances based on what was used
  for (const entry of listOfPointsUsed) {
    const { payer, points } = entry
    updatePointsBalance(payer, points)
  }
  return listOfPointsUsed
}

module.exports = { findWhichPointsUsed }
