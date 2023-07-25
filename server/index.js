const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const IndexPageController = require('./controllers/IndexPageController')
const CartController = require('./controllers/CartController')
const ChartController = require('./controllers/ChartController')

app.use(cors())
app.use(express.json())


const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'dangminh_dbms',
  password: 'dangminh_dbms',
  database: 'dangminh_dbms',
});


connection.connect((error) => {
  if (error) {
    console.error('Lỗi kết nối đến cơ sở dữ liệu:', error);
    return;
  }
  console.log('Đã kết nối thành công đến cơ sở dữ liệu MySQL');
});

app.post('/product', (req, res) => {
  connection.query('SELECT * FROM Item, Item_Picture WHERE Item.ItemID = Item_Picture.ItemID', (err, result) => {
    if (err) {
      console.log('Fetch Failed !')
    } else {
      // console.log(rows[0])
      console.log(result)
      res.send(result)
    }
  })
})

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM Account', (err, result) => {
    if (err) {
      console.log('Fetch Failed !')
    } else {
      // console.log(rows[0])
      console.log(result)
      res.send(result)
    }
  })
})

app.post('/auth/login', (req, res) => {
  console.log(req.body)
  const { UserName, Password } = req.body
  connection.query('SELECT UserName, Password FROM Account WHERE Account.UserName = ? AND Account.Password = ?', [UserName, Password], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result.length > 0) {
      console.log(result)
      res.send('Failed')
    } else {
      console.log(result)
      res.send('Success')
    }
  })
})

app.post('/auth/signup', (req, res) => {
  console.log(req.body)
  const { userName, Password, Name, Birth, Money, Email, Phone, Adress } = req.body
  connection.query('CALL AddAccount(?,?,?,?,?,?,?,?)', [userName, Password, Name, Birth, Money, Email, Phone, Adress], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send('Register Accepted')
    }
  })
})

app.post('/detail/:ItemID', (req, res) => {
  console.log(req.body)
  const ItemID = req.params.ItemID
  connection.query('SELECT * FROM Item, Item_Picture WHERE Item.ItemID = ? AND Item.ItemID = Item_Picture.ItemID', [ItemID], (err, result) => {
    if (err) {
      console.log(err)
      res.send('Failed !')
    } else {
      if (result.length > 0) {
        console.log(result)
        res.send(result)
      } else {
        console.log(result)
        res.send('Failed !')
      }
    }
  })
})

app.post('/manage/products/edit/:ItemID', (req, res) => {
  console.log(req.body)
  const ItemID = req.params.ItemID
  const Name = req.body.Name
  const Price = req.body.Price
  const Description = req.body.Description
  const Color = req.body.Color
  const Status = req.body.Status
  const CateID = req.body.CateID
  const ProDucerID = req.body.ProDucerID
  console.log(Price)
  connection.query('UPDATE Item SET Item.Name=?, Item.Price=?, Item.Description=?, Item.Color=?, Item.Status=?, Item.CateID=?, Item.ProDucerID=? WHERE ItemID = ?', [Name, Price, Description, Color, Status, CateID, ProDucerID, ItemID], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.send('Update Product Accepted')
    }
  })
})

app.post('/manage/products/add', (req, res) => {
  console.log(req.body)
  const Name = req.body.Name
  const Price = req.body.Price
  const Description = req.body.Description
  const Color = req.body.Color
  const Status = req.body.Status
  const CateID = req.body.CateID
  const ProDucerID = req.body.ProDucerID
  const Content = req.body.Content
  // console.log(Price)
  connection.query('CALL AddItem(?,?,?,?,?,?,?)', [Name, Price, Description, Color, Status, CateID, ProDucerID], (err, results) => {
    if (err) {
      console.log(err)
    }
    const result = Object.values(results[0][0])[0];

    if (results === 0) {
        console.log('Category or producer is wrong.');
        } else  {
          console.log(results)
          console.log('New Item created. New id is: ',result);
          connection.query('CALL Add_ItemPicture(?,?)', [result, Content], (err, result) => {
            if (err) {
              console.log(err)
            } else {
              res.send('Update Product Accepted')
            }
          })
        }
    // if (result===0){
    //   console.log("Add Failed")
    // }
    //  else {
    //   console.log("Add Product Completed")
    //   res.send('Update Product Accepted')
    // }
  })
})

// /detail/lastestItem

app.post('/manage/products/addImg', (req, res) => {
  console.log(req.body)
  const ItemID = req.body.ItemID
  const Content = req.body.Content
  console.log(Content)
  connection.query('CALL Add_ItemPicture(?,?)', [ItemID, Content], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send('Update Product Accepted')
    }
  })
})

app.post('/manage/users/detail/:AccountID', (req, res) => {
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
})

app.post('/admin/users/edit/:AccountID', (req, res) => {
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
})

app.get('/home/loading', IndexPageController.loading)
app.get('/cart/:ID', CartController.loading)
app.post('/cartpost/:ID', CartController.updateQuantity)
app.get('/chart/loading', ChartController.loading)
// app.get('/home/bestseller',IndexPageController.loadingBestSeller)



app.listen(3001, () => {
  console.log('Your server is run on 3001')
})
