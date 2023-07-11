const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const IndexPageController = require('./controllers/IndexPageController')
const CartController = require('./controllers/CartController')

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ec_group4',
})

app.get('/product', (req, res) => {
  connection.query('SELECT * FROM item, item_picture WHERE item.ItemID = item_picture.ItemID', (err, result) => {
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
  connection.query('SELECT * FROM account', (err, result) => {
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
  connection.query('SELECT UserName, Password FROM account WHERE account.UserName = ? AND account.Password = ?', [UserName, Password], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result.length > 0) {
      console.log(result)
      res.send('Success')
    } else {
      console.log(result)
      res.send('Failed !')
    }
  })
})

app.post('/auth/signup', (req, res) => {
  console.log(req.body)
  const { userName, Password, Name, Birth, Money, Email, Phone, Adress } = req.body
  connection.query('INSERT INTO account (UserName, Password, Name, Birth, Money, Email, Phone, Adress) VALUES (?,?,?,?,?,?,?,?)', [userName, Password, Name, Birth, Money, Email, Phone, Adress], (err, result) => {
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
  connection.query('SELECT * FROM item, item_picture WHERE item.ItemID = item_picture.ItemID and item.ItemID = ?', [ItemID], (err, result) => {
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
app.get('/home/loading', IndexPageController.loading)
app.get('/cart/:ID', CartController.loading)
// app.get('/home/bestseller',IndexPageController.loadingBestSeller)



app.listen(3001, () => {
  console.log('Your server is run on 3001')
})
