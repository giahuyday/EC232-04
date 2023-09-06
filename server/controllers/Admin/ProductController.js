const connection = require('../../Database/connecting.js');

module.exports = ProController = {
  loading: async (req, res) => {
    try {
      connection.query('SELECT * FROM Item', (err, result) => {
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
  lock: async (req, res) => {
    try {
      const result = req.params.value ||''
      const value = '%'+result+'%'
      connection.query('UPDATE `Item` SET Status = "Sold out" WHERE ItemID=?',[result], (err, result) => {
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
  unlock: async (req, res) => {
    try {
      const result = req.params.value ||''
      const value = '%'+result+'%'
      connection.query('UPDATE `Item` SET Status = "Available" WHERE ItemID= ?',[result], (err, result) => {
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
  }
};

