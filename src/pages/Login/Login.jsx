import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../store'
import './Login.css'
const Login = ({ SetUser }) => {
  const [userName, setUserName] = useState('john_doe')
  const [Password, setPassword] = useState('password1')
  const [data, setData] = useState('')
  const Navigate = useNavigate()

  //Using Zustand store here
  const setAccount = useUserStore((state) => state.setAccount)
  const Account = useUserStore((state) => state.Account)
  //   End Zustand store
  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:3001/auth/login', {
      userName: userName,
      Password: Password,
    }).then((response) => {
      console.log(response.data)
      if (response.data !== 'Failed' && response.data[0].LockStatus!==1) {
        sessionStorage.setItem('AccountID', response.data[0].AccountID)
        sessionStorage.setItem('UserName', response.data[0].UserName)
        sessionStorage.setItem('Name', response.data[0].Name)
        Navigate('/')
        SetUser(response.data[0]) // Truyền thông tin người dùng qua hàm SetUser
        setAccount(response.data[0]) // Truyền thông tin người dùng qua hàm setAccount của Zustand, cứ mỗi lần dùng SetUser thì phải dùng thêm hàm này tương tự
      } else {
        if( response.data[0].LockStatus===1){
          alert('Your Account was locked by admin')
        }
        else{
          alert('Username or Password is incorrect')
        }
      }
    })
  }
  useEffect(() => {
    console.log('This is account', Account)
  }, [Account])

  useEffect(()=> {
    Axios.post(`http://localhost:3001/manage/users/usertype`, {AccountID: sessionStorage.getItem('AccountID')}).then((response) => {
    console.log(response.data)  
    sessionStorage.setItem('UserType',response.data[0])})  
  },[])



  return (
    <section className="bg-gray-50 dark:bg-white" id="Login">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-gray-700 dark:text-black-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Login Your Account</h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900">
                  userName
                </label>
                <input type="userName" name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={userName} onChange={(e) => setUserName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={Password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:bg-red-700" onClick={handleSubmit}>
                Sign in
              </button>
              <p className="text-sm font-light text-black">
                Don’t have an account yet ?{' '}
                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  <Link to="/auth/signup">Sign up</Link>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
