const connection = require('../../Database/connecting.js');

module.exports = OrdersController = {
  loading: async (req, res) => {
    try {
      connection.query('select * from Order_;', (err, result) => {
        if (err) {
          console.log('Fetch Failed !')
          res.status(500).send('Fetch Failed!');
        } else {
          console.log(result)
          res.send(result)
        }
      })
    } catch (err) {
      console.error('Fetch Failed!', err);
      res.status(500).send('Fetch Failed!');
    }
  },
  findOrders: async (req, res) => {
    try {
      const result = req.params.value ||''
      const value = '%'+result+'%'
      connection.query('SELECT * FROM Order_ where AccountID LIKE ? or OrderID LIKE ? or Status LIKE ?',[value,value,value], (err, result) => {
        if (err) {
          console.log('Fetch Failed !')
          res.status(500).send('Fetch Failed!');
        } else {
          console.log(result)
          res.send(result)
        }
      })
    } catch (err) {
      console.error('Fetch Failed!', err);
      res.status(500).send('Fetch Failed!');
    }
  },
  getType:async (req,res) =>{
    try{
        const id = req.params.ID
        const type = await queryType(id);
        res.send(type);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Fetch Failed!');
    }
  },
  getInfo:async (req,res) =>{
    try{
        const ID = req.params.ID
        const type = await queryInfo(ID);
        res.send(type);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Fetch Failed!');
    }
  }
  
};

function queryType(AccountID) {
  return new Promise((resolve, reject) => {
    connection.query('CALL GetGuessType(?)',[AccountID], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
function queryInfo(AccountID) {
  return new Promise((resolve, reject) => {
    connection.query('CALL GetAccountInfo(?)',[AccountID], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
