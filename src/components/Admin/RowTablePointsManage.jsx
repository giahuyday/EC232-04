
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { formatPoints } from "../../helper/dataHelper";
import axios from "axios";


const RowTablePointsManage = ({ item }) => {
    const [typeClient,setType]= useState()
    axios.get(`http://localhost:3001/admin/points/getType/${item.AccountID}`).then((result)=>setType(result.data[0] [0]. Type))
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
                {formatPoints( item.Money)}
            </td>
            <td className="px-4 py-2 text-[15px] text-[black] font-[500]">
            <div
                  className={`inline-block w-4 h-4 mr-2 ${
                     typeClient === "Normal"
                        ? "bg-green-400"
                        : typeClient === "Vip"
                        ? "bg-yellow-400"
                        : typeClient === "Loyal"
                        ? "bg-pink-600"
                       
                        : "bg-yellow-00"
                  } rounded-full`}
                  
               ></div>
               {typeClient}
            </td>

           
           
        </tr>
    );
};

export default RowTablePointsManage;
