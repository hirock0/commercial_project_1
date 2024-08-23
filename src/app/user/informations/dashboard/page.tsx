"use client";
import { AllApiHandler } from "@/utils/redux/slices/slice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "./dashboard.module.css";

import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  elements,
} from "chart.js";
import Image from "next/image";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  elements
);

const DashboardPage = () => {
  const dispatch: any = useDispatch();
  const selectData = useSelector((state: any) => state?.Slice.data);
  const user = selectData?.users;
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
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  useEffect(() => {
    dispatch(AllApiHandler());
  }, []);

  return (
    <main className="  bg-slate-100 pb-10 pt-10 ">
      <div className=" flex items-center gap-3">
        <Image
          src={user?.userImg}
          alt=""
          width={30}
          height={30}
          className=" rounded-full"
        />
        <h1>Buying Dashboard</h1>
      </div>
      {/* ------------------------- */}
      <div
        className={`${Style.MonthBuyingDiv} mt-5 grid grid-cols-3 gap-3 text-xs w-4/5 max-sm:w-full`}
      >
        <select name="" id="">
          <option value="" disabled selected>
            Month
          </option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select name="" id="">
          <option value="" disabled selected>
            Select a car
          </option>
          <option value="tesla-model-s">Tesla Model S</option>
          <option value="ford-mustang">Ford Mustang</option>
          <option value="chevrolet-camaro">Chevrolet Camaro</option>
          <option value="bmw-3-series">BMW 3 Series</option>
          <option value="audi-a4">Audi A4</option>
          <option value="mercedes-c-class">Mercedes-Benz C-Class</option>
          <option value="porsche-911">Porsche 911</option>
          <option value="honda-civic">Honda Civic</option>
          <option value="toyota-corolla">Toyota Corolla</option>
          <option value="nissan-gt-r">Nissan GT-R</option>
        </select>
        <select name="" id="">
          <option value="" disabled selected>
            Select a year
          </option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </select>
      </div>
      {/* ------------------------- */}
      <div className=" mt-5 flex items-center   justify-center ">
        <div
          className={` ${Style.cardSection_1} w-full  h-full  max-sm:w-full grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-5`}
        >
          {/* card_1_start */}
          <div>
            <div className="">
              <h1 className=" ">Total Cars</h1>
            </div>
            <div className="  flex flex-col  items-center mt-10">
              <h1 className=" text-4xl font-semibold">2,104</h1>
              <h1 className="text-green-400 mt-2 font-semibold">20%</h1>
              <h1 className=" mt-10">Previous 30 days</h1>
            </div>
          </div>
          {/* card_1_end */}
          {/* ----------- */}
          {/* card_2_start */}
          <div>
            <div className="">
              <h1 className=" ">Order per Month</h1>
            </div>
            <div className="  flex flex-col  items-center mt-10">
              <h1 className=" text-4xl font-semibold">2,104</h1>
              <h1 className="text-green-400 mt-2 font-semibold">20%</h1>
              <h1 className=" mt-10">Previous 30 days</h1>
            </div>
          </div>
          {/* card_2_end */}
          {/* ------------- */}
          {/* card_3_start*/}
          <div>
            <div className="">
              <h1 className=" ">Anarage Contacts</h1>
            </div>
            <div className="  flex flex-col  items-center mt-10">
              <h1 className=" text-4xl font-semibold">2,104</h1>
              <h1 className="text-green-400 mt-2 font-semibold">20%</h1>
              <h1 className=" mt-10">Previous 30 days</h1>
            </div>
          </div>
          {/* card_3_end*/}
          {/* ------------ */}
          <div>
            <div className="">
              <h1 className=" ">Growth Rate</h1>
            </div>
            <div className="  flex flex-col  items-center mt-10">
              <h1 className=" text-4xl font-semibold">2,104</h1>
              <h1 className="text-green-400 mt-2 font-semibold">20%</h1>
              <h1 className=" mt-10">Previous 30 days</h1>
            </div>
          </div>
          {/* ---------- */}
        </div>
      </div>
      {/* ------------------------ */}
      <div
        className={`${Style.cardSection_2}  mt-10 flex max-md:flex-col gap-5 max-md:gap-3  `}
      >
        <div>
          <div className={` flex items-center justify-center w-full h-full `}>
            <div className=" w-full h-full">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>

        {/* ----------------- */}

        <div>
          <div className={` flex items-center justify-center w-full h-full `}>
            <div className=" w-full h-full">
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
