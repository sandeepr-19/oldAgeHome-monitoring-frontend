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


const BarChart =  ({ label, xData, title,bg }: { label: string[], xData: number[],title:string,bg:string }) => {
  const [chartData, setChartData] = useState(null);

   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text:title,
      },
    },
  };
  
const data = {
  labels:label,
  datasets: [{
    label:title,
    data:xData,
    backgroundColor:bg ,
  }]
}
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};
export default BarChart;