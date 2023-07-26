const connection = require('../Database/connecting.js');

function queryCart(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT *, Item.Price AS Item_Price FROM Cart_Detail,Cart,Item_Picture,Item where Cart.CartID=Cart_Detail.CartID and Item.ItemID = Item_Picture.ItemID and Item.ItemID = Cart_Detail.itemID and Cart.AccountID = ?',[id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
function queryUpdareQuantity(qua,cartid,itemid) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE Cart_Detail SET Quantity = ? WHERE CartID = ? and itemID = ?'
    connection.query(query,[qua,cartid,itemid], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}


module.exports = CartContoller = {
  loading: async (req, res) => {
    try {
      const cart = await queryCart(req.params.ID);
      res.send(cart);
    } catch (err) {
      console.error('Fetch Failed!', err);
      res.status(500).send('Fetch Failed!');
    }
  },
  updateQuantity: async (req, res) => {
    try {
      console.log(req.body)
      const quantity = req.body.Quantity;
      const cartID = req.body.CartID;
      const itemID = req.body.itemId;
      const result = await queryUpdareQuantity(quantity,cartID,itemID)
      res.send(result)
    } catch (err) {
      console.error('Fetch Failed!', err);
      res.status(500).send('Fetch Failed!');
    }
  },
};

