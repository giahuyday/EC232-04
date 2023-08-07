const connection = require('../../Database/connecting.js');

module.exports = UserController = {
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
  getType:async (req,res) =>{
    try{
        const id = req.param.id
        const type = await queryType(id);
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

