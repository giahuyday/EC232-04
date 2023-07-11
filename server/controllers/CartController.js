const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ec_group4',
});
function queryCart(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM Cart from Account', (err, result) => {
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
      const categories = await queryCart();
      res.send({ categories, accounts });
    } catch (err) {
      console.error('Fetch Failed!', err);
      res.status(500).send('Fetch Failed!');
    }
  },
};

