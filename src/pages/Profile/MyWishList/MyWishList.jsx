import axios from 'axios'
import React, { useEffect } from 'react'
import { useUserStore } from '../../../store'
import WishListDetail from './WishListDetail'

const MyWishList = () => {
  const AccountID = useUserStore((state) => state.Account?.AccountID)
  const setWishlist = useUserStore((state) => state.setWishlist)
  const Wishlist = useUserStore((state) => state.Wishlist)
  const fetchWishList = async () => {
    const res = await axios.get(`http://localhost:3001/wishlist/${AccountID || 'Acc1'}`)
    setWishlist(res.data.Items)
    console.log(res)
    console.log('🚀 ~ MyWishList ~ wishList', Wishlist)
  }
  useEffect(() => {
    fetchWishList()
  }, [])

  return (
    <div className="flex-shrink-0 w-full bg-gray-50 p-4">
      <div className="flex flex-col">
        <p className="text-xl font-medium">Your Wishlist</p>
        {/* Stars here */}
        {Wishlist?.map((item, i) => (
          <WishListDetail key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default MyWishList
