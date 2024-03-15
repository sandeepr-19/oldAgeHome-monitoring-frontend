"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip
);


const BarChart =  ({ label, xData }: { label: string[], xData: number[] }) => {
  const [chartData, setChartData] = useState(null);

   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Bottles Filled',
      },
    },
  };
  
const data = {
  labels:label,
  datasets: [{
    label: 'no of bottles filled',
    data:xData,
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  }]
}
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};
export default BarChart;