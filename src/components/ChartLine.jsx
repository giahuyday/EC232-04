import React, { useEffect, useRef, useState } from "react";
import { Chart, initTE } from "tw-elements";

// Initialization for ES Users
initTE({ Chart });

const ChartLine = ({ labels, data }) => {
  const canvasRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (chartInstance) {
      // If a chart instance already exists, destroy it before creating a new one
      setChartInstance(null);
    }
    const newChartInstance = new Chart(canvasElement, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Tháng 1",
            data,
          },
        ],
      },
    });

    setChartInstance(newChartInstance);

   
  }, [labels, data]);

  return (
    <div className="mx-auto w-3/5 overflow-hidden">
      <canvas ref={canvasRef} id="chart"></canvas>
    </div>
  );
};

export default ChartLine;
