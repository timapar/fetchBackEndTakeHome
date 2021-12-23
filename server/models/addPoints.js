const {
  transactionLog,
  addTransaction,
  updatePointsBalance,
  sortTransactions 
} = require('../cache')

const addEntry = (logEntry) => {
  const logCount = transactionLog.length
  addTransaction(logEntry)
  updatePointsBalance(logEntry.points)
  if (logCount > 0) {
    const latestEntryDate = new Date(transactionLog[logCount - 1].timestamp)
    const newEntryDate = new Date(logEntry.timestamp)
    if (newEntryDate < latestEntryDate) sortTransactions()
  }
}

module.exports = { addEntry }
