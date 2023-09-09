import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage/IndexPage.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/Sign Up/SignUp.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HeaderAdmin from './components/Admin/HeaderAdmin.jsx'
import Detail from './pages/Detail/Detail.jsx'
import Cart from './pages/Cart/Cart.jsx'
import CheckOut from './pages/CheckOut/CheckOut.jsx'
import ProductsManage from './pages/Admin/Manage/Products.jsx'
import UsersManage from './pages/Admin/Manage/Users.jsx'
import EditProduct from './components/Admin/EditProduct.jsx'
import AddProducts from './components/Admin/AddProducts.jsx'
import EditUser from './components/Admin/EditUser.jsx'
import AddUser from './components/Admin/AddUser.jsx'
import Profile from './pages/Profile/Profile.jsx'
import ChartManage from './pages/Chart/Chart.jsx'
import Discount from './pages/Admin/Discount.jsx'
import PointsManage from './pages/Admin/Manage/Points.jsx'
import Page404 from './components/404/error404.jsx'
import { useState } from 'react'
import OrdersManage from './pages/Admin/Manage/Orders.jsx'
import OrdersDetail from './pages/Admin/Manage/OrdersDetail.jsx'
import SearchByCate from './components/Search/SearchByCate.jsx'
import SearchByKey from './components/Search/SearchByKey.jsx'
function App() {
  const [users, SetUser] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthLayout SetUser={SetUser} />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path='/*' element={<MainLayout users={users} />} />
      </Routes>
    </BrowserRouter>
  )
}

function MainLayout({ users }) {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/detail/:ItemID" element={<Detail />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<Profile users={users} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:CateID" element={<SearchByCate />} />
          <Route path="/search/" element={<SearchByKey />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/" element={<IndexPage />} />
          <Route path="*" element={<Page404 />} />
          {/* <Route path="/manage/products" element={<ProductsManage />} />
          <Route path="/manage/users" element={<UsersManage />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

function AuthLayout({ SetUser }) {
  return (
    <Routes>
      <Route path="/login" element={<Login SetUser={SetUser} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
function AdminLayout() {
  return (
    <>
      <div className="">
        <HeaderAdmin>
          <Routes>
            <Route path="/products" element={<ProductsManage />} />
            <Route path="/discounts" element={<Discount />} />
            <Route path="/chart" element={<ChartManage />} />
            <Route path="/edit/products/:ItemID" element={<EditProduct />} />
            <Route path="/products/addnew" element={<AddProducts />} />
            <Route path="/orders/detail/:ID" element={<OrdersDetail />} />
            <Route path="/users" element={<UsersManage />} />
            <Route path="/edit/users/:AccountID" element={<EditUser />} />
            <Route path="/users/addnew" element={<AddUser />} />
            <Route path="/points" element={<PointsManage />} />
            <Route path="/orders" element={<OrdersManage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </HeaderAdmin>
      </div>
    </>
  )
}

export default App
