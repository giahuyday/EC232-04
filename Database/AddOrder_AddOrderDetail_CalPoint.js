const mysql = require('mysql');
// hai hàm này dùng để lưu thông tin đơn hàng sau khi THANH TOÁN 
// trước khi nhấn nút thanh toán cần có 
// thông tin cơ bản của khách hàng như phía dưới 
// 1 cái table chứa thông tin như phía dưới (Id món và số lượng)


// connect db bình thường (đổi qua db online)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ec_group04'
});

// 2 hàm này sẽ chạy lần lượt sau khi nhấn nút thanh toán 
const Name = 'Grian';
const Address = '12 London';
const Phone = '090855410';
const Note = 'call before shiping';
const Total = 15000; // tính trước khi nhấn đặt rồi paste vào đây 
const status = 'Shipping';
const accountID = 'Acc1'; // nếu là guess thì cứ để 'null'

// danh sách các món có trong order (Giá tiền từng mục t sẽ tính riêng rồi add trong hàm sql)
const Order_table = [
  {  itemid: 'Item1', Quantity: 2 },
  {  itemid: 'Item3', Quantity: 1 },
  {  itemid: 'Item2', Quantity: 4 }
];


connection.connect()

// hàm 1 là tạo đơn hàng mới nhất với thông tin cơ bản
const callProcedure1 = `CALL AddOrder(  '${Name}', '${Address}', '${Phone}', '${Note}', '${Total}',   '${status}', '${accountID}')`;
var NewOrderID = '';

connection.query(callProcedure1, (error, results, fields) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    }
  
    // trả về ID đơn hàng mới nhất 
    // !!!! lưu cái này lại sẽ dùng cho phía dưới
    const result = Object.values(results[0][0])[0];
  NewOrderID  = result ;

  let queryCount = 0;
  const totalQueries = Order_table.length;

  // paste cái orther mới nhất vào NewOrderID
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
// update thêm chức năng tính điểm tích lũy 

connection.connect()
// hàm này sẽ tính ra điểm thưởng dựa trên các tiêu chí của t và tự add vào cột Money bên trong account 
// (cột Money này là dùng để lưu điểm thưởng tích lũy ko phải lưu tổng tiền nha)
// khi thanh toán có thể lấy money ra để trừ tổng bill
const callProcedure3 = `CALL CalPoint( '${ NewOrderID  }')`;
connection.query(callProcedure3, (error, results, fields) => {
  if (error) {
      console.error('Error executing query:', error);
      return;
  }
  
  const temp= 0;

  const result = Object.values(results[0][0])[0];
  temp  = result ;
  // check cái temp 
  if ( temp != 0) {
    console.log('Tích điểm thành công. Số điểm bạn tích là: ', temp )
  }else{

    console.log('Lỗi rồi: ', temp )
  }
   
});

connection.end();
