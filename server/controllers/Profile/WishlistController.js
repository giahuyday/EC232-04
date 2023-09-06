const connection = require('../../Database/connecting')

exports.GetWishlist = async (req, res) => {
  const AccountID = req.params.AccountID

  // First query to get the quantity
  connection.query('SELECT count(It.ItemID) as Quantity FROM WishList as wi, Item as It, Category as Ca, Producer as pro WHERE wi.AccountID = ? and wi.ItemID = It.ItemID and It.CateID = Ca.CateID and It.ProDucerID = pro.ProducerID', [AccountID], (err, quantityResult) => {
    if (err) {
      console.log('Fetch Failed for quantity!', err)
      res.status(500).json({ error: 'Fetch failed for quantity' })
    } else {
      // Second query to get the wishlist items
      connection.query('SELECT DISTINCT It.ItemID, It.Name, It.Price, It.Description, It.Status, Ca.Name as Category, pro.Name as Producer,  Ip.Content as Pic FROM WishList as wi, Item as It, Category as Ca, Producer as pro, Item_Picture as Ip WHERE wi.AccountID = ? and wi.ItemID = It.ItemID and It.CateID = Ca.CateID and It.ProDucerID = pro.ProducerID and Ip.ItemID = wi.ItemID', [AccountID], (err, itemsResult) => {
        if (err) {
          console.log('Fetch Failed for wishlist items!', err)
          res.status(500).json({ error: 'Fetch failed for wishlist items' })
        } else {
          console.log('Fetch wishlist successful')
          res.json({ Quantity: quantityResult[0], Items: itemsResult })
        }
      })
    }
  })
}

exports.addToWishlist = async (req, res) => {
  const { AccountID, ItemID } = req.body

  // SQL query to add an item to the wishlist
  const addQuery = 'INSERT INTO WishList (AccountID, ItemID) VALUES (?, ?)'

  connection.query(addQuery, [AccountID, ItemID], (err, result) => {
    if (err) {
      console.log('Failed to add item to wishlist!', err)
      res.status(500).json({ error: 'Failed to add item to wishlist' })
    } else {
      console.log('Item added to wishlist successfully')
      res.json({ message: 'Item added to wishlist successfully' })
    }
  })
}

exports.removeFromWishlist = async (req, res) => {
  const { AccountID, ItemID } = req.body

  // SQL query to delete an item from the wishlist
  const deleteQuery = 'DELETE FROM WishList WHERE AccountID = ? AND ItemID = ?'

  connection.query(deleteQuery, [AccountID, ItemID], (err, result) => {
    if (err) {
      console.log('Failed to remove item from wishlist!', err)
      res.status(500).json({ error: 'Failed to remove item from wishlist' })
    } else {
      console.log('Item removed from wishlist successfully')
      res.json({ message: 'Item removed from wishlist successfully' })
    }
  })
}
