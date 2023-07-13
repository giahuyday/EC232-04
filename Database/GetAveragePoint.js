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
const itemid = 'Item1'; // mã hàng


connection.connect()

const callProcedure1 = `CALL GetAveragePoint('${itemid}')`;

connection.query(callProcedure1, (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
}

    const result = Object.values(results[0][0])[0];

  console.log('This is point:', result)
});

connection.end();