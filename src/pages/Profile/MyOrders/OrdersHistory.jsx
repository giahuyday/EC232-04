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
  const currentSelectedOrder = useUserStore((state) => state.currentSelectedOrder)
  const [loading, setLoading] = useState(true)
  const getAllOrdersHistory = async () => {
    const res = await axios.get(`https://website-8ld0.onrender.com/orders/${Account.AccountID}`)

    console.log('🚀 ~ getAllOrdersHistory ~ res:', res)
    setOrdersHistoryStore(res.data)
    // const orderIDs = res.data.map((order) => order.OrderID)
    // console.log('orderIDs', orderIDs)
    // setOrdersID(orderIDs)
    setLoading(false)
  }
  // const handleClickOrderHistory = (order) => {
  //   console.log('orderID', order)
  //   const getAllItemIDByOrderID = async () => {
  //     const res = await axios.get(`https://website-8ld0.onrender.com/GetAllItemIDByOrderID/${order.OrderID}`)
  //     console.log('🚀 ~ getAllItemIDByOrderID ~ res:', res)
  //     return res.data
  //   }
  //   const getAllItemDetailOfOrderByItemID = async (ItemID) => {
  //     const res = await axios.get(`https://website-8ld0.onrender.com/GetAllDetailsOfItemByItemID/${ItemID}`)
  //     console.log('🚀 ~ getAllItemDetailOfOrderByItemID ~ res:', res)
  //   }
  //   const getAllItemDetailOfOrderByItemIDs = async (ItemIDs) => {
  //     let allItemDetails = []
  //     ItemIDs.forEach(async (ItemID) => {
  //       const res = await getAllItemDetailOfOrderByItemID(ItemID)
  //       allItemDetails.push(res.data)
  //     })
  //     console.log('allItemDetails', allItemDetails)
  //     return allItemDetails
  //   }
  //   const allItemIDs = getAllItemIDByOrderID()
  //   getAllItemDetailOfOrderByItemIDs(allItemIDs)
  //   console.log('allItemIDs', allItemIDs)
  //   console.log('currentSelectedOrder', currentSelectedOrder)
  // }
  const handleClickOrderHistory = async (order) => {
    try {
      console.log('orderID', order)

      const getAllItemIDByOrderID = async () => {
        const res = await axios.get(`https://website-8ld0.onrender.com/GetAllItemIDByOrderID/${order.OrderID}`)
        console.log('🚀 ~ getAllItemIDByOrderID ~ res:', res)
        return res.data
      }

      const getAllItemDetailOfOrderByItemID = async (ItemID) => {
        const res = await axios.get(`https://website-8ld0.onrender.com/GetAllDetailsOfItemByItemID/${ItemID}`)
        console.log('🚀 ~ getAllItemDetailOfOrderByItemID ~ res:', res)
        return res.data
      }

      const allItemIDs = await getAllItemIDByOrderID()
      console.log('allItemIDs', allItemIDs)

      const allItemDetails = await Promise.all(allItemIDs.map((ItemID) => getAllItemDetailOfOrderByItemID(ItemID)))
      console.log('allItemDetails', allItemDetails)
      setCurrentSelectedOrder(allItemDetails)
      console.log('currentSelectedOrder', currentSelectedOrder)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    getAllOrdersHistory()
  }, [])

  // useEffect(() => {
  //   const details = ordersID.map(async (orderID) => {
  //     const orderDetail = await axios.get(`https://website-8ld0.onrender.com/orders/${orderID}`)
  //     console.log('orderDetail', orderDetail)
  //     setOrdersHistoryStore(orderDetail.data)
  //   })
  //   setOrderDetails(details)
  // }, [ordersID])

  // useEffect(() => {
  //   console.log('OrdersHistoryStore', OrdersHistoryStore)
  // }, [])
  return (
    <div className="left flex-1 max-w-[400px] p-4 border overflow-y-auto">
      <p className="text-xl font-medium">Orders History</p>
      {loading && <Skeleton count={5} />}
      {!loading && OrdersHistoryStore.map((order, index) => <OrderHistoryItem order={order} key={index} onClick={() => handleClickOrderHistory(order)} />)}
    </div>
  )
}
