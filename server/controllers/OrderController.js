const connection = require('../Database/connecting.js')

exports.GetAllOrderIDsOfAccount = async (req, res) => {
  console.log(req.body)
  const AccountId = req.params.AccountID // Make sure the parameter matches the route
  console.log('🚀 ~ AccountId:', AccountId)
  // TODO: Add a WHERE clause to the query to filter by AccountId, right now is 'Acc3'
  const query = 'SELECT * FROM Order_ where AccountID = ?'

  connection.query(query, [AccountId], (err, result) => {
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
  console.log('🚀 ~ OrderId Detail By ID:', OrderId)
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
        console.log('No order found 2.')
        res.send('No order found 2.')
      }
    }
  })
}
exports.GetAllItemIDByOrderID = async (req, res) => {
  const OrderID = req.params.ID // Retrieve the OrderID from the URL parameter
  console.log('🚀 ~ exports.GetAllItemIDByOrderID= ~ OrderID:', OrderID)

  const query = 'SELECT ItemID FROM Order_Details WHERE OrderID = ?'

  connection.query(query, [OrderID], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).send('Failed to retrieve ItemIDs by OrderID.')
    } else {
      if (result.length > 0) {
        console.log('GetAllItemIDByOrderID result', result)
        const itemIDs = result.map((row) => row.ItemID)
        res.json(itemIDs)
      } else {
        console.log('No items found for the specified OrderID.')
        res.status(404).send('No items found for the specified OrderID.')
      }
    }
  })
}

exports.GetAllDetailsOfItemByItemID = async (req, res) => {
  const ItemID = req.params.ID // Retrieve the ItemID from the URL parameter
  console.log('🚀 ~ exports.GetAllDetailsOfItemByItemID= ~ ItemID:', ItemID)

  // SQL query to retrieve all details of an item by its ItemID
  const query = `
    SELECT It.ItemID, It.Name, It.Price, It.Description, It.Status, Ca.Name AS Category, pro.Name AS Producer, Ip.Content AS Pic
    FROM Item AS It
    JOIN Category AS Ca ON It.CateID = Ca.CateID
    JOIN Producer AS pro ON It.ProDucerID = pro.ProducerID
    LEFT JOIN Item_Picture AS Ip ON It.ItemID = Ip.ItemID
    WHERE It.ItemID = ?
  `

  connection.query(query, [ItemID], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json({ error: 'Failed to retrieve item details.' })
    } else {
      if (result.length > 0) {
        console.log('GetAllDetailsOfItemByItemID result', result)
        res.json(result[0]) // Send the first row of the result as JSON
      } else {
        console.log('No item found for the specified ItemID.')
        res.status(404).json({ error: 'No item found for the specified ItemID.' })
      }
    }
  })
}
