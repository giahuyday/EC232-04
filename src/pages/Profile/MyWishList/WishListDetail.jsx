import React from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../../../store'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'
const WishListDetail = ({ item }) => {
  console.log('🚀 ~ WishListDetail ~ item', item)
  const { ItemID, Name, Price, Description, Status, Category, Producer, Pic } = item || 'Null'
  const removeFromWishlist = useUserStore((state) => state.removeFromWishlist)
  const AccountID = useUserStore((state) => state.Account?.AccountID)
  const removeWishListItem = (e, ItemID) => {
    console.log('🚀 ~ removeWishListItem ~ ItemID', ItemID)
    e.preventDefault()
    e.stopPropagation()
    removeFromWishlist(ItemID)
    const res = axios.post('http://localhost:3001/wishlist/removeFromWishlist', { AccountID, ItemID })
  }
  return (
    <Link to={`/detail/${ItemID}`} className="flex gap-8 items-center border-b border-b-blue-300 relative">
      <button className="absolute -left-[38px] top-0 bg-red w-5 h-5 p-5 rounded-2xl ">
        <AiOutlineDelete size={26} onClick={(e) => removeWishListItem(e, ItemID)} className="hover:text-red-400" />
      </button>
      <div className="rounded-3xl overflow-hidden">
        <img src={Pic} alt="" className="w-[10rem] h-[10rem] object-contain overflow-hidden" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full gap-2 ">
          <div className="flex flex-col justify-center">
            <span className="font-semibold text-xl font-serif">{Name}</span>
            <div className="bg-rose-200 rounded-md p-2 mb-1 w-fit text-[15px] font-serif">Current price: </div>
            <div className="bg-green-200 rounded-md p-2 mb-1 w-fit ">Producer: </div>
            <div className="bg-blue-200 rounded-md p-2 mb-1  w-fit ">Category</div>
          </div>
          <div className="flex flex-col justify-center text-right">
            <p className="bg-rose-200 rounded-md p-2 mb-1 text-xl font-serif font-bold">${Price}</p>
            <p className="bg-green-200 rounded-md p-2 mb-1 font-serif">{Producer}</p>
            <p className="bg-blue-200 rounded-md p-2 mb-1 font-serif">{Category}</p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] w-full">
          <div className="font-serif font-semibold">Status: </div>
          <div className={`text-right ${Status === 'Available' ? 'text-[#f25bd2]' : 'text-red-500'}`}>{Status} </div>
        </div>
      </div>
    </Link>
  )
}

export default WishListDetail
