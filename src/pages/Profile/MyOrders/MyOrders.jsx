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
    <div className="righ flex-shrink-0 w-[70%] bg-gray-50 p-4">
      <div className="top">
        <div className="flex items-center">
          <p className="text-xl font-medium">Orders of {currentSelectedOrder?.GuessName}</p>
          {/* Stars here */}
        </div>
        {Array.from({ length: 1 }, (_, i) => (
          <OrderItem />
        ))}
      </div>
      <OrderDetails />
    </div>
  )
}

const OrderDetails = () => {
  return (
    <div className="rounded-md  bg-gray-50 p-4 -m-4">
      <p className="text-xl font-medium">Orders Details</p>
      <div className="grid lg:grid-cols-[4fr_2fr] grid-cols-1">
        <div className="">Phone number:</div>
        <div className="">+84 123 456 789</div>

        <div className="">Delivery Address</div>
        <div className="">USA,127 E 21st ST, New York, NY 10010</div>

        <div className="">Payment Method</div>
        <div className="">Credit Card</div>

        <hr className="border-gray-400 my-2 " />
        <hr className="border-gray-400 my-2 " />

        <div className="">Total</div>
        <div className="">USD $1,788</div>
      </div>
    </div>
  )
}

function OrderItem() {
  const currentSelectedOrder = useUserStore((state) => state.currentSelectedOrder)
  const { OrderID, GuessName, Delivery_Address, Day, Phone, note, Total_Price, Status, AccountID, ShipFee, PointUsed } = currentSelectedOrder || {}
  useEffect(() => {
    console.log('currentSelectedOrder', currentSelectedOrder)
  }, [])
  return (
    <div className="flex gap-8 items-center">
      <div className="rounded-3xl overflow-hidden">
        <img src="https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg" alt="" className="w-[10rem] h-[10rem] object-contain overflow-hidden" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full gap-2 border-b">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="">{GuessName}</p>
              <span>#{OrderID}</span>
            </div>
            <div className="p">Boat-neck sleeveless middi dress</div>
            <div className="">Phone: {Phone}</div>
            <div className="">1 Item</div>
          </div>
          <div className="flex flex-col justify-center text-right">
            <p>{dayjs(Day).format('DD/MM/YYYY hh:mm')}</p>
            <p>
              ${Total_Price} (Shipping fee : {ShipFee})
            </p>
            <p>VAT included</p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] w-full">
          <div className="">Note*: {note}</div>
          <div className="text-right">Shipping to: {Delivery_Address}</div>
          <div className="">Status: {Status}</div>
          <div className="text-right">PointUsed: {PointUsed}</div>
        </div>
      </div>
    </div>
  )
}

export default MyOrders
