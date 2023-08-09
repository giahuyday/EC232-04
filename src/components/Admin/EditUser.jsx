/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
// import { Link } from 'react-router-dom'
import moment from 'moment'

const EditUser = () => {
    const {AccountID} = useParams()
    const [User, setUser] = useState({
        AccountID: AccountID,
        UserName: '',
        Password: '',
        Name: '',
        Birth: '',
        Money: '',
        Email: '',
        Phone: '',
        Adress: '',
    })

    useEffect(() => {
        Axios.post(`http://localhost:3001/manage/users/detail/${AccountID}`, {
            AccountID: AccountID,
        }).then((response) => {
            console.log(response)
            setUser({...User, UserName: response.data[0]?.UserName, Password: response.data[0]?.Password, Name: response.data[0]?.Name, Birth: response.data[0]?.Birth, Money: response.data[0]?.Money,
                                Email: response.data[0]?.Email, Phone: response.data[0]?.Phone, Adress: response.data[0]?.Adress})
        }).catch(err => console.log(err))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post(`http://localhost:3001/admin/users/edit/${AccountID}`, {
            AccountID: AccountID,
            UserName: User.UserName,
            Password: User.Password,
            Name: User.Name,
            Birth: moment(User.Birth).format("YYYY-MM-DD"),
            Money: User.Money,
            Email: User.Email,
            Phone: User.Phone,
            Adress: User.Adress,
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <section className="bg-gray-50 dark:bg-white">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-700 dark:border-gray-700 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:text-black">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Edit User Profile</h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Username
                                </label>
                                <input type="userName" name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 bloc w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={User[0]?.UserName || "name"} required="" value={User.UserName} onChange={(e) => setUser({...User, UserName: e.target.value})} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Your Email
                                </label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={User[0]?.Email || "name@company.com"} required="" value={User.Email} onChange={(e) =>  setUser({...User, Email: e.target.value})}  />
                            </div>
                            <div>
                                <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Password
                                </label>
                                <input type="Password" name="Password" id="Password" placeholder={User[0]?.Password || "Password"} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={User.Password} onChange={(e) =>  setUser({...User, Password: e.target.value})} />
                            </div>
                            <div>
                                <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Your name
                                </label>
                                <input type="Name" name="Name" id="Name" placeholder={User[0]?.Name || "Your name"} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={User.Name} onChange={(e) =>  setUser({...User, Name: e.target.value})}  />
                            </div>
                            <div>
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">
                                    Date of Birth
                                </label>
                                <input type="date" name="date" id="date" placeholder={"Date of Birth" || User[0]?.Birth} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                                w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={moment(User.Birth).format("YYYY-MM-DD")} onChange={(e) =>  setUser({...User, Birth: e.target.value})}  />
                            </div>
                            <div>
                                <label htmlFor="Money" className="block mb-2 text-sm font-medium text-gray-900">
                                    Money
                                </label>
                                <input type="Money" name="Money" id="Money" placeholder={ User[0]?.Money || "Money"} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={User.Money} onChange={(e) =>  setUser({...User, Money: e.target.value})} />
                            </div>
                            <div>
                                <label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900">
                                    Phone number
                                </label>
                                <input type="Phone" name="Phone" id="Phone" placeholder={User[0]?.Phone || "Phone Number"} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={User.Phone} onChange={(e) =>  setUser({...User, Phone: e.target.value})}  />
                            </div>
                            <div>
                                <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900">
                                    Address
                                </label>
                                <input type="Address" name="Address" id="Address" placeholder={ User[0]?.Adress || "Address"} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={User.Adress} onChange={(e) =>  setUser({...User, Adress: e.target.value})} />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium
                        rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                                id="sign-up-btn"
                                onClick={handleSubmit}
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditUser
