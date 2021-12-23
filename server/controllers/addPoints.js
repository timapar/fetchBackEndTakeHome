const { transactionLog } = require('../cache')
const { addEntry } = require('../models/addPoints')

const addPoints = (req, res) => {
  // Destructure request body
  const { payer, points, timestamp} = req.body
  // Create new transaction ID
  const transactionID = transactionLog.length + 1
  // Create new log entry in proper format
  const logEntry = {
    transactionID,
    payer,
    points,
    'availablePoints': points,
    timestamp
  }

  // Add the new log entry to the cache
  addEntry(logEntry)

  // Respond with the new entry
  res.status(201).json(logEntry)
}

module.exports = { addPoints }