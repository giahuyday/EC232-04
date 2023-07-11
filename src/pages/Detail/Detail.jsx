import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { InputNumber } from 'antd'
import { CiDeliveryTruck } from 'react-icons/ci'
const Detail = () => {
  const { ItemID } = useParams()
  const [imgMain, setImgMain] = useState('')
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
    setImgMain(Product[0]?.Content)
  }, [])

  return (
    <>
      {/* 3 columns responsive based on Grid */}
      <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16 grid">
        <div className="flex flex-col"></div>
        <div className="flex">
          <img src="" alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl text-[1.5rem] font-semibold leading-6 space tracking-[0.045rem]">Havic HV G-92 Gamepad</h3>
          <div className="flex">
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
              <div className="pl-4 ">(150 reviews)</div>
            </div>
            <div className="block w-[1px] h-full mx-4 bg-black "></div>
            <div className="flex items-center space-x-1 text-green-400">In Stock</div>
          </div>
          <div className="text-[1.5rem] tracking-[0.045rem]">$ 192.00</div>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque commodi unde error hic ipsum voluptates facilis quia quam aliquam aspernatur architecto quo dicta, alias facere officiis repellat reprehenderit earum!</p>
          <div className="h-[1px] w-full my-4 bg-black "></div>
          <div className="flex gap-6">
            <p className="">Colours: </p>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="w-6 h-6 rounded-full bg-red-300"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <div className="">Size: </div>
            <div className="flex gap-2 ">
              <div className="border py-1 px-3 rounded-md cursor-pointer">XS</div>
              <div className="border py-1 px-3 rounded-md cursor-pointer">XS</div>
              <div className="border py-1 px-3 rounded-md cursor-pointer">XS</div>
              <div className="border py-1 px-3 rounded-md cursor-pointer">XS</div>
            </div>
          </div>
          <div className="flex gap-4 w-full mt-4 items-center">
            <InputNumber min={1} max={100} defaultValue={amount} onChange={onAmountChange} size="large" className="self-stretch" />
            <button className="px-8 py-4 bg-rose-500 text-white">Buy now</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <div className="flex">
            <div className="grid grid-cols-2">
              <CiDeliveryTruck size={48} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
