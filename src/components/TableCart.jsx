import { useState } from "react";
const TableCart = () => {
    const [amount, setAmount] = useState(1);
    const handleMinus = () => {
        if (amount == 1) return 
        setAmount(amount-1);
    }
    const handleAdd = () => {
        setAmount(amount+1);
    }
    return (
        <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8 border-[2px] rounded-[7px]">
        <div className="w-full px-4 my-3 md:w-4/6 lg:w-6/12 md:mb-0">
            <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full px-4 mb-3 md:w-1/3">
                    <div className="w-full h-96 md:h-24 md:w-24">
                        <img src="https://shorturl.at/anrxW" alt="" className="object-cover w-full h-full rounded-[5px]" />
                    </div>
                </div>
                <div className="w-2/3 px-4">
                    <h2 className="mb-2 text-xl font-bold ">DSL Camera</h2>
                    <p className="text-gray-500  ">Picture frame</p>
                </div>
            </div>
        </div>
        <div className="hidden px-4 lg:block lg:w-2/12">
            <p className="text-lg font-bold text-blue-500 ">$99.00</p>
            <span className="text-xs text-gray-500 line-through ">$1500</span>
        </div>
        <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
            <div className="inline-flex items-center px-4 font-semibold text-gray-500   border-[2px] rounded-md  ">
                <button className="py-2 hover:text-gray-700 flex justify-center" onClick={handleMinus}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-dash" viewBox="0 0 25 25">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                    </svg>
                </button>
                <input type="number" className="w-12 px-2 py-4 text-center border-0 rounded-md bg-gray-100  md:text-right" placeholder="1" value={amount} />
                <button className="py-2 hover:text-gray-700" onClick={handleAdd} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
            <p className="text-lg font-bold text-blue-500 ">$99.00</p>
        </div>
    </div>
    );
}
export default TableCart;