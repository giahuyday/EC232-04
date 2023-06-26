
import TableCart from "../../components/TableCart";
const Cart = () => {

    return (
        <div className="my-[50px] ">
            <section className="flex items-center  min-h-[100vh] font-poppins ">
                <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6 ">
                    <div className="p-8 bg-[#c6d9ee] rounded-[30px] ">
                        <h2 className="mb-8 text-4xl font-bold ">Your Cart</h2>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
                                <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                                    <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                        <h2 className="font-bold text-gray-500 ">Product name</h2>
                                    </div>
                                    <div className="hidden px-4 lg:block lg:w-2/12">
                                        <h2 className="font-bold text-gray-500 ">Price</h2>
                                    </div>
                                    <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                                        <h2 className="font-bold text-gray-500 ">Quantity</h2>
                                    </div>
                                    <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                                        <h2 className="font-bold text-gray-500 "> Subtotal</h2>
                                    </div>
                                </div>
                                <div className="py-4 mb-8 border-t border-b border-gray-200 ">
                                <TableCart/>
                                <TableCart/>
                                <TableCart/>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="text-gray-700 ">Apply Coupon</span>
                                    <input type="text" className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border   md:flex-none md:mr-6 " placeholder="x304k45" required="" />
                                    <button className="flex-1 inline-block px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md hover:bg-blue-600 md:flex-none">Apply</button>
                                </div>
                            </div>
                            <div className="w-full px-4 xl:w-4/12">
                                <div className="p-6 border border-blue-100 bg-blue-50 md:p-8 shadow-sm rounded-[10px]">
                                    <h2 className="mb-8 text-3xl font-bold text-gray-700 ">Order Summary</h2>
                                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300  ">
                                        <span className="text-gray-700 ">Subtotal</span>
                                        <span className="text-xl font-bold text-gray-700  ">$99</span>
                                    </div>
                                    <div className="flex items-center justify-between pb-4 mb-4 ">
                                        <span className="text-gray-700  ">Shipping</span>
                                        <span className="text-xl font-bold text-gray-700  ">Free</span>
                                    </div>
                                    <div className="flex items-center justify-between pb-4 mb-4 ">
                                        <span className="text-gray-700 ">Order Total</span>
                                        <span className="text-xl font-bold text-gray-700 ">$99.00</span>
                                    </div>
                                    <h2 className="text-lg text-gray-500 ">We offer:</h2>
                                    <div className="flex items-center mb-4 ">
                                        <a href="#">
                                            <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt="" className="object-cover h-16 mr-2 w-26" />
                                        </a>
                                        <a href="#">
                                            <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt="" className="object-cover h-16 mr-2 w-26" />
                                        </a>
                                        <a href="#">
                                            <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt="" className="object-cover h-16 mr-2 w-26" />
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Cart;
