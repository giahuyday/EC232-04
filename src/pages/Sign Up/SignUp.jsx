/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
const SignUp = () => {
  const navigate = useNavigate()
  const [userName, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [Name, setName] = useState('')
  const [Birth, setBirth] = useState('')
  const [Money, setMoney] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Adress, setAddress] = useState('')
  const handleSubmit = () => {
    Axios.post('http://localhost:3001/auth/signup', {
      userName: userName,
      Password: Password,
      Name: Name,
      Birth: moment(Birth).format("YYYY-MM-DD"),
      Money: Money || 0,
      Email: Email,
      Phone: Phone || '',
      Adress: Adress || '',
    }).then((response) => {
      console.log(response)
      if(response.data === 'Register Accepted'){
        navigate("/")
      }
    })
  }

  return (
    <section className="bg-gray-50 dark:bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-700 dark:border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:text-black">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Create an account</h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Username
                </label>
                <input type="userName" name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 bloc w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" value={userName} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your Email
                </label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={Email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <input type="Password" name="Password" id="Password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={Password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your name
                </label>
                <input type="Name" name="Name" id="Name" placeholder="Your name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={Name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">
                  Date of Birth
                </label>
                <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={moment(Birth).format("YYYY-MM-DD")} onChange={(e) => setBirth(e.target.value)} />
              </div>
              <div>
                <label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900">
                  Phone number
                </label>
                <input type="Phone" name="Phone" id="Phone" placeholder="Phone Number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={Phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900">
                  Address
                </label>
                <input type="Address" name="Address" id="Address" placeholder="Address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={Adress} onChange={(e) => setAddress(e.target.value)} />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-black-100">
                    I accept the
                  </label>
                  <a className="font-medium text-primary-600 hover:underline" href="#">
                    Terms and Conditions
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium
                        rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                id="sign-up-btn"
                onClick={handleSubmit}
              >
                Create an account
              </button>
              <p className="text-sm font-light text-black-100">
                Already have an account ?
                <Link to="/auth/login" path="/auth/login" className="font-medium text-primary-600 hover:underline hover:text-black dark:text-primary-500">
                  <span></span> Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
