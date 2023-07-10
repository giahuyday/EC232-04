const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ec_group4',
});

module.exports = IndexPageController = {
  loadingCategory: async (req, res) => {
    try {
      const categories = await queryCategories();
      const accounts = await queryAccounts();

      console.log('Categories:', categories);
      console.log('Accounts:', accounts);

      res.send({ categories, accounts });
    } catch (err) {
      console.error('Fetch Failed!', err);
      res.status(500).send('Fetch Failed!');
    }
  },
};

function queryCategories() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Category', (err, result) => {
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
    connection.query('SELECT * FROM Account', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
