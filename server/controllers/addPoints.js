const { transactionLog } = require('../cache')
const { addEntry } = require('../models/addPoints')

const addPoints = (req, res) => {
  const { payer, points, timestamp} = req.body
  const transactionID = transactionLog.length + 1
  const logEntry = {
    transactionID,
    payer,
    points,
    'availablePoints': points,
    timestamp
  }

  addEntry(logEntry)
  
  res.status(201).json(logEntry)
}

module.exports = { addPoints }