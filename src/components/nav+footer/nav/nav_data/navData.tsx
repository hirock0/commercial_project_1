"use client";

import Image from "next/image";
import { useState } from "react";
import CategoryLink from "./categoryLinks/categoryLink";
import Link from "next/link";

interface Props {
  title: string;
  item: object | any;
}

const NavData: React.FC<Props> = ({ title, item }) => {
  const [flag, setFlag] = useState(false);
  const [dataContainer, setDataContainer] = useState<any>({});

  const onMouseEnterFuntion = (data: any) => {
    setDataContainer(data);
    setFlag(true);
  };
  const onMouseLeaveFuntion = () => {
    setFlag(false);
    setDataContainer({});
  };

  return (
    <li
      onMouseEnter={() => onMouseEnterFuntion(item)}
      onMouseLeave={onMouseLeaveFuntion}
      className=" md:h-20 flex items-center max-md:hidden cursor-pointer"
    >
      {title}
      <div
        className={` ${
          !flag ? "hidden" : "block"
        } fixed top-20 h-3/6 py-5 left-0 backdrop:filter backdrop-blur-3xl w-full flex items-center justify-center `}
      >
        <div
          className={` ${
            dataContainer?.data !== undefined
              ? "grid grid-cols-3 gap-5 w-5/6 h-full  m-auto"
              : null
          }`}
        >
          {dataContainer?.data !== undefined ? (
            dataContainer?.data.map((item: any, index: any) => (
              <CategoryLink key={index} item={item} />
            ))
          ) : item?.descriptions !== undefined ? (
            <div>
              <h1 className="text-center text-xl mb-5">About Our Company</h1>
              <p className=" text-wrap px-10">{item?.descriptions}</p>
              <div className=" flex items-center justify-center mt-10 ">
                <Link href={""}>
                  <button className=" px-5 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-sm shadow shadow-white ">
                    Click this link
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="">
              <ul className=" flex flex-col gap-3">
                <li className=" hover:underline  flex items-center gap-5">
                  <div className="">{item?.contacts?.email?.icon}</div>{" "}
                  <h1 className="">{item?.contacts?.email?.email}</h1>
                </li>
                <li className=" hover:underline flex items-center gap-5">
                  <div className="">{item?.contacts?.phone?.icon}</div>{" "}
                  <h1 className="">{item?.contacts?.phone?.phone}</h1>
                </li>
                <li className=" hover:underline active:text-yellow-600 flex items-center gap-5">
                  <div className="">{item?.contacts?.facebook?.icon} </div>{" "}
                  <div className="">
                    <Link
                      target="_blank"
                      href={
                        "https://www.facebook.com/profile.php?id=100028605347325"
                      }
                    >
                      Facebook
                    </Link>
                  </div>
                </li>
                <li className=" hover:underline active:text-yellow-600 flex items-center gap-5">
                  <div className="">{item?.contacts?.instagram?.icon} </div>{" "}
                  <div className="">
                    <Link
                      target="_blank"
                      href={
                        "https://www.facebook.com/profile.php?id=100028605347325"
                      }
                    >
                      Instagram
                    </Link>
                  </div>
                </li>
                <li className=" hover:underline active:text-yellow-600 flex items-center gap-5">
                  <div className="">{item?.contacts?.twitter?.icon} </div>{" "}
                  <div className="">
                    <Link
                      target="_blank"
                      href={
                        "https://www.facebook.com/profile.php?id=100028605347325"
                      }
                    >
                      Twitter
                    </Link>
                  </div>
                </li>
                <li className=" hover:underline active:text-yellow-600 flex items-center gap-5">
                  <div className="">{item?.contacts?.linkedIn?.icon} </div>{" "}
                  <div className="">
                    <Link
                      target="_blank"
                      href={
                        "https://www.facebook.com/profile.php?id=100028605347325"
                      }
                    >
                      linkedIn
                    </Link>
                  </div>
                </li>
                <li className=" hover:underline  flex items-center gap-5">
                  <div className="">{item?.contacts?.address?.icon}</div>{" "}
                  <h1 className="">{item?.contacts?.address?.address}</h1>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default NavData;
