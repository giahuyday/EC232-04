/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { create } from 'zustand'
import omit from 'lodash-es/omit'
export const useLoginStore = create((set) => ({
  isLoggedIn: false,
  userName: '',
  setIsLoggedIn: (newState) => set((state) => ({ ...state, isLoggedIn: newState })),
  setUserNameStore: (newUserName) => set((state) => ({ ...state, userName: newUserName })),
}))
const Login = () => {
  const [userName, setUserName] = useState('')
  const [Password, setPassword] = useState('')
  const Navigate = useNavigate()
  const setUserNameInStore = useLoginStore((state) => state.setUserNameStore)
  const setIsLoggedIn = useLoginStore((state) => state.setIsLoggedIn)
  const handleLogin = () => {
    Axios.post('http://localhost:3001/auth/login', {
      userName: userName,
      Password: Password,
    }).then((response) => {
      console.log(response)
      if (response.data === 'Success') {
        setUserNameInStore(userName)
        setIsLoggedIn(true)
        Navigate('/')
      } else {
        alert('Login Failed !')
      }
    })
  }

  return (
    <section class="bg-gray-50 dark:bg-white">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-gray-700 dark:text-black-800">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Login Your Account</h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="userName" class="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input type="userName" name="userName" id="userName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={userName} onChange={(e) => setUserName(e.target.value)} />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={Password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" class="text-sm font-medium text-primary-100 hover:underline dark:text-primary-100">
                  Forgot password?
                </a>
              </div>
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:bg-red-700" onClick={handleLogin}>
                Log in
              </button>
              <p class="text-sm font-light text-black">
                Don’t have an account yet?{' '}
                <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
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
