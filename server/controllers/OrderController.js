const connection = require('../Database/connecting.js')

exports.OrdersDetail = (req, res) => {
  console.log(req.body)
  const AccountId = req.params // Make sure the parameter matches the route
  console.log('🚀 ~ AccountId:', AccountId)
  // TODO: Add a WHERE clause to the query to filter by AccountId
  const query = 'SELECT * FROM Order_ where AccountID = ?'

  connection.query(query, ['Acc3'], (err, result) => {
    if (err) {
      console.log(err)
      res.send('Failed to retrieve orders.')
    } else {
      if (result.length > 0) {
        console.log('Order', result)
        res.send(result)
      } else {
        console.log('No orders found.')
        res.send('No orders found.')
      }
    }
  })
}
