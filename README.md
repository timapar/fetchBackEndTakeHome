# **Fetch Backend Engineer Take Home**

## DESCRIPTION
#### This is the a simple API designed to meet the requirements of a technical assessment. There are three endpoints. One to add points to the user's account, one to spend points in the user's account, and one to get a balance of points available in the user's account.
#### Below you will find instructions on how to get the server running on a local machine, the endpoint URIs, and some examples of what the data should be shaped like.
---
## INSTALLATION
#### Clone down the repository to your local machine and ensure Node.js is installed.
#### Open a terminal in the root directory of the repository.
#### Execute `npm install` in the terminal.
#### Followed by `npm start`.
#### The terminal should now display the URL, including the port, for the API.
---
## ENDPOINTS
#### GET "/points/balance"
#### POST "/points/add"
#### PUT "/points/spend"
---
## EXAMPLE DATA FORMAT
### GET point balance
##### response body: 
```
{
  "totalPoints": 6300,
  "DANNON": 1000,
  "UNILEVER": 0,
  "MILLER COORS": 5300
}
```
### POST add points
##### request body: 
```
{
  "payer": "DANNON", 
  "points": 1000, 
  "timestamp": "2020-11-02T14:00:00Z"
}
```
##### response body: 
```
{
  "transactionID": 1, 
  "payer": "DANNON", 
  "points": 1000, 
  "availablePoints": 1000, 
  "timestamp": "2020-11-02T14:00:00Z"
}
```


### PUT spend points
##### request body: 
```
{"points": 5000}
```
##### response body: 
```
[
  { "payer": "DANNON", "points": -100 },
  { "payer": "UNILEVER", "points": -200 },
  { "payer": "MILLER COORS", "points": -4,700 }
]
```