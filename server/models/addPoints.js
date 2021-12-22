const {
  transactionLog,
  addTransaction,
  updatePointsBalance,
  sortTransactions 
} = require('../cache')

const addEntry = (logEntry) => {
  const latestEntryDate = new Date(transactionLog[transactionLog.length - 1])
  const newEntryDate = new Date(logEntry.timestamp)
  addTransaction(logEntry)
  if (newEntryDate < latestEntryDate) sortTransactions()

  updatePointsBalance(logEntry.points)
}

module.exports = { addEntry }
