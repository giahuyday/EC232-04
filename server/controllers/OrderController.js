const connection = require('../Database/connecting.js')

exports.GetAllOrderIDsOfAccount = async (req, res) => {
  console.log(req.body)
  const AccountId = req.params // Make sure the parameter matches the route
  // console.log('🚀 ~ AccountId:', AccountId)
  // TODO: Add a WHERE clause to the query to filter by AccountId, right now is 'Acc3'
  const query = 'SELECT * FROM Order_ where AccountID = ?'

  connection.query(query, ['Acc3'], (err, result) => {
    if (err) {
      console.log(err)
      res.send('Failed to retrieve orders.')
    } else {
      if (result.length > 0) {
        console.log('GetAllOrderIDsOfAccount result', result)
        res.send(result)
      } else {
        console.log('No orders found.')
        res.send('No orders found.')
      }
    }
  })
}

exports.GetOrderDetailByID = async (req, res) => {
  console.log('req.body', req.body)
  const OrderId = req.params // Make sure the parameter matches the route
  console.log('🚀 ~ OrderId:', OrderId)
  const query = 'SELECT od.ItemID, it.Name , od.Quantity, od.Price FROM Order_Details as od, Item as it WHERE od.OrderID = ? and od.ItemID = it.ItemID'

  connection.query(query, [OrderId], (err, result) => {
    if (err) {
      console.log(err)
      res.send('Failed to retrieve order.')
    } else {
      if (result.length > 0) {
        console.log('GetOrderDetailByID result', result)
        res.send(result)
      } else {
        console.log('No order found.')
        res.send('No order found.')
      }
    }
  })
}