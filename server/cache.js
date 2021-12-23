const transactionLog = []
const pointsBalance = {'totalPoints': 0}

const addTransaction = (entry) => {
  transactionLog.push(entry)
}

const sortTransactions = () => {
  transactionLog.sort((a, b) => {
    const dateA = new Date(a.timestamp)
    const dateB = new Date(b.timestamp)
    return dateA - dateB
  })
}

const updatePointsBalance = (payer, value) => {
  pointsBalance.totalPoints += value
  pointsBalance[payer] ? pointsBalance[payer] += value : pointsBalance[payer] = value
}

const usePoints = (id, value) => {
  for (const entry of transactionLog) {
    if (entry.transactionID === id) {
      entry.availablePoints -= value
      break
    }
  }
}

module.exports = { 
  transactionLog, 
  pointsBalance, 
  addTransaction, 
  sortTransactions,
  updatePointsBalance,
  usePoints,
}
