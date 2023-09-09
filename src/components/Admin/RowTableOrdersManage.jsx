
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { formatNumber, formatDate } from '../../helper/dataHelper'
import { Link,useNavigate } from 'react-router-dom'
const RowTableOrdersManage = ({ item }) => {
    const navigate = useNavigate()
    return (
       
        <tr className="border-b dborder-gray-600 hover:bg-gray-100 dhover:bg-gray-700" onClick={()=>{navigate(`/admin/orders/detail/${item.OrderID}`)}} >
           
            <td className="w-4 px-4 py-3"></td>
            <td className="px-4 py-2">
                <span className="bg-primary-100 text-primary-800 text-[#50505f] px-2 py-0.5 rounded dbg-primary-900 dtext-primary-300 text-[15px] font-[600]">
                    {item.OrderID}
                </span>
            </td>

            <td className="px-4 py-2">
                <span className=" text-blue-700 text-sm font-medium px-2 py-0.5 rounded">
                    {item.AccountID}
                </span>
            </td>
            <td className="px-4 py-2 text-[15px] text-[black] font-[500]">
                {item.GuessName}
            </td>

            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white flex">
                <div
                    className={`inline-block w-4 h-4 mr-2 ${item.Status === "Success"
                        ? "bg-green-400"
                        : item.Status === "Pending"
                            ? "bg-yellow-400"
                            : item.Status === "Delivered"
                                ? "bg-blue-600"
                                : item.Status === "Returned"
                                    ? "bg-orange-600"
                                    : item.Status === "Processing"
                                        ? "bg-pink-600"
                                        : "bg-yellow-00"
                        } rounded-full`}

                ></div>
                {item.Status}

            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">
                {formatDate(item.Day)}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">
                {formatNumber(item.Total_Price)}
            </td>
        
        </tr>

    );
};

export default RowTableOrdersManage;
