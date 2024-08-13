"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Likes from "./likes/Likes";
import Comment from "./comments/comment";

interface Props {
  searchProducts: string | any;
}

const Products: React.FC<Props> = ({ searchProducts }) => {
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
          FilterProducts?.map((item: any, index: any) => (
            <div
              key={index}
              style={{
                background: `url(${item?.productImageLink})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
              className=" relative max-md:h-80 max-sm:h-96 md:h-80"
            >
              <div className=" flex-col text-xs text-white absolute bottom-0 left-0 h-3/6 w-full flex items-center justify-center backdrop:filter backdrop-blur-sm pr-5 pl-5">
                <h1 className="text-base">{item?.productName}</h1>
                <h1>{item?.price} tk</h1>
                <button className="  w-1/2 rounded-sm mt-2 h-6 bg-red-600 hover:bg-red-700 active:bg-red-800">
                  Details
                </button>
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
          <div className=" bg-white h-screen w-full flex items-center justify-center">
            <h1 className=" text-xl">There are no products</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
