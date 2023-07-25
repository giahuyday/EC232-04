import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ChartLine from "../../components/ChartLine";
import {
    Datepicker,
    Input,
    initTE,
} from "tw-elements";

initTE({ Datepicker, Input });
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

            <div className="flex justify-center">
                <div
                    class="relative mb-3"
                    data-te-datepicker-init
                    data-te-format="dd, mmm, yyyy"
                    data-te-input-wrapper-init>
                    <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="Select a date" />
                    <label
                        for="floatingInput"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Select a date</label>
                </div>
            </div>

            <div className="relative bg-bg w-full h-[700px] overflow-hidden text-left text-base text-text2 font-title-14px-regular">

                <div className="absolute top-[150px] left-[135px] flex flex-col items-start justify-start gap-[80px] w-[1170px] mt-[50px]">
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
