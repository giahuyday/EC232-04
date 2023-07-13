const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'dangminh_dbms',
  password: 'dangminh_dbms',
  database: 'dangminh_dbms',
})

module.exports = IndexPageController = {
  loading: async (req, res) => {
    try {
      const categories = await queryCategories();
      const accounts = await queryAccounts();

      res.send({ categories, accounts });
    } catch (err) {
      console.error('Fetch Failed!', err);
      res.status(500).send('Fetch Failed!');
    }
  },
};

function queryCategories() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Category LIMIT 10', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function queryAccounts() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Item, Item_Picture WHERE Item.ItemID = Item_Picture.ItemID LIMIT 10', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
