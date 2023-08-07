import React, { useEffect, useRef, useState } from "react";
import { Chart, initTE } from "tw-elements";

// Initialization for ES Users
initTE({ Chart });

const ChartLine = ({ labels, data, date,typeChart }) => {
  const canvasRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (chartInstance) {
      // If a chart instance already exists, destroy it before creating a new one
      setChartInstance(null);
    }
    const newChartInstance = new Chart(canvasElement, {
      type: typeChart,
      data: {
        labels,
        datasets: [
          {
            label: 'Total Price',
            data,
            backgroundColor: [
              'rgba(63, 81, 181, 0.5)',
              'rgba(77, 182, 172, 0.5)',
              'rgba(66, 133, 244, 0.5)',
              'rgba(156, 39, 176, 0.5)',
              'rgba(233, 30, 99, 0.5)',
              'rgba(66, 73, 244, 0.4)',
              'rgba(66, 133, 244, 0.2)',
            ],
          },
        ],
      },
    });
    

    setChartInstance(newChartInstance);
   
  }, [labels, data,date]);

  return (
    <div className="mx-auto w-4/5 overflow-hidden">
      <canvas ref={canvasRef} key={date} id="chart"
       ></canvas>
    </div>
  );
};

export default ChartLine;
