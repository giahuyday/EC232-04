import React from 'react'
import { Link } from 'react-router-dom'// import moment from 'moment'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
const RowTableProductsManage = ({ item,resetData }) => {
  const handleDetele = () => {
    axios.post(`http://localhost:3001/admin/products/lock/${item.ItemID}`).then(() => resetData())
  }
  const handleUnclock = () => {
    axios.post(`http://localhost:3001/admin/products/unlock/${item.ItemID}`).then(() => resetData())
  }
  return (
    <tr className="border-b dborder-gray-600 hover:bg-gray-100 dhover:bg-gray-700">
      <td className="w-4 px-4 py-3"></td>
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-[#50505f] px-2 py-0.5 rounded dbg-primary-900 dtext-primary-300 text-[15px] font-[600]">{item.ItemID}</span>
      </td>

      <td className="px-4 py-2">
        <span className=" text-blue-700 text-sm font-medium px-2 py-0.5 rounded">{item.Name}</span>
      </td>
      <td className="px-4 py-2 text-[15px] flex text-[black] font-[500] h-full ">{item.Color}
        <div className={`h-[10px] w-[10px] rounded-full bg-[${item.Color}]`}>
        </div>
      </td>

      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">{item.CateID}</td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">{item.Price}</td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">{item.Status}</td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white">
        <div className='flex'>
          <Link to={`/admin/edit/products/${item.ItemID}`} className="w-[80px] h-[40px] rounded-[10px] mr-2 flex justify-center items-center">
            <div className="w-[80px] h-[40px] rounded-[10px] mr-2 bg-[#d0d74a] hover:bg-[#e7eba5] flex justify-center items-center">
              Edit
            </div>
          </Link>
          {item.Status === 'Available' ? (
            <>
              <button className="w-[80px] h-[40px] rounded-[10px] mr-2 bg-[#da2e28] hover:bg-[#df9b9b]" onClick={handleDetele}>
                Sold Out
              </button>
            </>
          ) : (

            <>
              <button className="w-[80px] h-[40px] rounded-[10px] mr-2 bg-[#dacac9] hover:bg-[#df9b9b]" onClick={handleUnclock}>
                Avaiable
              </button>
            </>
          )}
          <ToastContainer />
        </div>
      </td>
    </tr>
  )
}

export default RowTableProductsManage
