// create App.js file
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage/IndexPage.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/Sign Up/SignUp.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Detail from './pages/Detail/Detail.jsx'
function App() {
    return (
        // <SignUp/>
        // <Login/>
        <BrowserRouter>
            <div className='main-content'>
                <Header />
                    <Routes>
                        <Route path="/" element={<IndexPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/detail" element={<Detail />} />
                    </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
