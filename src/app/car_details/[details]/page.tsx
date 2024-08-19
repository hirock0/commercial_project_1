"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import toast from "react-hot-toast";

const Car_details = (props: any) => {
  const productId = props?.params?.details;
  const [productDetails, setProductDetails] = useState<any>([]);

  const findProduct = async (): Promise<void> => {
    try {
      const product = await axios.get(`/pages/api/products/${productId}`);
      setProductDetails(product?.data.Product);
    } catch (error: any) {
      throw new Error("something goes wrong", error);
    }
  };

  useEffect(() => {
    findProduct();
  }, []);

  return (
    <main className=" ">
      <div className=" flex flex-col items-center justify-center mt-10">
        <div className=" flex flex-col lg:flex-row gap-5">
          <div className=" w-full lg:w-1/2 ">
            <Image
              priority
              src={productDetails?.productImageLink}
              alt="product"
              width={500}
              height={500}
              className=" object-cover w-full h-full rounded-md"
            />
          </div>

          <div className=" lg:w-1/2 w-full p-5  bg-slate-800  flex items-center justify-center rounded-md  ">
            <div className=" overflow-hidden lg:w-[500px] md:w-[500px] max-md:w-[400px] max-sm:w-[250px] ">
              <Swiper
                pagination={true}
                spaceBetween={50}
                // slidesPerView={2}
                loop={true}
                autoplay={{
                  delay: 3000,
                }}
                modules={[Pagination, Navigation, Autoplay]}
              >
                {productDetails?.productAnotherImages?.map(
                  (item: any, index: any) => (
                    <SwiperSlide key={index}>
                      <Image
                        priority
                        src={item?.image}
                        alt="product"
                        width={500}
                        height={500}
                        className=" h-full w-full rounded-sm"
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>

        <h1 className=" mt-5 text-2xl">{productDetails?.productName}</h1>
        <h1>&#2547; {new Number(productDetails?.price).toLocaleString()} tk</h1>
        <div className=" w-full flex items-center justify-center">
          <button
            onClick={() =>
              toast.success("payment funtion will be added later.")
            }
            className=" mt-5 bg-red-600 text-white pt-3 pb-3 rounded-md hover:bg-red-700 active:bg-red-800 border w-1/2"
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="bg-slate-200 p-5 pb-5 mt-5 rounded-md  ">
        <div className=" max-sm:flex-col max-sm:items-center max-sm:gap-5 lg:w-4/5 max-md:w-4/5  max-sm:w-full flex  justify-between  m-auto">
          <ul className=" ">
            <li>
              <span className=" text-blue-800">Brand: </span>
              <span>{productDetails?.brand}</span>
            </li>
            <li>
              <span className=" text-blue-800">Category: </span>
              <span>{productDetails?.category}</span>
            </li>
            <li>
              <span className=" text-blue-800">Imported From: </span>
              <span>{productDetails?.importFrom}</span>
            </li>
            <li>
              <span className=" text-blue-800">Made in: </span>
              <span>{productDetails?.madeIn}</span>
            </li>
            <li>
              <span className=" text-blue-800">Rank in the world: </span>
              <span>{productDetails?.rank}</span>
            </li>
            <li>
              <span className=" text-blue-800">Stock: </span>
              <span>{productDetails?.stock}</span>
            </li>
          </ul>
          <div className=" w-3/6 max-sm:w-full  ">
            <h1 className=" underline underline-offset-8 text-xl">
              Descriptions:
            </h1>
            <p className=" mt-3">{productDetails?.productDescriptions}</p>
          </div>
        </div>
      </div>
      {/* our Company */}
      <div className=" mt-10">
        <div className="">
          <h1 className="text-center text-xl font-semibold">Our Company</h1>
          <p className=" mt-3">
            Hirock Auto Mobile is a premier automotive company dedicated to
            delivering high-quality vehicles that combine innovation,
            performance, and reliability. With a focus on customer satisfaction,
            we offer a diverse range of cars designed to meet the needs of
            modern drivers. At Hirock Auto Mobile, we are committed to advancing
            the future of transportation through cutting-edge technology,
            sustainable practices, and exceptional craftsmanship, ensuring every
            journey is both comfortable and efficient. Whether you’re looking
            for a sleek sedan, a rugged SUV, or an eco-friendly electric
            vehicle, Hirock Auto Mobile has the perfect solution to get you
            moving.
          </p>
        </div>
        {/* ---------------------- */}
        <div className="">
          <h1 className="text-center mt-5 font-semibold">Our Locations</h1>
          <div className=" mt-5 flex flex-col md:flex-row gap-5">
            <div className=" md:w-1/2 h-full">
              <div className="">
                <h1>Location 1</h1>
                <p>Bahadurpur,Mainrampur,Jashore</p>
              </div>
              <div className="mt-5 h-96 rounded-sm overflow-hidden">
                <iframe
                  className="w-full h-full "
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7316.169392784686!2d89.28382127592845!3d23.007974132299523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssantosh%20garage%20manirampur%2Cbangladesh!5e1!3m2!1sen!2sbd!4v1723713264248!5m2!1sen!2sbd"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className=" md:w-1/2 h-full ">
              <div className="">
                <h1>Location 2</h1>
                <p>Bahadurpur,Mainrampur,Jashore</p>
              </div>
              <div className="mt-5 h-96 rounded-sm overflow-hidden">
                <iframe
                  className="w-full h-full "
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7316.169392784686!2d89.28382127592845!3d23.007974132299523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssantosh%20garage%20manirampur%2Cbangladesh!5e1!3m2!1sen!2sbd!4v1723713264248!5m2!1sen!2sbd"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------- */}
        {/* stuff panel_start */}
        <div className=" mt-5 grid md:grid-cols-2 gap-5">
          <div className=" w-full  border bg-slate-900 p-5 rounded-md  text-white">
            <h1 className=" text-center text-xl">CEO Of Company</h1>
            <Image
              priority
              src={
                "https://images.unsplash.com/photo-1630309141302-42d6d8f4dcf9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="md"
              width={500}
              height={500}
              className=" w-full  mt-3"
            />
            <p className=" mt-5 text-slate-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              quidem repellendus dolorum qui natus, non soluta beatae! Saepe,
              est, eum atque magnam porro odio magni reprehenderit ex, vero
              recusandae beatae?
            </p>
          </div>

          <div className=" w-full  border bg-slate-900 p-5 rounded-md  text-white">
            <h1 className=" text-center text-xl">MD Of Company</h1>

            <Image
              priority
              src={
                "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="md"
              width={500}
              height={500}
              className=" w-full  mt-3"
            />

            <p className=" mt-5 text-slate-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              quidem repellendus dolorum qui natus, non soluta beatae! Saepe,
              est, eum atque magnam porro odio magni reprehenderit ex, vero
              recusandae beatae?
            </p>
          </div>
          <div className=" w-full  border bg-slate-900 p-5 rounded-md  text-white">
            <h1 className=" text-center text-xl">GM Of Company</h1>
            <Image
              priority
              src={
                "https://images.unsplash.com/photo-1573878221976-aab98adadabc?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="md"
              width={500}
              height={500}
              className=" w-full  mt-3"
            />
            <p className=" mt-5 text-slate-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              quidem repellendus dolorum qui natus, non soluta beatae! Saepe,
              est, eum atque magnam porro odio magni reprehenderit ex, vero
              recusandae beatae?
            </p>
          </div>
          <div className=" w-full  border bg-slate-900 p-5 rounded-md  text-white">
            <h1 className=" text-center text-xl">TO Of Company</h1>
            <Image
              priority
              src={
                "https://images.unsplash.com/photo-1573879030843-d4b38a33131d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="md"
              width={500}
              height={500}
              className=" w-full  mt-3"
            />
            <p className=" mt-5 text-slate-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              quidem repellendus dolorum qui natus, non soluta beatae! Saepe,
              est, eum atque magnam porro odio magni reprehenderit ex, vero
              recusandae beatae?
            </p>
          </div>
        </div>

        {/* stuff pannel end */}
      </div>
      {/* our Company-end*/}
      {/* ---------------- */}
    </main>
  );
};

export default Car_details;
