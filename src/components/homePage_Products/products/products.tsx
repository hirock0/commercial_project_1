"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Likes from "./likes/Likes";
import Comment from "./comments/comment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Style from "./products.module.css";

interface Props {
  searchProducts: string | any;
}

const Products: React.FC<Props> = ({ searchProducts }) => {
  const router = useRouter();

  const [products, setProducts] = useState([]);

  const onProducts = async () => {
    try {
      const reqApi = await axios.get("/pages/api/products");
      setProducts(reqApi?.data?.Products);
    } catch (error: any) {
      throw new Error("something goes wrong", error);
    }
  };

  const FilterProducts = products?.filter((item: any) => {
    if (item?.productName.toLowerCase().includes(searchProducts)) {
      return true;
    }
  });

  const [perPageFlag, setPerPageFlag] = useState(0);

  const perPage = 20;

  const productsIndex = Math.max(Math.ceil(FilterProducts.length / perPage));

  const SlicePerPageProducts = FilterProducts?.slice(
    perPage * perPageFlag,
    perPage * (perPageFlag + 1)
  );

  const onNext = () => {
    setPerPageFlag((prev) => prev + 1);
    router.push("#main");
  };
  const onPrev = () => {
    setPerPageFlag((prev) => prev - 1);
    router.push("#main");
  };

  useEffect(() => {
    onProducts();
  }, []);
  return (
    <div className={` w-full `}>
      <div
        className={`${
          FilterProducts.length !== 0
            ? "grid max-md:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
            : null
        }  `}
      >
        {FilterProducts.length !== 0 ? (
          SlicePerPageProducts?.map((item: any, index: any) => (
            <div
              key={index}
              style={{ boxShadow: "0 0 5px white" }}
              className=" rounded-md overflow-hidden relative max-md:h-80 max-sm:h-96 md:h-80 "
            >
              <Image
                priority
                src={item?.productImageLink}
                alt="car"
                width={500}
                height={500}
                className=" h-full w-full object-cover"
              />

              <div className="  flex-col text-xs text-white absolute bottom-0 left-0 h-3/6 w-full flex items-center justify-center backdrop:filter backdrop-blur-sm pr-5 pl-5">
                <h1 className="text-base">{item?.productName}</h1>
                <h1>&#2547; {new Number(item?.price).toLocaleString()} tk</h1>
                <Link
                  href={`/car_details/${item?._id ? item?._id.toString() : ""}`}
                  className="  w-1/2 rounded-sm mt-2 h-6 bg-orange-600 hover:bg-orange-700 active:bg-orange-800"
                >
                  <button className=" w-full h-full">Details</button>
                </Link>
                {/* like and comments_start */}
                <div className=" flex mt-2 pt-2 border-t-2   w-full justify-between">
                  <div className=" cursor-pointer">
                    <Likes
                      likeData={item?.likes || ""}
                      productId={item?._id || ""}
                    />
                  </div>
                  <div className=" cursor-pointer ">
                    <Comment
                      productId={item._id}
                      comments={item?.comments.toReversed()}
                    />
                  </div>
                </div>
                {/* like and comments_end */}
              </div>
            </div>
          ))
        ) : (
          <div
            className={`${Style.searchBackground}  text-white  h-screen w-full flex items-center justify-center`}
          >
            <h1 className=" text-xl max-md:text-base">
              There are no products.
            </h1>
          </div>
        )}
      </div>
      <div className=" text-white mt-10 flex justify-center items-center">
        <div className=" w-1/2 max-md:w-full flex items-center justify-between">
          <button
            disabled={perPageFlag - 1 < 0 ? true : false}
            onClick={onPrev}
          >
            Previous
          </button>
          <h1 className=" flex items-center gap-5 max-md:gap-3 border max-md:px-3 px-5 py-1 rounded-md">
            {perPageFlag + 1} <span> out of</span> {productsIndex}
          </h1>
          <button
            onClick={onNext}
            disabled={
              perPageFlag + 1 == productsIndex || FilterProducts.length == 0
                ? true
                : false
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
