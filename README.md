# **fetchBackEndTakeHome**


## EXAMPLE DATA
---
### POST add points
##### request body: `{"payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z"}`
##### response body: `{"transactionID": 1, "payer": "DANNON", "points": 1000, "availablePoints": 1000, "timestamp": "2020-11-02T14:00:00Z"}`

### GET point balance
##### response body: `{"totalPoints": 3400}`

### POST spend points
##### request body: `{"points": 100}`
##### response body: `[{ "payer": "DANNON", "points": -100 }, { "payer": "UNILEVER", "points": -200 }, { "payer": "MILLER COORS", "points": -4,700 }]`