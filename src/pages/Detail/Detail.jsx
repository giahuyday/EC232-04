import { useState, useEffect, ref } from 'react'
import Axios from 'axios'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { InputNumber } from 'antd'
import { CiDeliveryTruck } from 'react-icons/ci'
import { BsArrowRepeat } from 'react-icons/bs'
import { useSpring, animated } from 'react-spring'
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Stack } from '@chakra-ui/react'
import { formatNumber } from '../../helper/dataHelper'
import ModalImage from 'react-modal-image'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useUserStore } from '../../store'
const parseProductDetails = (product) => {
  let imagesLinks = []
  const { CateID, Color, ItemID, PictureID, Description, Name, Price, ProDucerID, Status } = product?.[0]
  product.forEach((p, i) => {
    const imgLink = p.Content
    imagesLinks.push(imgLink)
  })
  return {
    Description,
    Name,
    Price,
    Color,
    ProDucerID,
    Status,
    imagesLinks,
    CateID,
    ItemID,
    PictureID,
  }
}

const Detail = () => {
  const { ItemID } = useParams()
  const [imgMain, setImgMain] = useState()
  const [amount, setAmount] = useState(1)
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('bg-[#000]')
  const [isFlyIn, setIsFlyIn] = useState(false)
  const increaseCartCount = useUserStore((state) => state.increaseCartCount)
  const AccountID = useUserStore((state) => state.Account?.AccountID)
  const redirect = useNavigate()
  const onAmountChange = (value) => {
    setAmount(value)
  }
  const handAddCart = async () => {
    await Axios.post('http://localhost:3001/cartpost/add', {
      Account: sessionStorage.getItem('AccountID'),
      itemId: ItemID,
      Quantity: amount,
    })
    handleFlyInClick()
    for (let i = 0; i < amount; i++) increaseCartCount()
  }
  const addToFavorite = async () => {
    const res = await Axios.post('http://localhost:3001/wishlist/addToWishlist', {
      AccountID,
      ItemID,
    })
    console.log(res)
  }
  const fetchProductDetail = async () => {
    try {
      const res = await Axios.get(`http://localhost:3001/detail/${ItemID}`)
      console.log(res)
      const product = parseProductDetails(res.data)
      setProduct(product)
      product.Color && setColor(`bg-[${product.Color}]`)
      console.log('Fetch successfull', product)
    } catch (error) {
      console.log('error ne`: ', error)
    }
  }

  useEffect(() => {
    fetchProductDetail()
    if (!product) setLoading(true)
    else setLoading(false)
  }, [])
  useEffect(() => {
    setImgMain(product?.imagesLinks?.[0])
    console.log('Product: ', product)
  }, [product])

  function handleShowClickedImage(e) {
    setImgMain(e.target.src)
  }

  const handleFlyInClick = () => {
    setIsFlyIn(true)
    setTimeout(() => {
      setIsFlyIn(false)
    }, 1000)
  }
  const handleBuyNow = () => {
    handAddCart()
    redirect(`/cart`)
  }
  const flyInAnimation = useSpring({
    transform: isFlyIn ? 'translate(1500px,0)' : 'translate(300px,200px)',
    opacity: isFlyIn ? 1 : 0,
    config: { duration: 1000 },
  })
  if (loading) return <h1>Loading hehe</h1>
  return (
    <>
      <animated.img src={imgMain} alt="" className="absolute w-[100px] h-[100px] object-contain rounded-md" style={flyInAnimation} />

      {/* 3 columns responsive based on Grid */}
      <div className="max-w-screen-2xl mx-auto p-5 grid sm:grid-cols-[1fr_4fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[4fr_13fr_13fr] gap-x-[100px] min-h-[70vh]">
        <div className="flex flex-col justify-around">
          {product.imagesLinks?.map((item, index) => {
            return (
              <div key={index} className="max-w-[170px] max-h-[138px]" onClick={handleShowClickedImage}>
                <img src={item} alt="" className="object-cover mix-blend-color-burn rounded-lg" />
              </div>
            )
          })}
        </div>
        <div className="flex">
          <ModalImage small={imgMain} large={imgMain} className="w-full h-full object-scale-down  max-w-full max-h-full" />
        </div>
        <div className="flex flex-col col-span-2 lg:col-span-1">
          <h3 className="text-[1.5rem] font-semibold leading-6 space tracking-[0.045rem] font-sans">{product.Name}</h3>
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
              <div className="pl-2 ">(150 reviews) </div>
            </div>
            <div className="block w-[1px] h-full mx-4 bg-black "></div>
            <div className={`flex items-center space-x-1 ${product.Status == 'Sold OUt' ? 'text-red-400' : 'text-green-400'}`}>{product.Status?.toUpperCase()}</div>
          </div>
          <div className="text-[1.5rem] tracking-[0.045rem] mb-4">{product.Price !== 0 ? formatNumber(product.Price) : 100}</div>
          <p className="text-justify">{product.Description}</p>
          <div className="h-[1px] w-full my-4 bg-black "></div>
          <div className="flex gap-4">
            <p className="text-[20px]">Colors: </p>
            <RadioGroup onChange={setColor} value={color} className="flex gap-2">
              <Stack direction="row">
                {product?.Color ? (
                  <Radio value={product?.Color?.toLowerCase()}>
                    <div
                      className={`w-6 h-6 rounded-full block bg-[${product.Color.toLowerCase()}]`}
                      style={{
                        backgroundColor: product?.Color?.toLowerCase(),
                      }}
                    ></div>
                  </Radio>
                ) : (
                  <>
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    <div className="w-6 h-6 rounded-full bg-red-300"></div>
                  </>
                )}
              </Stack>
            </RadioGroup>
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
          <div className="flex w-full mt-4 items-center gap-[10px]">
            {/* <InputNumber min={1} max={100} defaultValue={amount} onChange={onAmountChange} size="large" className="self-stretch" /> */}
            <NumberInput defaultValue={1} min={1} max={1000} keepWithinRange={true} clampValueOnBlur={false} onChange={onAmountChange} className=" flex self-center outline-none border-none" size="md" maxW={60}>
              <NumberInputField className="outline-none border-none h-full translate-y-[2px] text-xl" />
              <NumberInputStepper className="outline-none border-none">
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <button className="px-6 py-4  bg-rose-500 text-white select-none hover:bg-rose-600 transition-all active:scale-95" onClick={handleBuyNow}>
              Buy now
            </button>
            <div className="">
              <button className="px-6 py-4 rounded-12 border-none bg-yellow-400 flex items-center justify-center cursor-pointer transition duration-500 overflow-hidden shadow-md relative group" onClick={handAddCart}>
                <span className="absolute left-[-50px] w-30 h-30 bg-transparent rounded-full flex items-center justify-center overflow-hidden z-2 transition duration-500 group-hover:translate-x-[58px] group-hover:rounded-40">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart w-5 h-5">
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p className="h-full w-fit-content flex items-center justify-center text-gray-700 z-1 transition duration-500 group-hover:translate-x-10 group-hover:translate-y-0 group-hover:font-bold text-1.04em font-semibold">Add to Cart</p>
              </button>
            </div>
            <div className="border rounded-md flex item-center p-2 cursor-pointer hover:bg-rose-500 transition-all active:scale-95 ml-auto" onClick={addToFavorite}>
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
                <div className="underline">Enter your postal code for Delivery availability</div>
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
