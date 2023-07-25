const connection = require('../Database/connecting.js');

module.exports = ChartController = {
  loading: async (req, res) => {
    try {
      const week = await queryChartWeek();
      const day = await queryChartWeek();
      res.send(week);
    } catch (err) {

    }
  },
};

function queryChartWeek() {
  return new Promise((resolve, reject) => {
    connection.query(`CALL GetTotalPriceByWeeks('2023-06-01')`, (err, result) => {
      if (err) {

      } else {
        resolve(result);
      }
    });
  });
}
