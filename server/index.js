const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const IndexPageController = require('./controllers/IndexPageController')
const CartController = require('./controllers/CartController')
const ChartController = require('./controllers/ChartController')

const ProductsController = require('./controllers/Auth/ProductsController')
const UsersController = require('./controllers/Auth/UsersController')

const UserController = require("./controllers/Admin/UserController")
const OrderController = require('./controllers/Admin/OrderController')
const ProController = require('./controllers/Admin/ProductController')
const OrdersController = require('./controllers/OrderController')
const MyProfileController = require('./controllers/Profile/MyProfileController')
const WishListController = require('./controllers/Profile/WishlistController')
app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'dangminh_dbms',
  password: 'dangminh_dbms',
  database: 'dangminh_dbms',
})

connection.connect((error) => {
  if (error) {
    console.error('Lỗi kết nối đến cơ sở dữ liệu:', error)
    return
  }
  console.log('Đã kết nối thành công đến cơ sở dữ liệu MySQL')
})

app.get('/product', (req, res) => {
  connection.query('SELECT * FROM Item', (err, result) => {
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

app.post('/auth/login', UsersController.Login)
app.post('/auth/signup', UsersController.CreateAccount)
app.post('/manage/users/detail/:AccountID', UsersController.GetUserList)
app.post('/admin/users/edit/:AccountID', UsersController.EditUserDetail)
app.post('/auth/order', UsersController.PlaceOrder)

app.get('/detail/:ItemID', ProductsController.ProductsDetail)
app.post('/manage/products/edit/:ItemID', ProductsController.EditProductDetail)
app.post('/manage/products/add', ProductsController.AddProduct)

app.get('/home/loading', IndexPageController.loading)
app.get('/cate/:CateID', UsersController.UserSearch)
app.post('/cartpost/add', CartController.addCart)
app.post('/cartpost/remove', CartController.removeCart)
app.get('/cart/loading/:ID', CartController.loading)
app.get('/cart/discounts', CartController.getDiscounts)
app.post('/cartpost/update', CartController.updateQuantity)

app.get('/chart/loading', ChartController.loading)
app.get('/admin/points/getInfo/:ID', UserController.getInfo)
app.get('/admin/points/getType/:ID', UserController.getType)
// app.get('/home/bestseller',IndexPageController.loadingBestSeller)

// Orders
app.get('/orders/:AccountID', OrdersController.GetAllOrderIDsOfAccount)
app.get('/orders/order/:ID', OrdersController.GetOrderDetailByID)
// End Orders
// Profile
app.put('/profile/edit/:AccountID', MyProfileController.EditProfile)
// End Profile

// Wishlist
app.get('/wishlist/:AccountID', WishListController.GetWishlist)
app.post('/wishlist/addToWishlist', WishListController.addToWishlist)
app.post('/wishlist/removeFromWishlist', WishListController.removeFromWishlist)
// End Wishlist

app.get('/admin/users/findUsers/:value',UserController.findUsers)
app.get('/admin/orders/findOrders/:value',OrderController.findOrders)
app.post('/admin/orders/changeStatus/:value/:status',OrderController.changeStatus)
app.post('/admin/users/lock/:value',OrderController.lock)
app.post('/admin/users/unlock/:value',OrderController.unlock)
app.post('/admin/products/unlock/:value',ProController.unlock)
app.post('/admin/products/lock/:value',ProController.lock)
app.get('/admin/users',UserController.loading)
app.get('/admin/orders',OrderController.loading)
app.get('/admin/products',ProController.loading)

app.listen(3001, () => {
  console.log('Your server is run on 3001')
})
