import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatNumber, formatDate } from '../../../helper/dataHelper.js';
const OrdersDetail = () => {
    const [dataDetail, setData] = useState();
    const { ID } = useParams();
    const [color, setColor] = useState('white');
    const [percent, setPercent] = useState();
    const options = ["Processing", "Pending", "Delivered", "Returned"];
    const [selectedOption, setSelectedOption] = useState("");
    
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        axios.post(`http://localhost:3001/admin/orders/changeStatus/${dataDetail?.[0].OrderID}/${event.target.value}`)
    };
    const progress = (result) => {
        if (result <= 0) return;
        if (result?.[0].Status === 'Pending') {
            setPercent("20%");
            setColor('yellow')
        } else if (result?.[0].Status === 'Processing') {
            setPercent("20%");
            setColor('#50bbb6');
        } else if (result?.[0].Status === 'Delivered') {
            setPercent("70%");
            setColor('gray');
        } else if (result?.[0].Status === 'Returned') {
            setPercent("100%");
            setColor('white');
        }
        else if (result?.[0].Status === 'Success') {
            setPercent("100%");
            setColor('#64d064');
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/admin/orders/findOrders/${ID}`)
            .then((result) => {
                setData(result.data);
                progress(result.data);
                console.log(dataDetail[0])
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [selectedOption]);

    return (
        <>
            <div className="w-[full] flex items-center justify-center mt-[60px] ">
                <div className="h-[40px] w-[60%] bg-gray-500  rounded-[30px] flex items-center justify-center">
                    <div className="h-[30px] w-[95%]  bg-gray-300 rounded-[20px]">
                        <div className={`h-[30px] w-[${percent}] rounded-[20px] text-[black] font-[700] bg-[${color}] p-[3px] flex justify-center items-center `}>{dataDetail?.[0].Status}</div>
                    </div>
                </div>
                <div>
                    <label htmlFor="orderStatus">Select an order status:</label>
                    <select id="orderStatus" value={selectedOption} onChange={handleSelectChange}>
                        <option value="">Select an option</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                  
                </div>
            </div>
            <div className="grid grid-cols-2 w-[100%] h-[30px] gap-[15px] mt-[30px] font-[800] text-[15px] text-[#4866d3]">
                <div className="p-[30px]"><span className="text-[black] font-[600]">Account ID: </span>{dataDetail?.[0].AccountID}</div>
                <div className="p-[30px]"><span className="text-[black] font-[600]">Order ID: </span>{dataDetail?.[0].OrderID}</div>
                <div className="p-[30px]"><span className="text-[black] font-[600]">Date: </span>{formatDate(dataDetail?.[0].Day)}</div>
                <div className="p-[30px]"><span className="text-[black] font-[600]">Address: </span>{dataDetail?.[0].Delivery_Address}</div>
                <div className="p-[30px]"><span className="text-[black] font-[600]">GuessName: </span>{dataDetail?.[0].GuessName}</div>
                <div className="p-[30px]"><span className="text-[black] font-[600]">Phone Number: </span>{dataDetail?.[0].Phone}</div>
                <div className="p-[30px]"><span className="text-[black] font-[600]">Discount: </span>{dataDetail?.[0].PointUsed}</div>
                <div className="p-[30px]"><span className="text-[black] font-[600]">Ship: </span>{dataDetail?.[0].ShipFee}</div>
                <div className="p-[30px] font-[500] text-[15px] text-[black]"><span className="text-[black] font-[600] text-[15px]">Note: </span>{dataDetail?.[0].note}</div>
                <div className="p-[30px]"><span className="text-[black] font-[600]">Price: </span>{formatNumber(dataDetail?.[0].Total_Price)}</div>


            </div>
        </>
    );
};

export default OrdersDetail;
