
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


const RowTableUsersManage = ({ item }) => {
    return (
        <tr className="border-b dborder-gray-600 hover:bg-gray-100 dhover:bg-gray-700">
            <td className="w-4 px-4 py-3"></td>
            <td className="px-4 py-2">
                <span className="bg-primary-100 text-primary-800 text-[#50505f] px-2 py-0.5 rounded dbg-primary-900 dtext-primary-300 text-[15px] font-[600]">
                    {item.AccountID}
                </span>
            </td>

            <td className="px-4 py-2">
                <span className=" text-blue-700 text-sm font-medium px-2 py-0.5 rounded">
                    {item.UserName}
                </span>
            </td>
            <td className="px-4 py-2 text-[15px] text-[black] font-[500]">
                {item.Name}
            </td>

            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">
                {item.Phone}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">
                {item.Email}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">
                {item.Adress}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">
                <div className="flex">
                    <Link to={`/edit/${item.AccountID}`} className="w-[80px] h-[40px] rounded-[10px] mr-2 bg-[#d0d74a] hover:bg-yellow-200" >
                        <div className="w-[80px] h-[40px] rounded-[10px] mr-2 bg-[#d0d74a] hover:bg-[#e7eba5] flex justify-center items-center">
                            Edit
                        </div>
                    </Link>
                    <button className="w-[80px] h-[40px] rounded-[10px] mr-2 bg-[#da2e28] hover:bg-[#df9b9b]" >
                        Delete
                    </button>
                    <ToastContainer />
                </div>
            </td>
        </tr>
    );
};

export default RowTableUsersManage;
