const mysql = require('mysql');
// connect db bình thường 


const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'dangminh_dbms',
  password: 'dangminh_dbms',
  database: 'dangminh_dbms',
});
;

// 2 hàm này sẽ chạy lần lượt sau khi nhấn nút lưu cart 
const status = 'Active';
const accountID = 'Acc1';

connection.connect()

const callProcedure1 = `CALL AddCart('${status}', '${accountID}')`;
var NewCartID = '';

// danh sách các món có trong cart 
const Cart_table = [
  {  itemid: 'Item1', Quantity: 2 },
  {  itemid: 'Item3', Quantity: 1 },
  {  itemid: 'Item2', Quantity: 4 }
];

// 2 hàm chạy 
connection.query(callProcedure1, (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
}
  
  
  const result = Object.values(results[0][0])[0];
  NewCartID  = result ;
  
  let queryCount = 0;
  const totalQueries = Cart_table.length;

  for (const row of Cart_table) {
    const callProcedure2 = `CALL AddCartDetail('${ NewCartID }', '${row.itemid}', ${row.Quantity})`;
    connection.query(callProcedure2, (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
        return;
    }
      
      
      queryCount++;
      if (queryCount === totalQueries) {
        connection.end();
      }
  });
  }
  console.log('Done save.')
});



