/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => {
    return (
        <div className="flex gap-2  mt-12">
            <a
                href="/"
                className="font-[Inter] font-semibold text-[24px] leading-2 tracking-[3%] cursor-pointer block"
            >
                Exclusive
            </a>

            <div className="flex gap-[48px] items-center ml-[190px]">
                <a
                    href="#"
                    className="font-medium"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="font-medium"
                >
                    Contact
                </a>
                <a
                    href="#"
                    className="font-medium"
                >
                    About
                </a>
                <a
                    href="#"
                    className="font-medium"
                >
                    Sign Up
                </a>
            </div>
            <div className="flex gap-16 items-center ml-[148px]">
                <div className="flex gap-1 items-center relative">
                    <input
                        type="text"
                        className="outline-none border border-[#E5E5E5] rounded-[4px] w-[400px] h-[40px] px-[16px] text-[14px] leading-[24px] tracking-[3%] focus:border-[#2F80ED] transition-all duration-200 ease-in-out peer select-none"
                        placeholder="What are you looking for ?"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 absolute right-3 text-[#828282] peer-focus:text-[#2F80ED] peer-focus:scale-[1.1] transition-all duration-200 ease-in-out "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Header
