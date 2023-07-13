const mysql = require('mysql');
// connect db bình thường 


const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'dangminh_dbms',
  password: 'dangminh_dbms',
  database: 'dangminh_dbms',
});
;

// những tham số cần có khi gọi hàm  
const accountID = 'Acc2'; // mã người dùng
const itemid = 'Item1'; // mã hàng
const Quantity = 2; // số ko cho chọn số lượng thì mặc định 1 cho t nha 

connection.connect()

const callProcedure1 = `CALL Add_cardItem('${accountID}', '${itemid}', '${ Quantity}')`;

// hàm chạy mỗi lần bấm nút add hàng vào giỏ  
connection.query(callProcedure1, (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
} 
  console.log('Done save.')
});

connection.end();

