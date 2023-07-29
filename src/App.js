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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

function MainLayout() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/detail/:ItemID" element={<Detail />} />
          <Route path="/cart/:ID" element={<Cart />} />
          <Route path="/chart" element={<ChartManage />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/manage/products" element={<ProductsManage />} />
          <Route path="/manage/users" element={<UsersManage />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

function AuthLayout() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
function AdminLayout() {
  return (
    <>
    <div className="">
      <HeaderAdmin>
        <Routes>
          <Route path="/products" element={<ProductsManage/>} />
          <Route path="/edit/products/:ItemID" element={<EditProduct />} />
          <Route path="/products/addnew" element={<AddProducts/>}/>
          <Route path="/users" element={<UsersManage/>} />
          <Route path="/edit/users/:AccountID" element={<EditUser/>} />
          <Route path="/users/addnew" element={<AddUser/>}/>
        </Routes>
    </HeaderAdmin>
    </div>
    </>
  )
}

export default App
