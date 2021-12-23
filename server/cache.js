const transactionLog = []
const pointsBalance = {'totalPoints' : 0}

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

const updatePointsBalance = (value) => {
  pointsBalance.totalPoints += value
}

module.exports = { 
  transactionLog, 
  pointsBalance, 
  addTransaction, 
  sortTransactions,
  updatePointsBalance,
}
