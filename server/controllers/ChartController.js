const connection = require('../Database/connecting.js');

module.exports = ChartController = {
  loading: async (req, res) => {
    try {
      const date = req.query.date 
      if(date === typeof(undefined)){
        date='2023-09-02'
      } 
      console.log(date);
      const week = await queryChartWeek(date);
      const month = await queryChartQuater(date);
      const  quater = await queryChartMonth(date);
      const  year = await queryChartYear();
      
      res.send({week,month,quater,year});
    } catch (err) {

    }
  },
};

function queryChartWeek(date) {
  return new Promise((resolve, reject) => {
    connection.query(`CALL GetTotalPriceByWeeks(?)`,[date], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        resolve(result);
      }
    });
  });
}
function queryChartYear() {
  return new Promise((resolve, reject) => {
    connection.query(`CALL GetTotalPriceByYear()`, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        resolve(result);
      }
    });
  });
}
function queryChartMonth(date) {
  return new Promise((resolve, reject) => {
    connection.query(`CALL GetTotalPriceByMonth(?)`,[date], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        resolve(result);
      }
    });
  });
}
function queryChartQuater(date) {
  return new Promise((resolve, reject) => {
    connection.query(`CALL GetTotalPriceByQuater(?)`,[date], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        resolve(result);
      }
    });
  });
}
