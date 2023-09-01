import React from 'react';
import { formatNumber,calDiscount } from '../../../helper/dataHelper.js';
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai';
const CardSearch = ({ props }) => {

    const data = props
    let contentArr = []
    contentArr = data.Content.split(", ")
    return (
        <Link to={`/detail/${data.ItemID}`} >
            <div className="flex flex-col items-start justify-start gap-[16px]  w-[270px] hover:shadow-xl hover:shadow-red-200 rounded-[10px] pb-[10px]">
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0 bg-[#F5F5F5]">
                    <div className="absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row py-1 px-3 items-center justify-center bg-[#DB4444] z-10">
                        <div className="relative leading-[18px] font-[600] text-[white] text-[12px]">-40%</div>
                    </div>
                    <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] rounded-[20px]  overflow-hidden">
                        <img
                            className="relative top-[calc(50%_-_76px)] left-[calc(50%_-_86px)] w-[172px] h-[152px] rounded-[20px] hover:rounded-[20px]  hover:transform hover:scale-150 hover:transition-transform"
                            alt=""
                            src={contentArr[0]}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2 p-[5px] drop-shadow-sm">
                    <div className="relative leading-[24px] font-medium w overflow-hidden w-[270px] text-[20px] whitespace-nowrap text-ellipsis ">
                   {data.Name}
                    </div>

                    <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                        <div className="relative leading-[24px] font-medium text-[#DB4444]">   {formatNumber(calDiscount(data.Price,30))}</div>
                        <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                        {formatNumber(data.Price)}
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                        Rating : 
                        5
                        <div className="flex flex-row items-start justify-start">

                            <AiFillStar className='text-[#d6d654]'/>

                        </div>
                        <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
                            (88)
                        </div>
                        
                    </div>
                        <button className="relative flex hover:color-red">
                            <svg className="flex-2 w-8 h-8 fill-current" viewbox="0 0 24 24">
                                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                            </svg>
                        </button>
                </div>
            </div>
        </Link>
    )
}
export default CardSearch;