import React, { memo } from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import { useUserStore } from '../../../store'

const OrderHistoryItem = ({ order, onClick }) => {
  const { OrderID, GuessName, Delivery_Address, Day, Phone, note, Total_Price, Status, AccountID, ShipFee, PointUsed } = order || {}
  console.log('🚀 ~ OrderHistoryItem ~ order:', order)

  return (
    <>
      <div className="flex justify-between border-b gap-2 py-4 hover:bg-[#dad1d1] hover:duration-75 cursor-pointer active:scale-[.98]" onClick={onClick}>
        <div className="left flex flex-col gap-[2px] ml-auto flex-1">
          <span className="">Order number </span>
          <p className="font-semibold text-xl"># {OrderID}</p>
          {/* <p className="font-medium  text-gray-500 mb-2"> 1 Items</p> */}
        </div>
        <div className="right flex flex-col flex-1">
          <div className="flex gap-2 text-blue-500 items-center">
            <FaTruckMoving />
            {Status}
          </div>
          <p className="font-semibold text-xl">${Total_Price}</p>
        </div>
      </div>
    </>
  )
}
export default OrderHistoryItem
