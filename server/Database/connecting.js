const mysql = require('mysql2');


module.exports = connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'dangminh_dbms',
  password: 'dangminh_dbms',
  database: 'dangminh_dbms',
})

connection.connect((error) => {
  if (error) {
    console.error('Lỗi kết nối đến cơ sở dữ liệu:', error);
    return;
  }
  console.log('Đã kết nối thành công đến cơ sở dữ liệu MySQL');
});

