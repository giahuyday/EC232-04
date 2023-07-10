import React from 'react';
import { formatNumber } from '../helper/dataHelper.js';

const CardProductHome = (props) => {
    const data = props
    return (
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
           {data.Name}
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
            <div className="relative leading-[24px] font-medium">${formatNumber(10000)}</div>
            <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
              ${data.Price}
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
    )
}
export default CardProductHome;