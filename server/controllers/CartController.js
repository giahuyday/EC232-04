const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ec_group4',
});
function queryCart(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT *,Cart_Detail.Price AS Cart_Detail_Price, item.Price AS Item_Price FROM Cart_Detail,Cart,item_picture,item where cart.cartid=Cart_Detail.cartid and item.ItemID = item_picture.ItemID and item.ItemID = Cart_Detail.itemID and Cart.AccountID = ?',[id], (err, result) => {
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

