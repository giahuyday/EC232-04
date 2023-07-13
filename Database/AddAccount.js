const mysql = require('mysql');
// connect db bình thường 


const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'dangminh_dbms',
  password: 'dangminh_dbms',
  database: 'dangminh_dbms',
});
;

connection.connect()

// lấy các thông tin để tạo account
const username = 'johnydep';
const password = 'password123';
const name = 'John Doe';
const birth = '1990-01-01';
const money = 5000;
const email = 'john.doe@example.com';
const phone = '123456789';
const address = '123 Main St';

// tạo string gọi proc
const callProcedure = `CALL AddAccount('${username}', '${password}', '${name}', '${birth}', ${money}, '${email}', '${phone}', '${address}')`;

// gọi querry bình thường
connection.query(callProcedure, (err, results, fields) => {
  if (err) throw err

  const result = Object.values(results[0][0])[0];

// trả về 1 nếu account đã tồn tại trả 0 nếu tạo thành công
  if (result === 1) {
  console.log('Username already exists.');
  } else if (result === 0) {
    console.log('New Account created:');
  }
})


connection.end()
