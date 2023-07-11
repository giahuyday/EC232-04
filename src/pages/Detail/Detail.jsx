import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { InputNumber } from 'antd'
import { CiDeliveryTruck } from 'react-icons/ci'
import { BsArrowRepeat } from 'react-icons/bs'
import TableCart from '../../components/TableCart'
import Card from './../../components/Card'
const Detail = () => {
  const { ItemID } = useParams()
  const [imgMain, setImgMain] = useState()
  const [amount, setAmount] = useState(1)
  const [showMorePara, setShowMorePara] = useState(false)
  const [showMoreAbout, setShowMoreAbout] = useState(false)
  const [Product, SetProduct] = useState([])
  const onAmountChange = (value) => {
    setAmount(value)
    console.log('changed', value)
  }
  useEffect(() => {
    Axios.post(`http://localhost:3001/detail/${ItemID}`, {
      ItemID: ItemID,
    }).then((response) => {
      console.log(response)
      SetProduct(response.data)
    })
    setImgMain('https://media.gamestop.com/i/gamestop/11108369-a2080ccd?$pdp$')
  }, [])
  const listImages = ['https://media.gamestop.com/i/gamestop/11108369-a2080ccd?$pdp$', 'https://m.media-amazon.com/images/I/51JCqvlkqVL._AC_UF1000,1000_QL80_.jpg', 'https://media.gamestop.com/i/gamestop/11108369-a2080ccd?$pdp$', 'https://m.media-amazon.com/images/I/51JCqvlkqVL._AC_UF1000,1000_QL80_.jpg']
  function handleShowClickedImage(e) {
    setImgMain(e.target.src)
  }
  return (
    <>
      {/* 3 columns responsive based on Grid */}
      <div className="max-w-screen-2xl mx-auto p-5 grid sm:grid-cols-[1fr_4fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[4fr_13fr_13fr] gap-x-[100px]">
        <div className="flex flex-col justify-around">
          {listImages.map((item, index) => {
            return (
              <div key={index} className="max-w-[170px] max-h-[138px]" onClick={handleShowClickedImage}>
                <img src={item} alt="" className="object-cover mix-blend-color-burn" />
              </div>
            )
          })}
        </div>
        <div className="flex">
          <img src={imgMain} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col col-span-2 lg:col-span-1">
          <h3 className="text-[1.5rem] font-semibold leading-6 space tracking-[0.045rem] font-sans">Havic HV G-92 Gamepad</h3>
          <div className="flex py-6">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <div className="pl-2 ">(150 reviews)</div>
            </div>
            <div className="block w-[1px] h-full mx-4 bg-black "></div>
            <div className="flex items-center space-x-1 text-green-400">In Stock</div>
          </div>
          <div className="text-[1.5rem] tracking-[0.045rem] mb-4">$ 192.00</div>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque commodi unde error hic ipsum voluptates facilis quia quam aliquam aspernatur architecto quo dicta, alias facere officiis repellat reprehenderit earum!</p>
          <div className="h-[1px] w-full my-4 bg-black "></div>
          <div className="flex gap-6">
            <p className="text-[20px]">Colours: </p>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="w-6 h-6 rounded-full bg-red-300"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <div className="text-[20px]">Size: </div>
            <div className="flex gap-2 ">
              <div className="border py-1 px-3 rounded-md cursor-pointer">XS</div>
              <div className="border py-1 px-3 rounded-md cursor-pointer">XS</div>
              <div className="border py-1 px-3 rounded-md cursor-pointer">XS</div>
              <div className="border py-1 px-3 rounded-md cursor-pointer">XS</div>
            </div>
          </div>
          <div className="flex  w-full mt-4 items-center gap-8">
            <InputNumber min={1} max={100} defaultValue={amount} onChange={onAmountChange} size="large" className="self-stretch" />
            <button className="px-16 py-4 bg-rose-500 text-white select-none hover:bg-rose-600 transition-all active:scale-95">Buy now</button>
            <div className="border rounded-md flex item-center p-2 cursor-pointer hover:bg-rose-500 transition-all active:scale-95 ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
          </div>
          <div className="flex py-2 my-2">
            <div className="grid sm:grid-cols-[100px_1fr] grid-cols-1 items-center gap-y-4 border p-6 w-full">
              <CiDeliveryTruck size={48} />
              <div className="">
                <div className="text-[1.5rem] font-semibold">Free shipping</div>
                <div className="underline">Enter your postal code for Delivery Availability</div>
              </div>
              <div className="">
                <BsArrowRepeat size={48} />
              </div>
              <div className="">
                <div className="text-[1.5rem] font-semibold">Return delivery</div>
                <div className="">
                  Free 30 days delivery return. <span className="underline cursor-pointer">Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
