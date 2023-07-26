import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartLine from "../../components/ChartLine";
import Datepick from "../../components/Datepick";


const ChartManage = () => {
    const [data, setData] = useState(null); // Initialize the state with null

    useEffect(() => {
        axios.get('http://localhost:3001/chart/loading')
            .then((result) => {
                const chartDataValue = [];
                const chartDataPrice = [];

                for (const row of result.data[0]) {
                    chartDataValue.push(row.value);
                    chartDataPrice.push(row.totalPrice);
                }

                setData({ chartDataValue, chartDataPrice });
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="my-[50px]">

            <div className="relative bg-bg w-full h-[700px] overflow-hidden text-left text-base text-text2 font-title-14px-regular">

                <div className="absolute top-[150px] left-[135px] flex flex-col items-start justify-start gap-[80px] w-[1170px] mt-[50px]">
                    <div className="w-[1170px] flex justify-center">
                        <div className="w-[1000px]">
                            <Datepick />
                        </div>

                    </div>
                    {data && <ChartLine labels={data.chartDataValue} data={data.chartDataPrice} />}
                </div>
                <div className="absolute top-[40px] left-[135px] flex flex-row items-center justify-start gap-[12px] text-sm">
                    <Link to={'/'}>
                        <div className="relative leading-[21px] opacity-[0.5] color-[gray] font-[700] text-[21px]">Manage</div>
                    </Link>
                    <div>/</div>
                    <div className="relative leading-[21px] text-[21px] font-[600]">Chart</div>
                    <img
                        className="relative w-[13.19px] h-0 hidden"
                        alt=""
                        src="/line-14.svg"
                    />

                </div>
            </div>
        </div>
    )
}

export default ChartManage;
