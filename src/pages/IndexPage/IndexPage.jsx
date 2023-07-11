import React, { useState, useEffect, useRef } from "react";
import axios from "axios"
import CardProductHome from "../../components/CardProductHome";
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineCamera } from 'react-icons/ai';
import { BsPhone, BsSmartwatch } from 'react-icons/bs';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BiHeadphone } from 'react-icons/bi';
import { SiYoutubegaming } from 'react-icons/si';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const IndexPage = () => {
  const imagesHeader = [
    "https://www.u.com.my/content/dam/u-mobile/personal/devices/iphone/iphone-14-pro/meta/20220922/iPhone14-Pro-Launch_Meta-Image_EN.png",
    "https://i.pinimg.com/originals/66/34/fb/6634fb0a93a20723a3f3473f693f8e15.jpg",
    "https://i.ytimg.com/vi/9Rbb5Sk0r_k/maxresdefault.jpg",
  ];
  const imagesMid = "https://9to5mac.com/wp-content/uploads/sites/6/2022/03/green-iphone-wallpaper.jpg?quality=82&strip=all&w=1600"
  const leftAd = "https://www.gamespot.com/a/uploads/scale_landscape/1601/16018044/3874857-ps5.jpg"
  const topAd="https://giaydabongtot.com/wp-content/uploads/2020/10/Anh-ronaldo-dep-trai-1-scaled.jpg"
  const miniLeftAd = "https://images.lifestyleasia.com/wp-content/uploads/sites/5/2022/04/04164940/Hublot_Square-Bang-Unico-All-Black_821.CX_.0140.RX-LS-Horizontal.jpg"
  const miniRightAd="https://img.freepik.com/premium-psd/black-square-perfume-floating-logo-product-mockup-black-abstract-round-background-3d-render_360590-894.jpg"
  const containerRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (scrollPosition < 400) { setScrollPosition(0) }
    else {
      containerRef.current.scrollTo({
        left: scrollPosition - 400,
        behavior: 'smooth',
      });
      setScrollPosition(scrollPosition - 400);
    }
  };

  const scrollRight = () => {
    containerRef.current.scrollTo({
      left: scrollPosition + 400,
      behavior: 'smooth',
    });
    setScrollPosition(scrollPosition + 400);
  };
  const [Prouducts, SetProducts] = useState([])
  const [Category, setCategory] = useState([])
  useEffect(() => {
    getProducts();
    getCategory();

  }, [])

  const getProducts = () => {
    axios.get("http://localhost:3001/product").then((response) => {
      SetProducts(response.data)

    })
  }

  const getCategory = () => {
    axios.get("http://localhost:3001/home/loading").then((result) => {
      setCategory(result.data.categories);
    })
  }
  return (

    <>
      {/* <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {Prouducts.map(item => (<Card item={item} key={item.ItemID} />))}
        </div>
      </div> */}
      <div className="relative bg-bg w-full h-[5600px] overflow-hidden text-left text-base text-secondary-2 font-title-12px-regular">
        <div className="absolute top-[1334.75px] left-[134.75px] box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
        <div className="absolute top-[1797.75px] left-[134.75px] box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
        <div className="absolute top-[100.75px] left-[367.75px] box-border w-[0.5px] h-[480px] opacity-[0.3] border-r-[0.5px] border-solid border-[1px] border-[black]" />
        <div className="absolute top-[100px] left-[135px] flex flex-col items-start h-[480px] justify-start gap-[16px] text-center text-text">
          {
            Category.map(
              item => (
                <div className="relative leading-[24px]" key={item.CateID}>{item.Name}</div>
              )
            )
          }

        </div>
        <div className="absolute bg-[gray] top-[100px] left-[413px] bg-text2 w-[892px] h-[480px] overflow-hidden text-center text-text">
          <Slide>
            <div className="flex items-center bg-cover h-[480px] w-[892px]">
              <img className="h-[480px] w-[892px] object-cover" src={imagesHeader[0]} />
            </div>
            <div className="flex items-center bg-cover h-[480px] w-[892px]">
              <img className="h-[480px] w-[892px] object-cover" src={imagesHeader[1]} />
            </div>
            <div className="flex items-center bg-cover h-[480px] w-[892px]">
              <img className="h-[480px] w-[892px] object-cover" src={imagesHeader[2]} />
            </div>
          </Slide>
        </div>
        <div className="absolute top-[1219px] bg-[#Db4444] left-[603px] rounded bg-secondary-2 flex flex-row py-4 px-12 items-center justify-center text-text">
          <div className="relative leading-[24px] font-medium text-[white]">
            View All Products
          </div>
        </div>
        <div className="absolute top-[2600px] left-[135px]  bg-text2 w-[1170px] h-[550px] overflow-hidden text-text">
      
            <div className="flex items-center bg-cover h-[550px] w-[1170px] ">
              <img className="h-[550px] w-[1170px] object-cover" src={imagesMid} />
            </div>
       
        </div>
        <div className="absolute top-[666px] left-[135px] flex flex-col items-start justify-start gap-[40px]">
          <div className="flex flex-row items-end justify-start gap-[470px]">
            <div className="flex flex-row items-end justify-start gap-[87px]">
              <div className="h-[103px] flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-5 h-10">
                    <div className="absolute h-full w-full top-[0%] bg-[#DB4444] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                  </div>
                  <div className="relative leading-[20px] font-semibold">
                    Today’s
                  </div>
                </div>
                <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-text2">
                  Flash Sales
                </div>
              </div>
              <div className="relative w-[302px] h-[50px] text-xs text-text2">
                <div className="absolute h-full w-[15.23%] top-[0%] right-[84.77%] bottom-[0%] left-[0%] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[18px] font-medium inline-block w-[31px]">
                    Days
                  </div>
                  <b className="relative text-13xl tracking-[0.04em] leading-[30px] inline-block font-heading-24px-bold w-[46px] h-7 shrink-0">
                    03
                  </b>
                </div>
                <div className="absolute h-full w-[13.91%] top-[0%] right-[58.28%] bottom-[0%] left-[27.81%] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[18px] font-medium inline-block w-[35px]">
                    Hours
                  </div>
                  <b className="relative text-13xl tracking-[0.04em] leading-[30px] font-heading-24px-bold">
                    23
                  </b>
                </div>
                <div className="absolute h-full w-[16.23%] top-[0%] right-[29.47%] bottom-[0%] left-[54.3%] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[18px] font-medium inline-block w-[49px]">
                    Minutes
                  </div>
                  <b className="relative text-13xl tracking-[0.04em] leading-[30px] inline-block font-heading-24px-bold w-[39px] h-7 shrink-0">
                    19
                  </b>
                </div>
                <div className="absolute h-full w-[16.89%] top-[0%] right-[0%] bottom-[0%] left-[83.11%] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[18px] font-medium inline-block w-[52px]">
                    Seconds
                  </div>
                  <b className="relative text-13xl tracking-[0.04em] leading-[30px] font-heading-24px-bold">
                    56
                  </b>
                </div>
                <div className="absolute h-[32%] w-[1.32%] top-[52%] right-[77.81%] bottom-[16%] left-[20.86%] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
                  <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
                </div>
                <div className="absolute h-[32%] w-[1.32%] top-[52%] right-[51.32%] bottom-[16%] left-[47.35%] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
                  <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
                </div>
                <div className="absolute h-[32%] w-[1.32%] top-[52%] right-[22.52%] bottom-[16%] left-[76.16%] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
                  <div className="relative rounded-[50%] bg-hover-button w-1 h-1" />
                </div>
              </div>
            </div>
            <div className="flex flex-row ml-[100px] items-start justify-start gap-[8px] ">
              <button onClick={scrollLeft} className="bg-[#b9b9b9] w-[40px] h-[40px] rounded-full">  <AiFillCaretLeft className="m-[auto]" /></button>
              <button onClick={scrollRight} className="bg-[#b9b9b9] w-[40px] h-[40px] rounded-full"> <AiFillCaretRight className="m-[auto]" /></button>
            </div>
          </div>
          <div className="w-[1308px] flex flex-row items-start justify-start gap-[30px] text-xs text-text transition-all overflow-y-hidden overflow-x-hidden" ref={containerRef} >
            {Prouducts.map(item => (<CardProductHome props={item} key={item.ItemID} />))}
          </div>
        </div>
        <div className="absolute top-[1415px] left-[135px] flex flex-col items-start justify-start gap-[60px]">
          <div className="flex flex-row items-end justify-start gap-[691px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="relative w-5 h-10">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-[#db4444] rounded bg-secondary-2" />
                </div>
                <div className="relative leading-[20px] font-semibold">
                  Categories
                </div>
              </div>
              <div className="relative text-[30px] tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-text2">
                Browse By Category
              </div>
            </div>

          </div>
          <div className="flex flex-row items-start justify-start gap-[30px] text-text2">
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_30px)] leading-[24px]">
                Phones
              </div>
              <BsPhone className="text-[50px] m-auto mt-[20px]" />
            </div>
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_45px)] leading-[24px]">
                Computers
              </div>
              <HiOutlineDesktopComputer className="text-[50px] m-auto mt-[20px]" />

            </div>
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_51px)] leading-[24px]">
                SmartWatch
              </div>
              <BsSmartwatch className="text-[50px] m-auto mt-[20px]" />

            </div>
            <div className="relative rounded bg-secondary-2 shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[170px] h-[145px] overflow-hidden shrink-0 text-text">
              <div className="absolute bottom-[24px] left-[calc(50%_-_34px)] leading-[24px]">
                Camera
              </div>
              <AiOutlineCamera className="text-[50px] m-auto mt-[20px]" />
            </div>
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_51px)] leading-[24px]">
                HeadPhones
              </div>
              <BiHeadphone className="text-[50px] m-auto mt-[20px]" />
            </div>
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_32px)] leading-[24px]">
                Gaming
              </div>
              <SiYoutubegaming className="text-[50px] m-auto mt-[20px]" />
            </div>
          </div>
        </div>
        <div className="absolute top-[1868px] left-[135px] flex flex-col items-start justify-start gap-[60px]">
          <div className="flex flex-row items-end justify-start gap-[611px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="relative w-5 h-10">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bg-[#Db4444] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                </div>
                <div className="relative leading-[20px] font-semibold">
                  This Month
                </div>
              </div>
              <div className="relative text-[30px] tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-text2">
                Best Selling Products
              </div>
            </div>

          </div>
          <div className="flex flex-row items-start justify-start gap-[30px] text-text2">
            {Prouducts.slice(0, 4).map(item => (<CardProductHome props={item} key={item.ItemID} />))}
          </div>
          <div className="rounded bg-secondary-2 flex flex-row py-4 w-[1170px]  px-12 bg-[#db4444] items-center justify-center text-text">
            <div className="relative leading-[24px] font-medium text-[white]">
              View All Products
            </div>
          </div>
        </div>

        <div className="absolute top-[3200px] left-[135px] gap-[60px]">
          <div className=" justify-start gap-[60px]">
            <div className="flex items-start justify-start gap-[672px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-5 h-10">
                    <div className="absolute h-full w-full bg-[#db4444] top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                  </div>
                  <div className="relative leading-[20px] font-semibold">
                    Our Products
                  </div>
                </div>
                <div className="relative font-[600] tracking-[0.04em] leading-[48px] text-[30px] font-heading-24px-bold text-text">
                  Explore Our Products
                </div>
              </div>

            </div>
            <div className="flex flex-col items-start justify-start gap-[60px] text-text2">

              <div className="grid grid-cols-4 w-[1170] gap-[30px]">
                {Prouducts.map(item => (<CardProductHome props={item} key={item.ItemID} />))}
              </div>
            </div>

          </div>
          <div className="rounded bg-secondary-2 flex flex-row py-4 px-12 mt-[50px] bg-[#db4444] items-center justify-center text-text">
            <div className="relative leading-[24px] font-medium text-[white]">
              View All Products
            </div>
          </div>
        </div>
        <div className="absolute top-[4253px] left-[135px] flex flex-col items-start justify-start gap-[60px]">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="relative w-5 h-10">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-[#db4444] bg-secondary-2" />
              </div>
              <div className="relative leading-[20px] font-semibold">
                Featured
              </div>
            </div>
            <div className="relative text-[30px] tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-text2">
              New Arrival
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[30px] text-5xl text-text font-heading-24px-bold ">
            <div className="relative rounded bg-text2 w-[570px] h-[600px] overflow-hidden shrink-0 ">
              <img
                className="absolute  w-[570px] h-[600px] object-cover"
                alt=""
                src={leftAd}
              />
              <div className="absolute top-[446px] left-[32px] flex flex-col items-start justify-start gap-[16px] text-[white] ">
                <div className="flex flex-col items-start justify-start gap-[16px] text-[white]">
                  <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
                    PlayStation 5
                  </div>
                  <div className="relative text-sm leading-[21px] font-title-12px-regular inline-block w-[242px]">
                    Black and White version of the PS5 coming out on sale.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-base text-bg font-title-12px-regular bg-[#db4444] p-[4px] rounded-[5px]">
                  <div className="relative font-medium">
                    Shop Now
                  </div>
                  <img
                    className="relative w-[81px] h-px opacity-[0.5]"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <div className="relative rounded bg-gray-100 w-[570px] h-[284px] overflow-hidden shrink-0">
                <img
                  className="absolute w-[570px] h-[290px] object-cover"
                  alt=""
                  src={topAd}
                />
                <div className="absolute top-[138px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start gap-[16px]">
                    <div className="relative tracking-[0.03em] leading-[24px] font-semibold text-[20px]">
                      Man’s Collections
                    </div>
                    <div className="relative text-sm leading-[21px] font-title-12px-regular inline-block w-[200px]">
                      Featured man collections that give you another vibe.
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-base text-bg font-title-12px-regular">
                    <div className="relative leading-[24px] font-medium">
                      Shop Now
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[30px]">
                <div className="relative rounded bg-text2 w-[270px] h-[284px] overflow-hidden shrink-0">
                  <img
                    className="absolute w-[270px] h-[284px] object-cover"
                    alt=""
                    src={miniLeftAd}
                  />
                  <div className="absolute top-[175px] left-[24px] flex flex-col items-start justify-start gap-[8px] text-[white] ">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative tracking-[0.03em] leading-[24px] font-semibold text-[25px]">
                       Watch
                      </div>
                      <div className="relative text-sm leading-[21px] font-title-12px-regular inline-block w-[191px] text-[15px]">
                       Hublot watch
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start text-base text-bg font-title-12px-regular">
                      <div className="relative leading-[24px] font-medium">
                        Shop Now
                      </div>
                      <img
                        className="relative w-[81px] h-px opacity-[0.5]"
                        alt=""
                        src="/underline.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative rounded bg-text2 w-[270px] h-[284px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[calc(50%_-_142px)] left-[calc(50%_-_135px)] w-[270px] h-[284px]"
                    alt=""
                    src={miniRightAd}
                  />
               
                  <div className="absolute top-[175px] left-[24px] flex flex-col items-start justify-start gap-[8px] text-[white]">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
                        Perfume
                      </div>
                      <div className="relative text-sm leading-[21px] font-title-12px-regular inline-block w-[191px]">
                        GUCCI INTENSE OUD EDP
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start text-base text-bg font-title-12px-regular">
                      <div className="relative leading-[24px] font-medium">
                        Shop Now
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[5161px] left-[249px] flex flex-row items-center justify-center gap-[88px] text-xl text-text2">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <img className="relative w-20 h-20" alt="" src="/services.svg" />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[28px] font-semibold">
                FREE AND FAST DELIVERY
              </div>
              <div className="relative text-sm leading-[21px] text-center">
                Free delivery for all orders over $140
              </div>
            </div>
          </div>
          <div className="w-[262px] flex flex-col items-center justify-start gap-[24px]">
            <img className="relative w-20 h-20" alt="" src="/services1.svg" />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[28px] font-semibold">
                24/7 CUSTOMER SERVICE
              </div>
              <div className="relative text-sm leading-[21px]">
                Friendly 24/7 customer support
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <img className="relative w-20 h-20" alt="" src="/services2.svg" />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[28px] font-semibold">
                MONEY BACK GUARANTEE
              </div>
              <div className="relative text-sm leading-[21px]">
                We reurn money within 30 days
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-center justify-start gap-[24px]">
            <img className="relative w-20 h-20" alt="" src="/services3.svg" />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[28px] font-semibold">
                MONEY BACK GUARANTEE
              </div>
              <div className="relative text-sm leading-[21px]">
                We reurn money within 30 days
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bg-black top-[0px] left-[0px] bg-text2 w-[1440px] text-[white] h-12 overflow-hidden text-sm text-text">
          <div className="absolute top-[12px] right-[136px] flex flex-row items-start justify-start gap-[231px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[21px] inline-block w-[474px] h-[18px] shrink-0">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </div>
              <div className="relative  [text-decoration:underline] leading-[24px] font-semibold text-center">
                ShopNow
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[5px]">

            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default IndexPage;


