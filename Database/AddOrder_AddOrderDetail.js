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
const Name = 'Grian';
const Address = '12 London';
const Phone = '090855410';
const Note = 'call before shiping';
const Total = 15000; // tính trước khi nhấn đặt rồi paste vào đây 
const status = 'Shipping';
const accountID = 'Acc1'; // nếu là guess thì cứ để 'null'

connection.connect()

const callProcedure1 = `CALL AddOrder(  '${Name}', '${Address}', '${Phone}', '${Note}', '${Total}',   '${status}', '${accountID}')`;
var NewOrderID = '';

// danh sách các món có trong order (Giá tiền từng mục t sẽ tính riêng rồi add trong hàm sql)
const Order_table = [
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
  NewOrderID  = result ;

  let queryCount = 0;
  const totalQueries = Order_table.length;

  for (const row of Order_table) {
    const callProcedure2 = `CALL AddOrderDetail('${ NewOrderID  }', '${row.itemid}', ${row.Quantity})`;
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

