
import React from 'react'
import { AiOutlineHome, AiOutlineTablet, AiOutlineUser } from "react-icons/ai"
import { CiDiscount1 } from "react-icons/ci"
import { Link } from 'react-router-dom'

const HeaderAdmin = ({ children }) => {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <div className='flex justify-center'>
                <div className='h-[100px] w-[1440px] flex items-center'>
                    <div class="flex items-center justify-center h-20 w-[300px] shadow-md">
                        <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
                    </div>
                </div>
            </div>
            <div className='absolute h-[2px] w-[100vw] bg-[black] left-0'></div>
            <div className='flex h-[calc(100%_-_100px)]'>
                <div className='h-[100%] w-[300px] flex justify-center'>
                    <div class=" flex flex-row bg-gray-100">
                        <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                            <ul class="flex flex-col py-4">
                                <li>
                                    <Link to="/admim" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><AiOutlineHome></AiOutlineHome></span>
                                        <span class="text-sm font-medium">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/products" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><AiOutlineTablet></AiOutlineTablet></span>
                                        <span class="text-sm font-medium">Products</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/users" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><AiOutlineUser></AiOutlineUser></span>
                                        <span class="text-sm font-medium">Users</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><CiDiscount1></CiDiscount1></span>
                                        <span class="text-sm font-medium">Voucher</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-chat"></i></span>
                                        <span class="text-sm font-medium">Advansements</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
                                        <span class="text-sm font-medium">Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
                                        <span class="text-sm font-medium">Notifications</span>
                                        <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                                        <span class="text-sm font-medium">Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='h-[100%] w-[2px] bg-[black]'></div>
                <div className='bg-[white] h-[100%] w-[calc(100%_-_302px)]'>
                    {/* <div className='bg-[pink] h-[80px] border-solid border-[black] border-b-[2px]'>
                        
                    </div>
                    <div className='bg-[green] h-[calc(100%_-_180px)]'>
                        
                    </div>
                    <div className='bg-[red] h-[100px] border-solid border-[black] border-t-[2px]'>
                        
                    </div> */}
                    {children}
                </div>
            </div>

            <div className></div>
        </div>
    )
}

export default HeaderAdmin
