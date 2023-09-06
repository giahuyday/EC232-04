import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartLine from "../../components/ChartLine";




const ChartManage = () => {
    const [data, setData] = useState(null); // Initialize the state with null
    const [date, setDate] = useState('2023-06-06')
    useEffect(() => {
        axios.get(`http://localhost:3001/chart/loading?date=${date}`)
            .then((result) => {
                const chartDataValueWeek = [];
                const chartDataPriceWeek = [];
                const chartDataValueYear = [];
                const chartDataPriceYear = [];
                const chartDataValueMonth = [];
                const chartDataPriceMonth = [];
                const chartDataValueQuater = [];
                const chartDataPriceQuater= [];
          

                for (const row of result.data.week[0]) {
                    chartDataValueWeek.push(row.value);
                    chartDataPriceWeek.push(row.totalPrice);
                }
                for (const row of result.data.year[0]) {
                    chartDataValueYear.push(row.value);
                    chartDataPriceYear.push(row.totalPrice);
                }
                for (const row of result.data.month[0]) {
                    chartDataValueMonth.push(row.value);
                    chartDataPriceMonth.push(row.totalPrice);
                }
                for (const row of result.data.quater[0]) {
                    chartDataValueQuater.push(row.value);
                    chartDataPriceQuater.push(row.totalPrice);
                }
                setData({ chartDataValueWeek, chartDataPriceWeek,chartDataValueYear,chartDataPriceYear,chartDataValueMonth,chartDataPriceMonth,chartDataValueQuater,chartDataPriceQuater});
            })
            .catch((error) => {
                console.error(error);
            });
    }, [date]);

    return (
        <div className="my-[50px]">

            <div className="relative w-[1350px] bg-bg min-h-screen h-[1500px] overflow-hidden text-left text-base text-text2 font-title-14px-regular m-auto">
                <div className="absolute top-[150px]  flex flex-col items-start justify-start gap-[80px] w-[1350px] mt-[50px]">
                    <div className="w-[1350px] flex justify-center">
                        <div className="w-[1000px]">
                            <input type="date" onChange={(e) => {
                                setDate(() => e.target.value)
                            }} value={date} className="bg-gray-500 rounded-sm h-[40px] w-[100%] m-auto text-center" />
                        </div>

                    </div>
                    <div className="w-[100%] flex">
                        <div className="w-[100%]">
                            <div className="ml-[50px] mb-[20px] text-[#db4444] font-[600] text-[25px]">Week Chart</div>
                            {data && <ChartLine key={date + 'week'} labels={data.chartDataValueWeek} data={data.chartDataPriceWeek} date={date} typeChart='line'/>}
                        </div>
                        <div className="w-[100%]">
                        <div className="ml-[50px] mb-[20px] text-[#db4444] font-[600] text-[25px]">Month Chart</div>
                            {data && <ChartLine key={date + 'month'} labels={data.chartDataValueMonth} data={data.chartDataPriceMonth} date={date} typeChart='bar' />}
                        </div>
                    </div>
                    <div className="w-[100%] flex">
                        <div className="w-[100%]">
                        <div className="ml-[50px] mb-[20px] text-[#db4444] font-[600] text-[25px]">Quater Chart</div>
                            {data && <ChartLine key={date + 'quater'} labels={data.chartDataValueQuater} data={data.chartDataPriceQuater} date={date} typeChart='radar' />}
                        </div>
                        <div className="w-[100%]">
                        <div className="ml-[50px] mb-[20px] text-[#db4444] font-[600] text-[25px]">Years Chart</div>
                            {data && <ChartLine key={date + 'year'} labels={data.chartDataValueYear} data={data.chartDataPriceYear} date={date} typeChart='pie' />}
                        </div>
                    </div>
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
