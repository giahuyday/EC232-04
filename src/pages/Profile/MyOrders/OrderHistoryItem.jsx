import React, { memo } from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import { useUserStore } from '../../../store'

const OrderHistoryItem = ({ order, onClick }) => {
  return (
    <>
      <div className="flex justify-between border-b gap-2 py-4 hover:bg-[#dad1d1] hover:duration-75 cursor-pointer active:scale-[.98]" onClick={onClick}>
        <div className="left flex flex-col gap-[2px] ml-auto flex-1">
          <p className="font-bold">{order?.OrderID}</p>
          <p className="font-bold">USD {order?.Total_Price}</p>
          <p className="font-medium  text-gray-500 mb-2"> 1 Items</p>
        </div>
        <div className="right flex flex-col flex-1">
          <div className="flex gap-2 text-blue-500 items-center">
            <FaTruckMoving />
            {order?.Status}
          </div>
          <div className="flex gap-2 text-blue-500">0-0-0-0</div>
        </div>
      </div>
    </>
  )
}
export default memo(OrderHistoryItem)
