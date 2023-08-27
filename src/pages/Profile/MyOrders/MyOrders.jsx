import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'

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

const OrderHistoryItem = () => {
  return (
    <div className="flex justify-between border-b gap-2 py-4">
      <div className="left flex flex-col gap-[2px] ml-auto flex-1">
        <p className="font-bold">#481293</p>
        <p className="font-bold">USD $11,250.00</p>
        <p className="font-medium  text-gray-500 mb-2"> 5 Items</p>
      </div>
      <div className="right flex flex-col flex-1">
        <div className="flex gap-2 text-blue-500 items-center">
          <FaTruckMoving />
          Inprogress
        </div>
        <div className="flex gap-2 text-blue-500">0-0-0-0</div>
      </div>
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
function Orders() {
  return (
    <div className="righ flex-shrink-0 w-[70%] bg-gray-50 p-4">
      <div className="top">
        <div className="flex items-center">
          <p className="text-xl font-medium">Orders #481293 (4)</p>
          {/* Stars here */}
        </div>
        {Array.from({ length: 3 }, (_, i) => (
          <OrderItem />
        ))}
      </div>
      <OrderDetails />
    </div>
  )
}

function OrdersHistory() {
  return (
    <div className="left flex-1 max-w-[400px] p-4 border overflow-y-auto">
      <p className="text-xl font-medium">Orders History</p>
      {Array.from({ length: 6 }, (_, i) => (
        <OrderHistoryItem />
      ))}
    </div>
  )
}

function OrderItem() {
  return (
    <div className="flex gap-8 items-center">
      <div className="rounded-3xl overflow-hidden">
        <img src="https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg" alt="" className="w-[10rem] h-[10rem] object-contain overflow-hidden" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full gap-2 border-b">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="">Valentino </p>
              <span> No8571192</span>
            </div>
            <div className="p">Boat-neck sleeveless middi dress</div>
            <div className="">Color: 0 Black * Size: (S) Small</div>
            <div className="">1 Item</div>
          </div>
          <div className="flex flex-col justify-center text-right">
            <p>$1,788</p>
            <p>VAT included</p>
          </div>
        </div>
        <div className="">Shipping from: VietNam</div>
      </div>
    </div>
  )
}

export default MyOrders
