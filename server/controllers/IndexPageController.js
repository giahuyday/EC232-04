const connection = require('../Database/connecting.js');

module.exports = IndexPageController = {
  loading: async (req, res) => {
    try {
      const categories = await queryCategories();
      const items = await queryItems();

      res.send({ categories, items });
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

function queryItems() {
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
