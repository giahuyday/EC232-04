const connection = require('../Database/connecting.js');

module.exports = IndexPageController = {
  loading: async (req, res) => {
    try {
      const categories = await queryCategories();
      const items = await queryItems();
      // const bestsaler = await querybestSale();
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
function querybestSale() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Item i JOIN ( SELECT ItemID, MAX(PictureID) AS PictureID FROM Item_Picture GROUP BY ItemID ) ip_max ON i.ItemID = ip_max.ItemID JOIN Item_Picture ip ON ip_max.PictureID = ip.PictureID;', (err, result) => {
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
    connection.query('SELECT *,GetNumberRate_F(i.ItemID) as rating,GetAveragePoint_F(i.ItemID) as couting FROM Item i JOIN ( SELECT ItemID, MAX(PictureID) AS PictureID FROM Item_Picture GROUP BY ItemID ) ip_max ON i.ItemID = ip_max.ItemID JOIN Item_Picture ip ON ip_max.PictureID = ip.PictureID;', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
