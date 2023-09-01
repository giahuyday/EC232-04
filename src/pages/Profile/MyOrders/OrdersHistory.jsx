import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../../store'
import axios from 'axios'
import { OrderHistoryItem } from './OrderHistoryItem'

export default function OrdersHistory() {
  const Account = useUserStore((state) => state.Account)
  const OrdersHistoryStore = useUserStore((state) => state.OrdersHistory)
  const setOrdersHistoryStore = useUserStore((state) => state.setOrdersHistory)

  const [ordersID, setOrdersID] = useState([])
  const [orderDetails, setOrderDetails] = useState([])
  const getAllOrdersHistoryID = async () => {
    const res = await axios.get(`http://localhost:3001/orders/${Account.AccountID}`)
    const orderIDs = res.data.map((order) => order.OrderID)
    console.log('orderIDs', orderIDs)
    setOrdersID(orderIDs)
  }

  useEffect(() => {
    getAllOrdersHistoryID()
  }, [])

  useEffect(() => {
    getAllOrdersHistoryID()
    const details = ordersID.map(async (orderID) => {
      const orderDetail = await axios.get(`http://localhost:3001/orders/${orderID}`)
      console.log('orderDetail', orderDetail)
      setOrdersHistoryStore(orderDetail.data)
    })
    setOrderDetails(details)
  }, [])
  useEffect(() => {
    console.log('OrdersHistoryStore', OrdersHistoryStore)
  }, [])
  return (
    <div className="left flex-1 max-w-[400px] p-4 border overflow-y-auto">
      <p className="text-xl font-medium">Orders History</p>
      {OrdersHistoryStore.map((order, index) => (
        <OrderHistoryItem order={order} details={orderDetails} key={index} />
      ))}
    </div>
  )
}
