import React, { useState, useEffect } from 'react'
import RowTableOrdersManage from '../../../components/Admin/RowTableOrdersManage'
import Axios from 'axios'

const OrdersManage = () => {
  const [Users, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    getOrders()
  }, [])
  const movePage = (move) =>{
    if(currentPage===1&&move===-1) return;
    setCurrentPage(currentPage+move)
  }
  
  const findOrders = (value) => {
    if(value==='') {
        getOrders()
        return
    }
    Axios.get(`http://localhost:3001/admin/orders/findOrders/${value}`).then((response) => {
      setOrders(response.data)
      // console.log(response.data)
    })
  }
  const getOrders = () => {
    Axios.get('http://localhost:3001/admin/orders').then((response) => {
      setOrders(response.data)
    })
  }
  return (
    <>
      <div className=' h-[80px] border-solid border-[black] border-b-[2px] flex justify-between'>
        <div className='h-[80px]  text-[24px] font-[600] mt-[10px] ml-[20px]'>
          List User
        </div>
        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3 mr-[50px]">
          <button type="button" className="flex bg-gray-300 items-center justify-center px-4 py-2 border-[1px] hover:bg-gray-100 text-sm font-medium text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dbg-primary-600 dhover:bg-primary-700 focus:outline-none dfocus:ring-primary-800">
            <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
            Add new user
          </button>
         
          <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dfocus:ring-gray-700 dbg-gray-800 dtext-gray-400 dborder-gray-600 dhover:text-white dhover:bg-gray-700">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Export
          </button>
        </div>
      </div>
      <div className='bg-[white] h-[calc(100%_-_180px)]'>
        <section className="bg-white dbg-gray-900 py-3 sm:py-5">
          <div className="px-4 mx-auto max-w-screen-2xl lg:px-12 mt-[10px]">
            <div className="relative overflow-hidden bg-white shadow-md dbg-gray-800 ">
              <div className="h-[40px] w-[500px] mb-[20px]">
                <input type="text" placeholder='Enter Find Users By AccountID,Username or Phone' onChange={(e)=>{findOrders(e.target.value)}} className='p-[5px] h-[40px] w-[500px] bg-gray-200 rounded-[10px] border-[1px] border-[gray]' />
              </div>
              <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dtext-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dbg-gray-700 dtext-gray-400">
                <tr>
                  <th scope="col" className="p-4"></th>
                  
                  <th scope="col" className="px-4 py-3">
                  OrderID
                  </th>
                  <th scope="col" className="px-4 py-3 w-[150px]">
                  AccountID
                  </th>
                  <th scope="col" className="px-4 py-3">
                  GuessName
                  </th>

                  <th scope="col" className="px-4 py-3">
                  Status
                  </th>
                  <th scope="col" className="px-4 py-3">
                  Day
                  </th>
                  <th scope="col" className="px-4 py-3">
                  Total_Price
                  </th>
           
                </tr>
              </thead>
              <tbody>
                {Users.slice((currentPage-1)*5,5*currentPage).map((item) => {
                  return <RowTableOrdersManage item={item} key={item.AccountID} />
                })}
             
              </tbody>
            </table>
          </div>

            </div>
          </div>
        </section>
      </div>
      <div className='h-[100px]  border-solid border-[black] border-t-[2px] flex justify-end '>
        <nav className="flex flex-col items-start p-4 space-y-3 md:flex-row md:items-center md:space-y-0 mr-[100px]" aria-label="Table navigation">
          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <button onClick={()=>movePage(-1)} className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                <span className="sr-only">Previous</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          
              {currentPage === 1 ? (
                <>
                  <li>
                    <button onClick={()=>setCurrentPage(1)} className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-black font-[600] bg-gray-300 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                      1
                    </button>
                  </li>
                  <li>
                    <button onClick={()=>setCurrentPage(2)} className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                      2
                    </button>
                  </li>
                  <li>
                    <button onClick={()=>setCurrentPage(3)}  className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                      3
                    </button>
                  </li>
                  <li>
                    <button onClick={()=>setCurrentPage(4)}  className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                      4
                    </button>
                  </li>
                </>
              ) : (
                <>
                 <li>
                    <button onClick={()=>movePage(-1)} className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                      {currentPage-1}
                    </button>
                  </li>
                  <li>
                    <button onClick={()=>movePage(0)} className="flex items-center justify-center  px-3 py-2 text-sm leading-tight text-black font-[600] bg-gray-300 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                      {currentPage}
                    </button>
                  </li>
                  <li>
                    <button onClick={()=>movePage(1)} className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                      {currentPage+1}
                    </button>
                  </li>
                  <li>
                    <button onClick={()=>movePage(2)} className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                      {currentPage+2}
                    </button>
                  </li>
                </>
              )}
            <li>
              <button onClick={()=>movePage(1)} className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dbg-gray-800 dborder-gray-700 dtext-gray-400 dhover:bg-gray-700 dhover:text-white">
                <span className="sr-only">Next</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>

  )
}

export default OrdersManage
