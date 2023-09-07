import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import { useUserStore } from '../../../store'
import OrdersHistory from './OrdersHistory'
import dayjs from 'dayjs'
const MyOrders = () => {
  return (
    <>
      <div className="flex h-full max-h-[80vh] overflow-auto gap-10 flex-1">
        <OrdersHistory />
        <Orders />
      </div>
    </>
  )
}

function Orders() {
  const currentSelectedOrder = useUserStore((state) => state.currentSelectedOrder)

  return (
    <div className="righ flex-shrink-0 w-[70%] bg-[#F7F2EC] p-4 rounded-t-md">
      <div className="top">
        <div className="flex items-center">
          <p className="text-2xl font-medium">Orders of {currentSelectedOrder?.GuessName}</p>
          {/* Stars here */}
        </div>
        {currentSelectedOrder?.map((order) => {
          return <OrderItem order={order} />
        })}
      </div>
      {/* <OrderDetails /> */}
    </div>
  )
}

const OrderDetails = () => {
  const currentSelectedOrder = useUserStore((state) => state.currentSelectedOrder)
  const { OrderID, GuessName, Delivery_Address, Day, Phone, note, Total_Price, Status, AccountID, ShipFee, PointUsed } = currentSelectedOrder || {}
  const totals = currentSelectedOrder?.reduce((acc, cur) => acc + cur.Price, 0)
  return (
    <div className="font-serif rounded-b-md  bg-[#F7F2EC] p-4 -m-4">
      <p className="font-serif text-xl font-medium">Orders Details</p>
      <div className="font-serif grid lg:grid-cols-[2fr_2fr] grid-cols-1">
        {/* <div className="font-serif ">Phone number:  </div>
        <div className="font-mono text-[20px]">{Phone}</div>

        <div className="font-serif ">Delivery Address</div>
        <div className="font-mono text-[20px]">{Delivery_Address}</div>

        <div className="font-serif ">Point Used: </div>
        <div className="font-mono text-[20px]">{PointUsed}</div>

        <hr className="font-serif border-gray-400 my-2 " />
        <hr className="font-serif border-gray-400 my-2 " /> */}

        <div className="font-serif ">Total</div>
        <div className="font-mono text-[20px] text-right ">USD ${totals}</div>
      </div>
    </div>
  )
}

function OrderItem({ order }) {
  const currentSelectedOrder = useUserStore((state) => state.currentSelectedOrder)
  const { OrderID, GuessName, Delivery_Address, Day, Phone, note, Total_Price, Status: currentStatus, AccountID, ShipFee, PointUsed } = currentSelectedOrder || {}

  const { Category, Description, ItemID, Name, Pic, Price, Producer, Status } = order || {}
  useEffect(() => {
    console.log('currentSelectedOrder', currentSelectedOrder)
  }, [])
  return (
    <div className="flex gap-8 items-center">
      <div className="rounded-3xl overflow-hidden">
        <img src={Pic} alt="" className="w-[10rem] h-[10rem] object-contain overflow-hidden rounded-md" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full gap-2 border-b">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span>#{ItemID}</span>
            </div>
            <p className="p">{Name}</p>
            <div className="">Category:</div>
          </div>
          <div className="flex flex-col justify-center text-right">
            <p>{Description}</p>
            <p>${Price}</p>
            <p>{Category}</p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] w-full">
          <div className="">Manufature: </div>
          <div className="text-right">{Producer}</div>
          <div className="">Status: </div>
          <div className="text-right">{Status}</div>
        </div>
      </div>
    </div>
  )
}

export default MyOrders
