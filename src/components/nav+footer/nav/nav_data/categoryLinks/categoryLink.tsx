"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: object | any;
}

const CategoryLink: React.FC<Props> = ({ item }) => {
  const [categoryFlag, setCategoryFlag] = useState(false);
  return (
    <div
      onMouseOver={() => setCategoryFlag(true)}
      onMouseOut={() => setCategoryFlag(false)}
      key={item.id}
      className=" relative rounded-md overflow-hidden shadow shadow-white "
    >
      <Image
        src={item.displayImages}
        alt="img"
        width={500}
        height={500}
        className=" w-full h-full object-cover"
      />
      <div
        className={` ${
          !categoryFlag ? "hidden" : "block"
        } absolute top-0 left-0 flex items-center justify-center w-full h-full bg-slate-800/80  `}
      >
        <Link href={""} className=" w-1/2">
          <button className=" w-full py-1 text-xs bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryLink;
