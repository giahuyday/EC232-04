const connection = require('../Database/connecting.js');

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