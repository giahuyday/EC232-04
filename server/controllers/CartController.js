const connection = require('../Database/connecting.js');

function queryCart(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT *, i.Price AS Item_Price FROM Item i JOIN( SELECT ItemID, MAX(PictureID) AS PictureID FROM Item_Picture GROUP BY ItemID ) ip_max ON i.ItemID = ip_max.ItemID JOIN Item_Picture ip ON ip_max.PictureID = ip.PictureID JOIN Cart_Detail cd ON i.ItemID = cd.ItemID AND i.Status = "Available" JOIN Cart c ON cd.CartID = c.CartID AND c.status="saved" AND c.AccountID = ?',[id], (err, result) => {
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
  addCart : async(req,res) =>{
    try {
      const quantity = req.body.Quantity;
      const Account = req.body.Account;
      const ItemId =  req.body.itemId;
      connection.query('call Add_cardItem(?,?,?)',[Account,ItemId,quantity],(err, result)=>{
        if (err) {
          console.log(err)
        } else {
         res.send(result)
        }
      })
    }
    catch(err){
      console.error('Fetch Failed!', err);
      res.status(500).send('Fetch Failed!');
    }
  },
  removeCart : async(req,res) =>{
    try {
      const CartID = req.body.CartID;
      const ItemID = req.body.ItemID;
      connection.query('Delete From Cart_Detail WHERE CartID=? AND itemID=?',[CartID,ItemID],(err, result)=>{
        if (err) {
          console.log(err)
        } else {
         res.send(result)
        }
      })
    }
    catch(err){
      console.error('Fetch Failed!', err);
      res.status(500).send('Fetch Failed!');
    }
  }
};

