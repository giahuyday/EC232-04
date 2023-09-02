const connection = require('../../Database/connecting');

exports.Login =  (req, res) => {
    console.log(req.body)
    const UserName = req.body.userName
    const Password = req.body.Password
    connection.query('SELECT * FROM Account WHERE Account.UserName = ? AND Account.Password = ?', [UserName, Password], (err, result) => {
      if (err) {
        console.log(err)
      }
      if (result.length > 0) {
        console.log(result)
        res.send(result)
      } else {
        console.log(result)
        res.send("Failed")
      }
    })
  }

exports.CreateAccount =  (req, res) => {
    console.log(req.body)
    const { userName, Password, Name, Birth, Money, Email, Phone, Adress } = req.body
    connection.query('CALL AddAccount(?,?,?,?,?,?,?,?)', [userName, Password, Name, Birth, Money, Email, Phone, Adress], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('Register Accepted')
      }
    })
  }

exports.EditUserDetail = (req, res) => {
    const AccountID = req.params.AccountID
    const UserName = req.body.UserName
    const Password = req.body.Password
    const Name = req.body.Name
    const Birth = req.body.Birth
    const Money = req.body.Money
    const Email = req.body.Email
    const Phone = req.body.Phone
    const Adress = req.body.Adress
    connection.query('UPDATE Account SET Account.UserName=?, Account.Password=?, Account.Name=?, Account.Birth= ?,Account.Money=?, Account.Email=?, Account.Phone=?, Account.Adress=? WHERE AccountID = ?', [UserName, Password, Name, Birth, Money, Email, Phone, Adress, AccountID], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.GetUserList = (req, res) => {
    const AccountID = req.params.AccountID
    // const { userName, Password, Name, Birth, Money, Email, Phone, Adress } = req.body
    connection.query('SELECT * FROM Account WHERE Account.AccountID = ?', [AccountID], (err, result) => {
        if (err) {
            console.log('Fetch Failed !')
        } else {
            // console.log(rows[0])
            console.log(result)
            res.send(result)
        }
    })
}

exports.UserSearch = (req, res) => {
  const CateID =  req.params.CateID
  connection.query('SELECT Item.*, GROUP_CONCAT(Item_Picture.Content SEPARATOR ", ") AS Content ' +
                  'FROM Item ' +
                  'LEFT JOIN Item_Picture ON Item.ItemID = Item_Picture.ItemID ' +
                  'WHERE Item.CateID = ? ' +
                  'GROUP BY Item.ItemID, Item.Name', [CateID], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(rows[0])
      console.log(result)
      res.send(result)
    }
  })
}

exports.PlaceOrder = (req,res) => {
  const data_Cart = req.body.data_Cart
  console.log(data_Cart)
  const Day = Date.now()
  const GuessName = req.body.GuessName
  const Delivery_Address = req.body.Delivery_Address
  const Total_Price = req.body.Total_Price
  const Phone = req.body.Phone
  const Status = req.body.Status
  const AccountID = req.body.AccountID
  const Note = req.body.Note
  const ShipFee = req.body.ShipFee
  const Point_Used = req.body.Point_Used

  var NewOrderID = '';

  connection.query("CALL AddOrder(?,?,?,?,?,?,?)", [GuessName, Delivery_Address, Phone, Note, Total_Price, Status, AccountID], (error, results) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    } // trả về ID đơn hàng mới nhất 
    // !!!! lưu cái này lại sẽ dùng cho phía dưới
    const result = Object.values(results[0][0])[0];
    NewOrderID  = result ;
    let queryCount = 0;
    const totalQueries = data_Cart.length;

    // paste cái orther mới nhất vào NewOrderID
    for (const row of data_Cart) {
      const callProcedure2 = `CALL AddOrderDetail('${ NewOrderID  }', '${row.ItemID}', ${row.Quantity})`;
      connection.query(callProcedure2, (error, results, fields) => {
      if (error) {
          console.error('Error executing query:', error);
          return;
      }
        
      queryCount++;
      if (queryCount === totalQueries) {
          connection.end();
      }
      results.send("Success")
    });
  }
  console.log('Done save.')
})};