import { useState, useEffect } from "react"
import Axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { ItemID } = useParams()
    const [imgMain, setImgMain] = useState("");
    const [amount, setAmount] = useState(1);
    const [showMorePara, setShowMorePara] = useState(false);
    const [showMoreAbout, setShowMoreAbout] = useState(false);

    const [Product, SetProduct] = useState([])

    useEffect(() => {
        Axios.post(`http://localhost:3001/detail/${ItemID}`,{
            ItemID: ItemID, 
       }).then((response) => {
           console.log(response)
            SetProduct(response.data)
        })
        setImgMain(Product[0]?.Content)
    }, [])

    const handleMinus = () => {
        if (amount == 1) return 
        setAmount(amount-1);
    }
    const handleAdd = () => {
        setAmount(amount+1);
    }

    // if (!Object.Product) return <div className="font-bold px-1 py-12">Cannot Find Product</div>
    // else
    return (
        <>  
            <section className="overflow-hidden bg-white py-11 font-poppins  my-[40px]">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 rounded-[20px]">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full mb-8 md:w-1/2 md:mb-0">
                            <div className="sticky top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10   w-full h-[50vh] ">
                                    <img src={imgMain} alt=""
                                        className="object-cover w-full lg:h-full " />
                                </div>
                                <div className="flex-wrap hidden md:flex ">
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <button onClick={() => setImgMain(Product[0]?.Content)} href="#" className="block border border-blue-300 hover:border-blue-300">
                                            <img src={Product[0]?.Content} alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </button>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <button onClick={() => setImgMain("https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg")} href="#" className="block border border-blue-300 hover:border-blue-300">
                                            <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </button>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <button onClick={() => setImgMain("https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80")} href="#" className="block border border-blue-300 hover:border-blue-300">
                                            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </button>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <button onClick={() => setImgMain("https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?cs=srgb&dl=pexels-laryssa-suaid-1667088.jpg&fm=jpg")} href="#" className="block border border-blue-300 hover:border-blue-300">
                                            <img src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?cs=srgb&dl=pexels-laryssa-suaid-1667088.jpg&fm=jpg" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center mt-6">
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-4 h-4 text-gray-700   bi bi-truck"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                                            </path>
                                        </svg>
                                    </span>
                                    <h2 className="text-lg font-bold text-gray-700  ">Free Shipping</h2>
                                </div>
                                <div className="px-6 pb-6 mt-6  border-gray-300  border-t-[2px] ">

                                    <div className="mt-2 px-7">
                                        <h1 className="text-[16px] font-[600]">Parameter</h1>
                                        <p className={showMorePara ? "" : "line-clamp-3 transition duration-300 paragraph"}>
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                        </p>
                                        <button type="button" className="text-[#3c773c] font-[800]" onClick={() => setShowMorePara(!showMorePara)}>
                                            {showMorePara ? "read less" : "read more"}
                                        </button>
                                    </div>
                                </div>
                                <div className="px-6 pb-6 mt-6 border-t border-gray-300   ">

                                    <div className="mt-2 px-7">
                                        <h1 className="text-[16px] font-[600]">About this item</h1>
                                        <p className={showMoreAbout ? "" : "line-clamp-3 transition duration-300 paragraph"}>
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                            In this article, we'll demonstrate how to create a "Read More Read Less"
                                            button using HTML and CSS. When you want to hide more details while still
                                            giving readers a sense of what the article or post is about, the read
                                            more and read less buttons might be useful.
                                        </p>
                                        <button type="button" className="text-[#3c773c] font-[800]" onClick={() => setShowMoreAbout(!showMoreAbout)}>
                                            {showMoreAbout ? "read less" : "read more"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    <div className="border-b border-[black] bio">
                                        <h2 className="max-w-xl  mb-[10px] text-[24px] font-bold   md:text-4xl">
                                            {Product[0]?.Name}
                                        </h2>

                                        <div class="flex items-center">
                                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <p class="ml-2 text-sm font-bold text-gray-900 ">4.95</p>
                                            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full "></span>
                                            <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline ">73 reviews</a>
                                        </div>

                                    </div>

                                    <p className="pt-[30px] inline-block mb-6 text-4xl font-bold text-gray-700   ">
                                        <span className="text-[black]">
                                            {Product[0]?.Price}
                                        </span>
                                        <span
                                            className="text-base font-normal text-gray-500 line-through  ">$1800.99</span>
                                    </p>
                                    <p className="max-w-md text-gray-700 font-bold">
                                        {Product[0]?.Description}
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h2
                                        className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300    ">
                                        Colors</h2>
                                    <div className="flex flex-wrap -mx-2 -mb-2">
                                        <button className="p-1 mb-2 mr-3 ">
                                            <div className="w-6 h-6 rounded-full bg-stone-400"></div>
                                        </button>
                                        <button className="p-1 mb-2 mr-3 ">
                                            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                                        </button>
                                        <button className="p-1 mb-2 ">
                                            <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-8 ">
                                    <h2
                                        className="w-16 pb-1 mb-4 text-xl font-semibold border-b border-blue-300    ">
                                        RAM</h2>
                                    <div>
                                        <div className="flex flex-wrap -mb-2">
                                            <button
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400   hover:text-blue-600    ">
                                                8 GB
                                            </button>
                                            <button
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600      ">
                                                16 GB
                                            </button>
                                            <button
                                                className="px-4 py-2 mb-2 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600      ">
                                                1 TB
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <h2
                                        className="w-16 pb-1 mb-6 text-xl font-semibold border-b border-blue-300    ">
                                        Storage</h2>
                                    <div>
                                        <div className="flex flex-wrap -mx-2 -mb-2">
                                            <button
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400   hover:text-blue-600    ">
                                                256 GB
                                            </button>
                                            <button
                                                className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600      ">
                                                112 GB
                                            </button>
                                            <button
                                                className="px-4 py-2 mb-2 mr-2 font-semibold border rounded-md hover:border-blue-400 hover:text-blue-600      ">
                                                1 TB
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-32 mb-8 ">
                                    <label for=""
                                        className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-blue-300    ">Quantity</label>
                                    <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                                        <button onClick={handleMinus}
                                            className="w-20 h-full bg-gray-800">
                                            <span className="m-auto text-2xl bg-gray-800 text-white font-thin">-</span>
                                        </button>
                                        <input type='text' pattern="[0-9]*"
                                            className="flex items-center w-full font-semibold text-center bg-gray-500 text-white"
                                            value={amount}
                                        />
                                        <button onClick={handleAdd}
                                            className="w-20 h-full bg-gray-800">
                                            <span className="m-auto text-2xl bg-gray-800 text-white font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <button
                                        className="w-full p-4 bg-blue-500 rounded-md lg:w-2/5   text-gray-50 hover:bg-blue-600 dark:bg-blue-500  ">
                                        Add to cart</button>
                                    <button
                                        className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md lg:w-2/5   dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail
