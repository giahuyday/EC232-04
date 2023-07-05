const mysql = require('mysql');
// connect db bình thường 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ec_group04'
});

// trước khi chạy chuẩn bị các input như sau 
const itemName = 'Laptop test';
const itemPrice = 150000;
const itemDescription = 'i3-1115G4/ RAM 8GB/ 256GB SSD/ Windows 11';
const itemColor = 'Red';
const itemStatus = 'Available';
// 2 thằng phía dưới nếu cần câu Sql lấy tên các loại thì 
// select name from category (lấy danh sách tên loại hàng)
// select name from producer ( lấy danh sách tên nhà sản xuất)
// nếu 1 trong 2 ko tồn tại trong danh sách thì hàm sẽ trả về '0' và ko add zo db 
const category = 'Laptop';  
const producer = 'Asus';  

connection.connect()

const callProcedure = `CALL AddItem('${itemName}', ${itemPrice}, '${itemDescription}', '${itemColor}', '${itemStatus}', '${category}', '${producer}')`;

connection.query(callProcedure, (error, results, fields) => {
    if (error) {
      console.error('Error calling the stored procedure:', error);
      return;
    }

    const result = Object.values(results[0][0])[0];

    if (result === 0) {
        console.log('Category or producer is wrong.');
        } else  {
          console.log('New Item created. New id is: ',result );
        }
  });

connection.end()