/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search/Search'
import SearchResultsList from './Search/SearchResultList'
import { useState } from 'react'
import { useUserStore } from '../store'

const Header = () => {
  const [results, setResults] = useState([])
  const cartItemsCount = useUserStore((state) => state.cartItemsCount)
  const Username = sessionStorage.getItem('UserName')
  const navigate = useNavigate()
  const handleLogout = () => {
    // sessionStorage.clear()
    // console.log(sessionStorage.getItem('UserName'))
    sessionStorage.clear()
    navigate('/')
  }
  const [isReloaded, setIsReloaded] = useState(false);
  const handleReload = () => {
    if (!isReloaded) {
      window.location.reload(); // Gọi hàm để làm tải lại trang
    } else {
      setIsReloaded(false); // Đánh dấu là đã nhấn lần đầu
    }
  };
  const handleCart = () => {
    if (Username === null || Username === undefined) {
      // window.location.href = 'auth/login'
      navigate('/auth/login')
    } else {
      // window.location.href = '/cart'
      navigate('/cart')
    }
  }

  return (
    <header className="px-4 lg:px-12">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between mx-auto mt-12">
          <Link to={'/'} className="font-[Inter] lg:-ml-6  font-semibold text-[24px] leading-2 tracking-[3%] cursor-pointer block">
            Exclusive
          </Link>
          <div className="flex items-center">
            <Link to="/" className="font-medium px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              Home
            </Link>
            <Link to="/contact" className="font-medium px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              Contact
            </Link>
            <Link to="/about" className="font-medium px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              About
            </Link>
            {Username == "admin1" ? (
              <Link to="/admin" className="font-medium px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              Admin manage
            </Link>) : (<div>
              
            </div>)}
            
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-1 items-center relative">
              <Search setResults={setResults}/>
              <Link to="/search/" onClick={handleReload}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={2} stroke="currentColor" className="w-6 h-6 absolute top-3 bottom-2 right-3 text-[#828282] peer-focus:text-[#2F80ED] peer-focus:scale-[1.1] transition-all duration-200 ease-in-out cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </Link> 
            </div>
            <div></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer ml-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <button onClick={handleCart} className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer hover:text-[#db4444]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <span className="absolute top-3 -right-[.4rem] w-4 h-4 rounded-full inline-flex items-center justify-center bg-red-500 text-white text-[12px] font-medium p-[10px]">{cartItemsCount}</span>
            </button>
            <Link to={'/profile'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
            <div className="flex items-center md:order-2">
              {Username === null || Username === undefined ? (
                <div>
                  <Link to="auth/login" className="text-gray-800 da:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 da:hover:bg-gray-700 focus:outline-none da:focus:ring-gray-800 hover:border-[2px] border-[2px] hover:border-blue-500">
                    Login
                  </Link>
                  <Link to="auth/signup" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 da:bg-blue-600 da:hover:bg-blue-700 focus:outline-none da:focus:ring-blue-800">
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div>
                  <b className="text-gray-800 da:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 da:hover:bg-gray-700 focus:outline-none da:focus:ring-gray-800">Hi,{Username}</b>
                  <button onClick={handleLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 da:bg-blue-600 da:hover:bg-blue-700 focus:outline-none da:focus:ring-blue-800">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <SearchResultsList results={results} />
        </div>
      </nav>
    </header>
  )
}

export default Header
