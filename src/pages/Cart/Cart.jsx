import { Link } from "react-router-dom";
import RowTableCart from "../../components/RowTableCart";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatNumber } from "../../helper/dataHelper";
const Cart = () => {
    const backButton = ()=>{
        window.history.back();
    }
    const [dataCart,setDataCart] = useState([])
    const [resetData,setResetData] = useState(false);
    const reset = ()=>{
        setResetData(!resetData)
    }
    const totalPrice = dataCart.reduce((total, item) => total + item.Price*item.Quantity, 0);
    useEffect (()=>{
        axios.get('http://localhost:3001/cart/acc1').then((result)=>{
            setDataCart(()=>result.data)
            
        })
    },[resetData])

    return (
        <div className="my-[50px] ">
            

            <div className="relative bg-bg w-full h-[1518px] overflow-hidden text-left text-base text-text2 font-title-14px-regular">
                <div className="absolute top-[150px] left-[135px] flex flex-col items-start justify-start gap-[80px]">
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                        <div className="flex flex-col items-start justify-start gap-[40px]">
                            <div className="relative rounded bg-bg shadow-md shadow-[black] w-[1170px] border-[1px] border-[gray] h-[72px] overflow-hidden shrink-0">
                                <div className="absolute top-[24px] left-[40px] flex flex-row items-center justify-start gap-[284px]">
                                    <div className="relative leading-[24px]">Product</div>
                                    <div className="relative leading-[24px]">Price</div>
                                    <div className="relative leading-[24px] ">Quantity</div>
                                    <div className="relative leading-[24px]">Subtotal</div>
                                </div>
                            </div>
                            {dataCart.length > 0 ? (
                                dataCart.map((item) => (
                                    <RowTableCart props={item} key={item.id} reset={reset}/>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                            
                        </div>
                        <button onClick={backButton} className="flex flex-row items-start justify-start gap-[757px]">
                            <div className="rounded flex flex-row py-4 px-12 items-center justify-center border-[1px] border-solid border-gray-400">
                                <div className="relative leading-[24px] font-medium">
                                    Return To Shop
                                </div>
                            </div>
                    
                        </button>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[173px]">
                        <div className="flex flex-row items-end justify-start gap-[16px]">
                            <div className="relative rounded box-border w-[300px] h-14 overflow-hidden shrink-0 border-text2">
                                <input type='text' className=" relative rounded box-border w-[300px] h-14 overflow-hidden shrink-0 border-[1px] border-solid border-[gray]"/>
                              
                            </div>
                            <button className="rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text bg-[#db4444]">
                                <div className="relative leading-[24px] font-medium ">
                                    Apply Coupon
                                </div>
                            </button>
                        </div>
                        <div className="relative rounded box-border w-[470px] h-[324px] overflow-hidden shrink-0 border-[1.5px] border-solid border-text2">
                            <div className="absolute top-[32px] left-[24px] text-xl leading-[28px] font-medium">
                                Cart Total
                            </div>
                            <div className="absolute top-[84px] left-[24px] flex flex-row items-start justify-start gap-[250px]">
                                <div className="relative leading-[24px]">Subtotal:</div>
                                <div className="relative leading-[24px]">{formatNumber(totalPrice)}</div>
                            </div>
                            <div className="absolute top-[140px] left-[24px] flex flex-row items-start justify-start gap-[250px]">
                                <div className="relative leading-[24px]">Shipping:</div>
                                <div className="relative leading-[24px]">{formatNumber(20000)}</div>
                            </div>
                            <div className="absolute top-[196px] left-[24px] flex flex-row items-start justify-start gap-[275px]">
                                <div className="relative leading-[24px]">Total:</div>
                                <div className="relative leading-[24px] text-[#db4444] font-[700]">{formatNumber(totalPrice+20000)}</div>
                            </div>
                            <div className="absolute top-[236px] bg-[#db4444] left-[120px] rounded bg-button2 flex flex-row py-4 px-12 items-center justify-center text-text">
                                <div className="relative leading-[24px] font-medium">
                                    Procees to checkout
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
                    </div>
                </div>
                <div className="absolute top-[40px] left-[135px] flex flex-row items-center justify-start gap-[12px] text-sm">
                    <Link to={'/'}>     
                    <div className="relative leading-[21px] opacity-[0.5] color-[gray] font-[700] text-[21px]">Home</div>
                    </Link>
                   <div>/</div>
                    <div className="relative leading-[21px] text-[21px] font-[600]">Cart</div>
                    <img
                        className="relative w-[13.19px] h-0 hidden"
                        alt=""
                        src="/line-14.svg"
                    />
                    <div className="relative leading-[21px] hidden">Nothing</div>
                    <img
                        className="relative w-[13.19px] h-0 hidden"
                        alt=""
                        src="/line-14.svg"
                    />
                    <div className="relative leading-[21px] hidden">Nothing</div>
                    <img
                        className="relative w-[13.19px] h-0 hidden"
                        alt=""
                        src="/line-14.svg"
                    />
                    <div className="relative leading-[21px] hidden">Nothing</div>
                </div>
            </div>



        </div>
    )
}
export default Cart;
