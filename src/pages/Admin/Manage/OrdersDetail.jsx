import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
 
const OrdersDetail = () => {
    const [dataDetail, setData] = useState();
    const { ID } = useParams();
    const [color, setColor] = useState('white');
    const [percent, setPercent] = useState();

    const progress = (result) => {
        if (result <= 0) return;
        if (result?.[0].Status === 'Pending') {
            setPercent("20%");
            setColor('yellow')
        } else if (result?.[0].Status === 'Processing') {
            setPercent("70%");
            setColor('blue');
        } else if (result?.[0].Status === 'Delivered') {
            setPercent("100%");
            setColor('green');
        } else if (result?.[0].Status === 'Returned') {
            setPercent("100%");
            setColor('white');
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/admin/orders/findOrders/${ID}`)
            .then((result) => {
                setData(result.data);
                progress(result.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
   
    return (
        <div className="w-[full] flex items-center justify-center mt-[60px] ">
           <div className="h-[40px] w-[60%] bg-gray-500 rounded-[30px] flex items-center justify-center">
            <div className="h-[30px] w-[95%] bg-gray-100 rounded-[20px]">
                <div className={`h-[30px] w-[${percent}] rounded-[20px] text-[black] font-[700] bg-[${color}] p-[3px] flex justify-center items-center `}>{dataDetail?.[0].Status}</div>
            </div>
           </div>
        </div>
    );
};

export default OrdersDetail;
