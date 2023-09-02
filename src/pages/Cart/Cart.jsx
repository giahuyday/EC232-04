import { Link, Navigate,useNavigate } from 'react-router-dom'
import RowTableCart from '../../components/RowTableCart'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { formatNumber, formatPoints, calBeDiscount, formatNum } from '../../helper/dataHelper'
import LoadingEffect from '../../components/Loading'
import { BsCoin } from 'react-icons/bs'
import Modal from '../../components/Modal'
import CheckOut from '../CheckOut/CheckOut'
const Cart = ({ users }) => {
    // console.log(users)
    const backButton = () => {
        window.history.back()
    }
    const [dataCart, setDataCart] = useState([])
    const [resetData, setResetData] = useState(false)
    const [checkBox, setCheckBox] = useState(true)
    const [coin, setCoin] = useState(0)
    const [InfoGuest, setInfoGuest] = useState()
    const ship = 15
    const reset = () => {
        setResetData(!resetData)
    }
    const totalPrice = dataCart.reduce((total, item) => total + item.Price * item.Quantity, 0) + ship
    const endPrice = totalPrice + ship - coin
    const navigate = useNavigate()
    const handleCheckout = () => {
        sessionStorage.setItem('totalPrice', totalPrice)
        sessionStorage.setItem('endPrice', endPrice)
        sessionStorage.setItem('ship', ship)
        sessionStorage.setItem('usedCoin', coin)
        navigate('/checkout')
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/cart/loading/` + sessionStorage.getItem('AccountID')).then((result) => {
            setDataCart(() => result.data)
            console.log(result.data)
        })
        axios.get(`http://localhost:3001/admin/points/getInfo/${sessionStorage.getItem('AccountID')}`).then((result) => setInfoGuest(result.data[0][0]))
    }, [resetData])
    const UseCoin = () => {
        setCheckBox(!checkBox)
        if (checkBox == true) {
            if (InfoGuest?.Money === 0) {
                setCoin(0)
            } else if (endPrice < InfoGuest?.Money) {
                setCoin(endPrice)
            } else {
                setCoin(InfoGuest?.Money)
            }
        } else {
            setCoin(0)
        }
    }
  
    return (
        <div className="my-[50px] ">
            <div className="relative bg-bg w-full min-h-[2000px]  overflow-hidden text-left text-base text-text2 font-title-14px-regular">
                <div className="absolute top-[150px] left-[135px] flex flex-col items-start justify-start gap-[80px]">
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                        <div className="flex flex-col items-start justify-start gap-[40px]">
                            <div className="relative rounded bg-bg shadow-md shadow-[black] w-[1170px] border-[1px] border-[gray] h-[72px] overflow-hidden shrink-0">
                                <div className="absolute top-[24px] left-[40px] flex flex-row items-center justify-around w-[100%] ">
                                    <div className="relative leading-[24px]">Product</div>
                                    <div className="relative leading-[24px]">Price</div>
                                    <div className="relative leading-[24px] ">Quantity</div>
                                    <div className="relative leading-[24px]">Subtotal</div>
                                </div>
                            </div>
                            {dataCart.length > 0 ? dataCart.map((item) => <RowTableCart props={item} key={item.ItemID} reset={reset} />) : <LoadingEffect />}
                        </div>

                        <div className="flex justify-between w-[100%]">
                            <button onClick={backButton} className="flex flex-row items-start justify-start gap-[757px]">
                                <div className="rounded flex flex-row py-4 px-12 items-center justify-center border-[1px] border-solid border-gray-400">
                                    <div className="relative leading-[24px] font-medium">Return To Shop</div>
                                </div>
                                <div></div>
                            </button>
                            <div className="">
                                <div className="relative leading-[24px] font-medium">
                                    <Modal></Modal>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between w-[100%] ">
                        <div className="flex flex-row  justify-start gap-[16px]">
                            <div className="relative rounded box-border w-[400px] h-[100px] p-[20px] overflow-hidden shrink-0 border-text2 border-black border-[1px]">
                                <div>
                                    Bạn được tặng : <span className="text-[#db4444] font-[700]">{formatNum(calBeDiscount(totalPrice, InfoGuest?.Percent))} Coin</span> <span className="font-[600]">( {InfoGuest?.Percent}%) </span>  cho đơn hàng này{' '}
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded box-border w-[470px] h-[500px] overflow-hidden shrink-0 border-[1.5px] border-solid border-text2 bg-gray-100">
                            <div className="absolute top-[32px] left-[24px] text-xl leading-[28px] font-medium">Cart Total</div>
                            <div className="h-[500px] p-[40px] pt-[80px] gap-[30px] flex flex-col">
                                <div className="flex flex-row items-start justify-start gap-[250px]">
                                    <div className="relative leading-[24px] w-[20px]">Subtotal:</div>
                                    <div className="relative leading-[24px] w-[90px] flex justify-end">{formatNumber(totalPrice)}</div>
                                </div>
                                <div className="  flex flex-row items-start justify-start gap-[250px] ">
                                    <div className="relative leading-[24px] w-[20px]">Shipping:</div>
                                    <div className="relative leading-[24px] w-[90px] flex justify-end">{formatNumber(ship)}</div>
                                </div>
                                {coin !== 0 && (
                                    <div className="  flex flex-row items-start justify-start gap-[250px]">
                                        <div className="relative leading-[24px] w-[20px]">Coin:</div>
                                        <div className="relative leading-[24px] w-[90px] flex justify-end">-{formatNumber(coin)}</div>
                                    </div>
                                )}

                                <div className="bg-[#969191] h-[2px]"></div>
                                <div className=" flex flex-row items-start justify-start gap-[275px]">
                                    <div className="relative leading-[24px] font-[700]">Total:</div>
                                    <div className="relative leading-[24px] text-[#db4444] font-[700]">{formatNumber(endPrice)}</div>
                                </div>
                            </div>
                            <div className="absolute top-[330px] left-[50px] flex flex-row items-start justify-start gap-[200px]">
                                <div>Coin</div>
                                <div className="flex flex-row">
                                    <div className="flex">
                                        <div className="m-[5px]">
                                            <BsCoin className="text-[#777738] bg-[yellow]"></BsCoin>
                                        </div>
                                        {formatNum(InfoGuest?.Money)}
                                    </div>
                                    <label className="relative ml-[10px] inline-flex items-center mb-5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            onChange={() => {
                                                UseCoin()
                                            }}
                                            className="sr-only peer"
                                        />
                                        <div className="w-9 h-5 bg-gray-200  peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#db4444]"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="absolute top-[400px] flex items-end justify-center w-[100%] ">
                                <div className="top-[300px] bg-[#db4444] h-[70px] mb-[20px] left-[120px] rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text">
                                    <div className="leading-[24px] font-medium">
                                        <button onClick={handleCheckout} >
                                            <div className="relative leading-[21px] opacity-[0.5] color-[gray] font-[700] text-[21px]">Process to checkout</div>
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute top-[330px] left-[50px] flex flex-row items-start justify-start gap-[200px]">
                                    <div>Coin</div>
                                    <div className="flex flex-row">
                                        <div className="flex">
                                            <div className="m-[5px]"><BsCoin className="text-[#777738] bg-[yellow]"></BsCoin></div>
                                            {formatNum(InfoGuest?.Money)}
                                        </div>
                                        <label className="relative ml-[10px] inline-flex items-center mb-5 cursor-pointer">
                                            <input type="checkbox" onChange={() => { UseCoin() }} className="sr-only peer" />
                                            <div className="w-9 h-5 bg-gray-200  peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#db4444]"></div>
                                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="absolute top-[400px] flex items-end justify-center w-[100%] ">

                                    <div className="top-[300px] bg-[#db4444] h-[70px] mb-[20px] left-[120px] rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text">
                                        <div className="leading-[24px] font-medium">
                                            <Link to={'/checkout'} element={CheckOut}>
                                                <div className="relative leading-[21px] opacity-[0.5] color-[gray] font-[700] text-[21px]">Process to checkout</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className="absolute top-[123px] left-[24px] w-[422px] h-px opacity-[0.4]"
                                    alt=""
                                    src="/underline.svg"
                                />
                                <img
                                    className="absolute top-[179px] left-[24px] w-[422px] h-px opacity-[0.4]"
                                    alt=""
                                    src="/underline.svg"
                                />
                            </div>
                            <img className="absolute top-[123px] left-[24px] w-[422px] h-px opacity-[0.4]" alt="" src="/underline.svg" />
                            <img className="absolute top-[179px] left-[24px] w-[422px] h-px opacity-[0.4]" alt="" src="/underline.svg" />
                        </div>
                    </div>
                </div>
                <div className="absolute top-[40px] left-[135px] flex flex-row items-center justify-start gap-[12px] text-sm">
                    <Link to={'/'}>
                        <div className="relative leading-[21px] opacity-[0.5] color-[gray] font-[700] text-[21px]">Home</div>
                    </Link>
                    <div>/</div>
                    <div className="relative leading-[21px] text-[21px] font-[600]">Cart</div>
                    <img className="relative w-[13.19px] h-0 hidden" alt="" src="/line-14.svg" />
                    <div className="relative leading-[21px] hidden">Nothing</div>
                    <img className="relative w-[13.19px] h-0 hidden" alt="" src="/line-14.svg" />
                    <div className="relative leading-[21px] hidden">Nothing</div>
                    <img className="relative w-[13.19px] h-0 hidden" alt="" src="/line-14.svg" />
                    <div className="relative leading-[21px] hidden">Nothing</div>
                </div>
            </div>
        </div>
    )
}
export default Cart
