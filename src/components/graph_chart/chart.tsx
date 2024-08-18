"use client";

import Style from "./chart.module.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: `Sell`,
        data: [12, 10, 8, 15, 17, 20],
        backgroundColor: [
          "red",
          "blue",
          "rgba(105, 250, 255",
          "rgba(117, 255, 143)",
          "rgba(255, 0, 217)",
          "rgba(106, 0, 245)",
        ],

        borderWidth: 1,
      },
    ],
  };
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Reputation Rate",
      },
    },
  };
  return (
    <div
      className={`${Style.chartContainer}  flex items-center justify-center `}
    >
      <div className=" w-4/6 max-sm:w-4/6">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
