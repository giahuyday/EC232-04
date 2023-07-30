import { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { formatNumber } from '../helper/dataHelper'
import axios from 'axios'
import { useCartStore } from '../pages/Cart/Cart'
const RowTableCart = ({ props, reset }) => {
    const increaseQuanity = useCartStore((state) => state.increaseTotal)
    const decreaseQuanity = useCartStore((state) => state.decreaseTotal)

    const [amount, setAmount] = useState(props.Quantity)
    const handleMinus = async () => {
        if (amount === 1) return
        setAmount((amount) => amount - 1)
        const quantity = {
            Quantity: amount - 1,
            itemId: props.itemID,
            CartID: props.CartID,
        }
        await axios.post('http://localhost:3001/cartpost/update', quantity)
        decreaseQuanity()
        reset()
    }
    const handleAdd = async () => {
        setAmount((amount) => amount + 1)
        const quantity = {
            Quantity: amount + 1,
            itemId: props.itemID,
            CartID: props.CartID,
        }
        await axios.post('http://localhost:3001/cartpost/update', quantity)
        increaseQuanity()
        reset()
    }

    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }

    const handleLeave = () => {
        setHovered(false)
    }
    const handleButtuonRemove = async () => {
        await axios.post('http://localhost:3001/cartpost/remove', {
            CartID: props.CartID,
            ItemID: props.itemID,
        })
        reset()
    }
    return (
        <>
            <div className="relative rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[1170px] h-[102px] overflow-hidden shrink-0 hover:shadow-[#ebb3b3]" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                <div className="absolute top-[39px] left-[387px] leading-[24px] text-[black]">{formatNumber(props.Price)}</div>
                <div className="absolute top-[39px] left-[1063px] leading-[24px]">{formatNumber(props.Price * amount)}</div>
                <div className="absolute top-[15px] left-[666px] rounded box-border w-[200px] h-[70px] overflow-hidden border-gray-300">
                    <div className="absolute top-[6px] left-[12px] flex flex-row items-center justify-start gap-[16px]">
                        <div className="flex flex-col items-start justify-start">
                            <div className="w-[100px]">
                                <div className="inline-flex items-center px-4 font-semibold text-gray-500  border-[2px] rounded-md  ">
                                    <button className="py-2 hover:text-gray-700 flex justify-center" onClick={handleMinus}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-dash" viewBox="0 0 25 25">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                        </svg>
                                    </button>
                                    <input type="number" className="w-12 h-10 px-2 py-4 text-center border-0 rounded-md bg-gray-100  md:text-right" placeholder="1" value={amount} />
                                    <button className="py-2 hover:text-gray-700" onClick={handleAdd}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_545px)] w-[80px] h-[75px] overflow-hidden">
                        <img className="absolute h-[80%] w-[95%] top-[14.81%] right-[3.7%] bottom-[12.96%] left-[3.7%] overflow-hidden" alt="" src={props.Content} />
                    </div>
                    <div className="absolute top-[39px] left-[130px] font-[600]  leading-[24px]">LCD Monitor</div>
                    {hovered && (
                        <button onClick={handleButtuonRemove}>
                            <MdCancel className="absolute top-[20px] left-[30px] w-[20px] h-[20px] text-[red] font-[700] overflow-hidden" />
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}
export default RowTableCart
