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
const accountID = 'Acc3'; // mã người dùng
const point = 4.5; // số điểm cho 0 ==> 5 (lố cũng đc t ko có check trên db)
const itemid = 'Item1'; // mã hàng
const Comment = 'Very ad good'; // đánh giá bằng chữ (cho 500 ký tự thôi nha)

connection.connect()

const callProcedure1 = `CALL AddOrUpdateRate('${accountID}', '${point}', '${itemid}', '${Comment}')`;

connection.query(callProcedure1, (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
}
  console.log('Done comments.')
});

connection.end();

