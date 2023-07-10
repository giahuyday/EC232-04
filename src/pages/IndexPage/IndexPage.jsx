import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import axios from "axios"

const IndexPage = () => {
  //   <>
  // hello ae
  //     </>
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
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {Prouducts.map(item => (<Card item={item} key={item.ItemID} />))}
        </div>
      </div>
      <div className="relative bg-bg w-full h-[5902px] overflow-hidden text-left text-base text-secondary-2 font-title-12px-regular">
        <div className="absolute top-[1334.75px] left-[134.75px] box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
        <div className="absolute top-[1797.75px] left-[134.75px] box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
        <div className="absolute top-[141.75px] left-[367.75px] box-border w-[0.5px] h-[384.5px] opacity-[0.3] border-r-[0.5px] border-solid border-text2" />
        <div className="absolute top-[182px] left-[135px] flex flex-col items-start justify-start gap-[16px] text-center text-text2">
          {
            Category.map(
              item => (
                <div className="relative leading-[24px]" key={item.CateID}>{item.Name}</div>
              )
            )
          }

        </div>
        <div className="absolute bg-[red] top-[182px] left-[413px] bg-text2 w-[892px] h-[344px] overflow-hidden text-center text-text">
          Quảng cáo 
        </div>
        <div className="absolute top-[1219px] left-[603px] rounded bg-secondary-2 flex flex-row py-4 px-12 items-center justify-center text-text">
          <div className="relative leading-[24px] font-medium">
            View All Products
          </div>
        </div>
        <div className="absolute top-[2526px] left-[135px] bg-text2 w-[1170px] h-[500px] overflow-hidden text-text">
          <div className="absolute top-[0px] left-[552px] rounded-[50%] bg-gainsboro [filter:blur(200px)] w-[504px] h-[500px] opacity-[0.3]" />
          <div className="absolute top-[121px] left-[56px] text-29xl tracking-[0.04em] leading-[60px] font-semibold font-heading-24px-bold inline-block w-[443px]">
            Enhance Your Music Experience
          </div>
          <div className="absolute top-[273px] left-[56px] flex flex-row items-start justify-start gap-[24px] text-text2">
            <div className="relative w-[62px] h-[62px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
              <div className="absolute h-[54.84%] w-[51.61%] top-[22.58%] right-[24.19%] bottom-[22.58%] left-[24.19%] flex flex-col items-center justify-start">
                <div className="relative leading-[20px] font-semibold">23</div>
                <div className="relative text-2xs leading-[18px] inline-block w-8 mt-[-4px]">
                  Hours
                </div>
              </div>
            </div>
            <div className="relative w-[62px] h-[62px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
              <div className="absolute h-[54.84%] w-[45.16%] top-[22.58%] right-[27.42%] bottom-[22.58%] left-[27.42%] flex flex-col items-center justify-start">
                <div className="relative leading-[20px] font-semibold">05</div>
                <div className="relative text-2xs leading-[18px] inline-block w-7 mt-[-4px]">
                  Days
                </div>
              </div>
            </div>
            <div className="relative w-[62px] h-[62px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
              <div className="absolute h-[54.84%] w-[67.74%] top-[22.58%] right-[16.13%] bottom-[22.58%] left-[16.13%] flex flex-col items-center justify-start">
                <div className="relative leading-[20px] font-semibold">59</div>
                <div className="relative text-2xs leading-[18px] inline-block w-[43px] mt-[-4px]">
                  Minutes
                </div>
              </div>
            </div>
            <div className="relative w-[62px] h-[62px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
              <div className="absolute h-[54.84%] w-[77.42%] top-[22.58%] right-[11.29%] bottom-[22.58%] left-[11.29%] flex flex-col items-center justify-start">
                <div className="relative leading-[20px] font-semibold">35</div>
                <div className="relative text-2xs leading-[18px] inline-block w-12 mt-[-4px]">
                  Seconds
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[375px] left-[56px] rounded bg-button1 flex flex-row py-4 px-12 items-center justify-center">
            <div className="relative leading-[24px] font-medium">Buy Now!</div>
          </div>
          <div className="absolute top-[69px] left-[56px] leading-[20px] font-semibold text-button1">
            Categories
          </div>
          <div className="absolute top-[37px] left-[526px] w-[600px] h-[420px] overflow-hidden">
            <img
              className="absolute top-[calc(50%_-_165px)] left-[calc(50%_-_284px)] w-[568px] h-[330px] object-cover"
              alt=""
              src="/jbl-boombox-2-hero-020-x1-1-1@2x.png"
            />
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
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-[46px] h-[46px]"
                alt=""
                src="/fill-with-left-arrow.svg"
              />
              <img
                className="relative w-[46px] h-[46px]"
                alt=""
                src="/fill-with-right-arrow.svg"
              />
            </div>
          </div>
          <div className="w-[1308px] overflow-x-auto flex flex-row items-start justify-start gap-[30px] text-xs text-text">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row py-1 px-3 items-center justify-center bg-[#DB4444]">
                  <div className="relative leading-[18px] ">-40%</div>
                </div>
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_76px)] left-[calc(50%_-_86px)] w-[172px] h-[152px] object-cover"
                    alt=""
                    src="/g922500x500-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                <div className="relative leading-[24px] font-medium">
                  HAVIT HV-G92 Gamepad
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$120</div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                    $160
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (88)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row py-1 px-3 items-center justify-center">
                  <div className="relative leading-[18px]">-35%</div>
                </div>
                <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] rounded-t-none rounded-b bg-text2 h-[41px]" />
                <div className="absolute top-[calc(50%_+_92px)] left-[calc(50%_-_48px)] text-base leading-[24px] font-medium text-bg">
                  Add To Cart
                </div>
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye1.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_110px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_95px)] w-[191px] h-[101px] object-cover"
                    alt=""
                    src="/ak90001500x500-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                <div className="relative leading-[24px] font-medium">
                  AK-900 Wired Keyboard
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$960</div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                    $1160
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (75)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row py-1 px-3 items-center justify-center">
                  <div className="relative leading-[18px]">-30%</div>
                </div>
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye2.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[26px] left-[10px] w-[170px] h-[129px] object-cover"
                    alt=""
                    src="/g27cq4500x500-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                <div className="relative leading-[24px] font-medium">
                  IPS LCD Gaming Monitor
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$370</div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                    $400
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (99)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row py-1 px-3 items-center justify-center">
                  <div className="relative leading-[18px]">-25%</div>
                </div>
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[0px] left-[41px] w-[107px] h-[180px] object-cover"
                    alt=""
                    src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                <div className="relative leading-[24px] font-medium">{`S-Series Comfort Chair `}</div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$375</div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                    $400
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/starhalffilled.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (99)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row py-1 px-3 items-center justify-center">
                  <div className="relative leading-[18px]">-25%</div>
                </div>
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[0px] left-[41px] w-[107px] h-[180px] object-cover"
                    alt=""
                    src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                <div className="relative leading-[24px] font-medium">{`S-Series Comfort Chair `}</div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$375</div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                    $400
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/starhalffilled1.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (99)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row py-1 px-3 items-center justify-center">
                  <div className="relative leading-[18px]">-25%</div>
                </div>
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[0px] left-[41px] w-[107px] h-[180px] object-cover"
                    alt=""
                    src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                <div className="relative leading-[24px] font-medium">{`S-Series Comfort Chair `}</div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$375</div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                    $400
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/starhalffilled1.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (99)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1415px] left-[135px] flex flex-col items-start justify-start gap-[60px]">
          <div className="flex flex-row items-end justify-start gap-[691px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="relative w-5 h-10">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                </div>
                <div className="relative leading-[20px] font-semibold">
                  Categories
                </div>
              </div>
              <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-text2">
                Browse By Category
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-[46px] h-[46px]"
                alt=""
                src="/fill-with-left-arrow.svg"
              />
              <img
                className="relative w-[46px] h-[46px]"
                alt=""
                src="/fill-with-right-arrow.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[30px] text-text2">
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_30px)] leading-[24px]">
                Phones
              </div>
              <img
                className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden"
                alt=""
                src="/categorycellphone.svg"
              />
            </div>
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_45px)] leading-[24px]">
                Computers
              </div>
              <img
                className="absolute top-[25px] left-[calc(50%_-_27px)] w-14 h-14 overflow-hidden"
                alt=""
                src="/categorycomputer.svg"
              />
            </div>
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_51px)] leading-[24px]">
                SmartWatch
              </div>
              <div className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                />
                <img
                  className="absolute h-[53.57%] w-[53.57%] top-[23.21%] right-[23.21%] bottom-[23.21%] left-[23.21%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector2.svg"
                />
                <img
                  className="absolute h-[16.07%] w-[28.57%] top-[73.21%] right-[35.71%] bottom-[10.71%] left-[35.71%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector3.svg"
                />
                <img
                  className="absolute h-[16.07%] w-[28.57%] top-[10.71%] right-[35.71%] bottom-[73.21%] left-[35.71%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector4.svg"
                />
                <div className="absolute h-[23.21%] w-[17.86%] top-[39.29%] right-[41.07%] bottom-[37.5%] left-[41.07%] flex flex-row items-end justify-start gap-[4px]">
                  <div className="relative box-border w-0.5 h-[15px] border-r-[2px] border-solid border-text2" />
                  <div className="relative box-border w-0.5 h-2.5 border-r-[2px] border-solid border-text2" />
                  <div className="relative box-border w-0.5 h-3 border-r-[2px] border-solid border-text2" />
                </div>
              </div>
            </div>
            <div className="relative rounded bg-secondary-2 shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[170px] h-[145px] overflow-hidden shrink-0 text-text">
              <div className="absolute bottom-[24px] left-[calc(50%_-_34px)] leading-[24px]">
                Camera
              </div>
              <img
                className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden"
                alt=""
                src="/categorycamera.svg"
              />
            </div>
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_51px)] leading-[24px]">
                HeadPhones
              </div>
              <img
                className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden"
                alt=""
                src="/categoryheadphone.svg"
              />
            </div>
            <div className="relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-200">
              <div className="absolute bottom-[24px] left-[calc(50%_-_32px)] leading-[24px]">
                Gaming
              </div>
              <img
                className="absolute top-[25px] left-[calc(50%_-_28px)] w-14 h-14 overflow-hidden"
                alt=""
                src="/categorygamepad.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[1868px] left-[135px] flex flex-col items-start justify-start gap-[60px]">
          <div className="flex flex-row items-end justify-start gap-[611px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="relative w-5 h-10">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                </div>
                <div className="relative leading-[20px] font-semibold">
                  This Month
                </div>
              </div>
              <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-text2">
                Best Selling Products
              </div>
            </div>
            <div className="rounded bg-secondary-2 flex flex-row py-4 px-12 items-center justify-center text-text">
              <div className="relative leading-[24px] font-medium">View All</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[30px] text-text2">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_73px)] left-[calc(50%_-_70px)] w-[140px] h-[146px] object-cover"
                    alt=""
                    src="/672462-zah9d-5626-002-100-0000-lightthenorthfacexguccicoat-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] font-medium">
                  The north coat
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$260</div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                    $360
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (65)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye1.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_89px)] w-[178px] h-[129px] object-cover"
                    alt=""
                    src="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] font-medium">
                  Gucci duffle bag
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$960</div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                    $1160
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/starhalffilled2.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (65)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye2.svg"
                  />
                </div>
                <div className="absolute top-[35px] left-[40px] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_43px)] left-[calc(50%_-_95px)] w-[191px] h-[95px] object-cover"
                    alt=""
                    src="/gammaxxl240argb1500x500-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] font-medium">
                  RGB liquid CPU Cooler
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$160</div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                    $170
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/starhalffilled3.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (65)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt=""
                    src="/fill-eye.svg"
                  />
                </div>
                <div className="absolute top-[35px] left-[40px] w-[190px] h-[180px] overflow-hidden">
                  <img
                    className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_70px)] w-[140px] h-44 object-cover"
                    alt=""
                    src="/sammoghadamkhamsehl-7mqshl-auunsplash-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] font-medium">
                  Small BookSelf
                </div>
                <div className="flex flex-row items-start justify-start text-secondary-2">
                  <div className="relative leading-[24px] font-medium">$360</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative rounded-11xs-4 w-5 h-5"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                    (65)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[3097px] left-[135px] flex flex-col items-center justify-start gap-[60px]">
          <div className="flex flex-col items-center justify-start gap-[60px]">
            <div className="flex flex-row items-end justify-start gap-[672px]">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="relative w-5 h-10">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                  </div>
                  <div className="relative leading-[20px] font-semibold">
                    Our Products
                  </div>
                </div>
                <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-text2">
                  Explore Our Products
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="relative w-[46px] h-[46px]"
                  alt=""
                  src="/fill-with-left-arrow.svg"
                />
                <img
                  className="relative w-[46px] h-[46px]"
                  alt=""
                  src="/fill-with-right-arrow.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[60px] text-text2">
              <div className="flex flex-row items-start justify-start gap-[30px]">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                    <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-eye.svg"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                      <img
                        className="absolute top-[0px] left-[38px] w-[115px] h-[180px] object-cover"
                        alt=""
                        src="/71rdoexxtrl-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium">
                      Breed Dry Dog Food
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[24px] font-medium">
                          $100
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                            alt=""
                            src="/vector1.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                          (35)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px] text-bg">
                  <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                    <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] rounded-t-none rounded-b bg-text2 h-[41px]" />
                    <div className="absolute top-[calc(50%_+_92px)] left-[calc(50%_-_48px)] leading-[24px] font-medium">
                      Add To Cart
                    </div>
                    <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-eye1.svg"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_110px)] left-[calc(50%_-_99px)] w-[190px] h-[180px] overflow-hidden">
                      <img
                        className="absolute top-[8px] left-[22px] w-[146px] h-[163px] object-cover"
                        alt=""
                        src="/eos250d03500x500-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px] text-text2">
                    <div className="relative leading-[24px] font-medium">
                      CANON EOS DSLR Camera
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[24px] font-medium">
                          $360
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                          (95)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                    <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-eye2.svg"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                      <img
                        className="absolute top-[0px] left-[9px] w-[172px] h-[180px] object-cover"
                        alt=""
                        src="/ideapadgaming3i01500x500-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium">
                      ASUS FHD Gaming Laptop
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[24px] font-medium">
                          $700
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold inline-block w-10 h-5 shrink-0 opacity-[0.5]">
                          (325)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                    <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-eye.svg"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden" />
                    <img
                      className="absolute top-[46px] left-[49px] w-[172px] h-[159px] object-cover"
                      alt=""
                      src="/curologyj7pkvqrtusmunsplash-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium">{`Curology Product Set `}</div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[24px] font-medium">
                          $500
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5 opacity-[0.25]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold inline-block w-10 h-5 shrink-0 opacity-[0.5]">
                          (145)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[30px] text-xs text-text">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                    <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-eye.svg"
                      />
                    </div>
                    <div className="absolute top-[12px] left-[12px] rounded bg-button1 flex flex-row py-1 px-3 items-center justify-center">
                      <div className="relative leading-[18px]">NEW</div>
                    </div>
                    <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                      <img
                        className="absolute top-[calc(50%_-_66px)] left-[calc(50%_-_90px)] w-[180px] h-[133px] object-cover"
                        alt=""
                        src="/newmercedesbenzgtrlicensedrideoncarkidselectrictoycar-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                    <div className="relative leading-[24px] font-medium">
                      Kids Electric Car
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[24px] font-medium">
                          $960
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                          (65)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-5 h-5"
                        alt=""
                        src="/group-1000005935.svg"
                      />
                      <div className="relative rounded-[50%] bg-secondary-2 w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px] text-base text-text2">
                  <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                    <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-eye1.svg"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                      <img
                        className="absolute top-[8px] left-[2px] w-[186px] h-[164px] object-cover"
                        alt=""
                        src="/copa-sense-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium">
                      Jr. Zoom Soccer Cleats
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[24px] font-medium">
                          $1160
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                          (35)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-5 h-5"
                        alt=""
                        src="/group-10000059351.svg"
                      />
                      <div className="relative rounded-[50%] bg-secondary-2 w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                    <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-eye2.svg"
                      />
                    </div>
                    <div className="absolute top-[12px] left-[12px] rounded bg-button1 flex flex-row py-1 px-3 items-center justify-center">
                      <div className="relative leading-[18px]">NEW</div>
                    </div>
                    <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                      <img
                        className="absolute top-[15px] left-[6px] w-[178px] h-[150px] object-cover"
                        alt=""
                        src="/gp11-prd3-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2">
                    <div className="relative leading-[24px] font-medium">
                      GP11 Shooter USB Gamepad
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[24px] font-medium">
                          $660
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/starhalffilled2.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                          (55)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-5 h-5"
                        alt=""
                        src="/group-10000059352.svg"
                      />
                      <div className="relative rounded-[50%] bg-secondary-2 w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px] text-base text-text2">
                  <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
                    <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-heart.svg"
                      />
                      <img
                        className="relative w-[34px] h-[34px]"
                        alt=""
                        src="/fill-eye.svg"
                      />
                    </div>
                    <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
                      <img
                        className="absolute top-[2px] left-[4px] w-[182px] h-44 object-cover"
                        alt=""
                        src="/698717-z8a1x-3475-001-100-0000-lightreversiblequiltedsatinjacket-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px] text-secondary-2">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative leading-[24px] font-medium">
                          $660
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text2">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative rounded-11xs-4 w-5 h-5"
                            alt=""
                            src="/vector.svg"
                          />
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/starhalffilled4.svg"
                          />
                        </div>
                        <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                          (55)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-5 h-5"
                        alt=""
                        src="/group-10000059353.svg"
                      />
                      <div className="relative rounded-[50%] bg-secondary-2 w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded bg-secondary-2 flex flex-row py-4 px-12 items-center justify-center text-text">
            <div className="relative leading-[24px] font-medium">
              View All Products
            </div>
          </div>
        </div>
        <div className="absolute top-[4253px] left-[135px] flex flex-col items-start justify-start gap-[60px]">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="relative w-5 h-10">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
              </div>
              <div className="relative leading-[20px] font-semibold">
                Featured
              </div>
            </div>
            <div className="relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-text2">
              New Arrival
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[30px] text-5xl text-text font-heading-24px-bold">
            <div className="relative rounded bg-text2 w-[570px] h-[600px] overflow-hidden shrink-0">
              <img
                className="absolute top-[89px] left-[29px] w-[511px] h-[511px] object-cover"
                alt=""
                src="/ps5slimgoedkopeplaystation-large-1@2x.png"
              />
              <div className="absolute top-[446px] left-[32px] flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
                    PlayStation 5
                  </div>
                  <div className="relative text-sm leading-[21px] font-title-12px-regular inline-block w-[242px]">
                    Black and White version of the PS5 coming out on sale.
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
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <div className="relative rounded bg-gray-100 w-[570px] h-[284px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[138px] w-[432px] h-[284px] object-cover"
                  alt=""
                  src="/attractivewomanwearinghatposingblackbackground-1@2x.png"
                />
                <div className="absolute top-[138px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start gap-[16px]">
                    <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
                      Women’s Collections
                    </div>
                    <div className="relative text-sm leading-[21px] font-title-12px-regular inline-block w-[255px]">
                      Featured woman collections that give you another vibe.
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
              <div className="flex flex-row items-center justify-center gap-[30px]">
                <div className="relative rounded bg-text2 w-[270px] h-[284px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[calc(50%_-_142px)] left-[calc(50%_-_135px)] w-[270px] h-[284px]"
                    alt=""
                    src="/ellipse-24.svg"
                  />
                  <div className="absolute top-[31px] left-[30px] w-[210px] h-[222px] overflow-hidden">
                    <img
                      className="absolute top-[calc(50%_-_111px)] left-[calc(50%_-_95px)] w-[190px] h-[221px] object-cover"
                      alt=""
                      src="/69694768-amazonechopngcliparttransparentamazonechopng-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[175px] left-[24px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative tracking-[0.03em] leading-[24px] font-semibold">
                        Speakers
                      </div>
                      <div className="relative text-sm leading-[21px] font-title-12px-regular inline-block w-[191px]">
                        Amazon wireless speakers
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
                    src="/ellipse-241.svg"
                  />
                  <div className="absolute top-[calc(50%_-_112px)] left-[calc(50%_-_105px)] w-[210px] h-[222px] overflow-hidden">
                    <img
                      className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_101px)] w-[201px] h-[203px] object-cover"
                      alt=""
                      src="/652e82cd70aa6522dd785109a455904c@2x.png"
                    />
                  </div>
                  <div className="absolute top-[175px] left-[24px] flex flex-col items-start justify-start gap-[8px]">
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
                      <img
                        className="relative w-[81px] h-px opacity-[0.5]"
                        alt=""
                        src="/underline.svg"
                      />
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
        <div className="absolute top-[5462px] left-[0px] bg-text2 w-[1440px] h-[440px] overflow-hidden text-bg">
          <div className="absolute top-[376px] left-[0px] flex flex-col items-center justify-start gap-[16px] opacity-[0.4]">
            <img
              className="relative w-[1440px] h-px opacity-[0.5]"
              alt=""
              src="/underline1.svg"
            />
            <div className="flex flex-row items-center justify-start opacity-[0.6]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/iconcopyright.svg"
                />
                <div className="relative leading-[24px]">
                  Copyright Rimel 2022. All right reserved
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[80px] left-[135px] flex flex-row items-start justify-center gap-[87px] text-xl text-text">
            <div className="flex flex-col items-start justify-start gap-[16px] text-5xl font-heading-24px-bold">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative w-[118px] h-6">
                    <b className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[24px]">
                      Exclusive
                    </b>
                  </div>
                  <div className="relative text-xl leading-[28px] font-medium font-title-12px-regular">
                    Subscribe
                  </div>
                </div>
                <div className="relative text-base leading-[24px] font-title-12px-regular">
                  Get 10% off your first order
                </div>
              </div>
              <div className="rounded box-border w-[217px] flex flex-row py-3 pr-0 pl-4 items-center justify-start gap-[32px] text-base font-title-12px-regular border-[1.5px] border-solid border-text">
                <div className="relative leading-[24px] opacity-[0.4]">
                  Enter your email
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/iconsend.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-medium">Support</div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="relative leading-[24px] inline-block w-[175px]">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </div>
                <div className="relative leading-[24px]">exclusive@gmail.com</div>
                <div className="relative leading-[24px]">+88015-88888-9999</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-medium">Account</div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="relative leading-[24px]">My Account</div>
                <div className="relative leading-[24px]">Login / Register</div>
                <div className="relative leading-[24px]">Cart</div>
                <div className="relative leading-[24px]">Wishlist</div>
                <div className="relative leading-[24px]">Shop</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-medium">
                Quick Link
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="relative leading-[24px]">Privacy Policy</div>
                <div className="relative leading-[24px]">Terms Of Use</div>
                <div className="relative leading-[24px]">FAQ</div>
                <div className="relative leading-[24px]">Contact</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="relative leading-[28px] font-medium">
                  Download App
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px] text-xs">
                  <div className="relative leading-[18px] font-medium opacity-[0.7]">
                    Save $3 with App New User Only
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative bg-text2 w-20 h-20 overflow-hidden shrink-0">
                      <img
                        className="absolute top-[0px] left-[0px] w-20 h-20 object-cover"
                        alt=""
                        src="/qrcode-1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <img
                        className="relative w-[110px] h-10 overflow-hidden shrink-0"
                        alt=""
                        src="/googleplay.svg"
                      />
                      <div className="relative bg-text2 w-[110px] h-10 overflow-hidden shrink-0">
                        <img
                          className="absolute top-[2.4px] left-[2.4px] rounded w-[105.2px] h-[35.2px] object-cover"
                          alt=""
                          src="/downloadappstore@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[24px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/iconfacebook.svg"
                />
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icontwitter.svg"
                />
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/iconinstagram.svg"
                />
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/iconlinkedin.svg"
                />
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
              <div className="relative leading-[21px]">English</div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/dropdown1.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[88px] left-[135px] flex flex-row items-center justify-start gap-[148px] text-5xl text-text2 font-heading-24px-bold">
          <div className="flex flex-row items-start justify-start gap-[190px]">
            <div className="relative w-[118px] h-6">
              <b className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[24px]">
                Exclusive
              </b>
            </div>
            <div className="flex flex-row items-start justify-start gap-[48px] text-center text-base font-title-12px-regular">
              <div className="flex flex-col items-center justify-start">
                <div className="relative leading-[24px]">Home</div>
                <img
                  className="relative w-12 h-px opacity-[0.5]"
                  alt=""
                  src="/underline2.svg"
                />
              </div>
              <div className="relative w-[66px] h-6">
                <div className="absolute top-[0%] left-[0%] leading-[24px]">
                  Contact
                </div>
              </div>
              <div className="relative w-12 h-6">
                <div className="absolute top-[0%] left-[0%] leading-[24px]">
                  About
                </div>
              </div>
              <div className="relative w-[61px] h-6">
                <div className="absolute top-[0%] left-[0%] leading-[24px]">
                  Sign Up
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[24px] text-xs font-title-12px-regular">
            <div className="rounded bg-secondary flex flex-col py-[7px] pr-3 pl-5 items-center justify-center">
              <div className="flex flex-row items-center justify-center gap-[34px]">
                <div className="relative leading-[18px] opacity-[0.5]">
                  What are you looking for?
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/component-2.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[16px]">
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/wishlist.svg"
              />
              <img
                className="relative w-8 h-8"
                alt=""
                src="/cart1-with-buy.svg"
              />
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/user.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[142px] left-[0px] w-[1440px] h-[0.5px]"
          alt=""
          src="/line-3.svg"
        />
        <img
          className="absolute top-[5384px] left-[1305px] w-[46px] h-[46px]"
          alt=""
          src="/fill-with-up-arrow.svg"
        />
      </div>
    </>
  )
};

export default IndexPage;


