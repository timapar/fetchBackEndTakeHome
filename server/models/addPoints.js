const {
  transactionLog,
  addTransaction,
  updatePointsBalance,
  sortTransactions 
} = require('../cache')

const addEntry = (logEntry) => {
  // Destructure entry
  const { payer, points } = logEntry
  // Get number of logs before adding the new entry
  const logCount = transactionLog.length
  // Add entry to log in cache
  addTransaction(logEntry)
  // Update the balance of available points in cache
  updatePointsBalance(payer, points)
  
  // If there were any entries in the log previously
  if (logCount > 0) {
    // Create Date object for latest previous entry
    const latestEntryDate = new Date(transactionLog[logCount - 1].timestamp)
    // Create Date object for new entry
    const newEntryDate = new Date(logEntry.timestamp)
    // If new entry's timestamp is prior to latest previous entry, sort the whole log
    if (newEntryDate < latestEntryDate) sortTransactions()
  }
}

module.exports = { addEntry }
