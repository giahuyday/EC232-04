import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../../store'
import axios from 'axios'
import OrderHistoryItem from './OrderHistoryItem'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function OrdersHistory() {
  const Account = useUserStore((state) => state.Account)
  const OrdersHistoryStore = useUserStore((state) => state.OrdersHistory)
  const setOrdersHistoryStore = useUserStore((state) => state.setOrdersHistory)
  const setCurrentSelectedOrder = useUserStore((state) => state.setCurrentSelectedOrder)

  const [ordersID, setOrdersID] = useState([])
  const [orderDetails, setOrderDetails] = useState([])
  const [loading, setLoading] = useState(true)
  const getAllOrdersHistoryID = async () => {
    const res = await axios.get(`https://website-8ld0.onrender.com/orders/${Account.AccountID}`)
    const orderIDs = res.data.map((order) => order.OrderID)
    console.log('orderIDs', orderIDs)
    setOrdersID(orderIDs)
    setLoading(false)
  }
  const handleClickOrderHistory = (orderID) => {
    console.log('orderID', orderID)
    setCurrentSelectedOrder(orderID)
  }
  useEffect(() => {
    getAllOrdersHistoryID()
  }, [])

  useEffect(() => {
    const details = ordersID.map(async (orderID) => {
      const orderDetail = await axios.get(`https://website-8ld0.onrender.com/orders/${orderID}`)
      console.log('orderDetail', orderDetail)
      setOrdersHistoryStore(orderDetail.data)
    })
    setOrderDetails(details)
  }, [ordersID])
  // useEffect(() => {
  //   console.log('OrdersHistoryStore', OrdersHistoryStore)
  // }, [])
  return (
    <div className="left flex-1 max-w-[400px] p-4 border overflow-y-auto">
      <p className="text-xl font-medium">Orders History</p>
      {loading && <Skeleton count={5} />}
      {!loading && OrdersHistoryStore.map((order, index) => <OrderHistoryItem order={order} details={orderDetails} key={index} onClick={() => handleClickOrderHistory(order)} />)}
    </div>
  )
}
