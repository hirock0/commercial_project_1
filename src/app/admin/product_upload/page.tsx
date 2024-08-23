"use client";
import axios from "axios";
import Style from "./productUpload.module.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";

const Product_uploadPage = () => {
  const [anotherImages, setAnotherImages] = useState<any>([]);
  const [imageUploadFlag, setImageUploadFlag] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onFormData = async (formData: any) => {
    const anotherImageLinks = [
      { image: formData.imageLink_1 },
      { image: formData.imageLink_2 },
      { image: formData.imageLink_3 },
      { image: formData.imageLink_4 },
      { image: formData.imageLink_5 },
      { image: formData.imageLink_6 },
    ];

    const anotherImagesArray =
      anotherImages.length == 0 ? anotherImageLinks : anotherImages;

    formData.productAnotherImages = anotherImagesArray;
    formData.recentDate = new Date().toDateString();
    const sendProducts = await axios.post("/pages/api/products", formData);
    if (sendProducts?.data.success) {
      toast.success("uploaded");
    }
  };

  const MultiImages = (images: any) => {
    const imageFiles = images.target.files;
    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles.item(i);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (result) => {
        setAnotherImages((prev: any) => [
          ...prev,
          { image: result?.target?.result },
        ]);
      };
    }
  };

  return (
    <main className=" w-full py-10">
      <section className=" flex items-center justify-center ">
        <form
          onSubmit={handleSubmit((data: any) => onFormData(data))}
          className=" text-white flex flex-col gap-5 bg-slate-400 p-5 rounded-md"
        >
          <h1 className=" text-center">Upload Products</h1>
          <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
            <h1>Product Name</h1>
            <input
              {...register("productName", {
                required: "product name is invalid",
              })}
              type="text"
              name="productName"
              id="productName"
              placeholder="Product Name"
              className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
            />
          </div>

          {/* another Image start */}
          <div
            className={`${
              !imageUploadFlag ? "hidden" : "block"
            }   bg-cyan-600 mt-5 p-2 rounded-md `}
          >
            <h1>Another Images</h1>

            <input
              onChange={(data: any) => MultiImages(data)}
              type="file"
              accept="image/**"
              multiple
              name="productsAnotherImages"
              id="productsAnotherImages"
              placeholder="Another Images"
              className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
            />
            <div className=" flex items-center justify-center ">
              {anotherImages.length !== 0 ? (
                <div className="  md:w-[49vw] max-sm:w-[70vw] max-md:w-[60vw] lg:w-[30vw]">
                  <Swiper
                    pagination={true}
                    spaceBetween={50}
                    modules={[Pagination, Navigation]}
                  >
                    {anotherImages.map((item: any, index: any) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={item?.image.toString()}
                          alt="product"
                          width={500}
                          height={500}
                          className=" object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : null}
            </div>
          </div>
          {/* another Images links_start */}
          <div
            className={` ${
              !imageUploadFlag ? "block" : "hidden"
            } bg-cyan-600 mt-5 p-2 rounded-md `}
          >
            <h1>Another Image Link</h1>
            <div className=" grid grid-cols-2 gap-2">
              <input
                {...register("imageLink_1", {
                  required: "product image link is invalid",
                })}
                type="text"
                name="imageLink_1"
                id="imageLink_1"
                placeholder="Image Link_1"
                className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
              />
              <input
                {...register("imageLink_2", {
                  required: "product image link is invalid",
                })}
                type="text"
                name="imageLink_2"
                id="imageLink_2"
                placeholder="Image Link_2"
                className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
              />
              <input
                {...register("imageLink_3", {
                  required: "product image link is invalid",
                })}
                type="text"
                name="imageLink_3"
                id="imageLink_3"
                placeholder="Image Link_3"
                className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
              />
              <input
                {...register("imageLink_4", {
                  required: "product image link is invalid",
                })}
                type="text"
                name="imageLink_4"
                id="imageLink_4"
                placeholder="Image Link_4"
                className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
              />
              <input
                {...register("imageLink_5", {
                  required: "product image link is invalid",
                })}
                type="text"
                name="imageLink_5"
                id="imageLink_5"
                placeholder="Image Link_5"
                className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
              />
              <input
                {...register("imageLink_6", {
                  required: "product image link is invalid",
                })}
                type="text"
                name="imageLink_6"
                id="imageLink_6"
                placeholder="Image Link_6"
                className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
              />
            </div>
          </div>
          <div className=" flex gap-2">
            <input
              onClick={() => setImageUploadFlag(!imageUploadFlag)}
              type="checkbox"
            />
            <h1 className="text-xs">
              upload image with {!imageUploadFlag ? "default" : "Links"} imgaes
            </h1>
          </div>
          {/* another Images links_end */}
          {/* another Image end */}

          <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
            <h1>Product Image Link</h1>
            <input
              {...register("productImageLink", {
                required: "product image link is invalid",
              })}
              type="text"
              name="productImageLink"
              id="productImageLink"
              placeholder="Product Image Link"
              className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
            />
          </div>
          <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
            <h1>Price</h1>
            <input
              {...register("price", { required: "price is invalid" })}
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
            />
          </div>
          {/* projetct_details_start */}
          <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
            <h1>Project Details</h1>
            <div
              className={`${Style.ProjectDetailsDiv} flex justify-center items-center  gap-2`}
            >
              <div className=" flex flex-col gap-5 items-center">
                <input
                  {...register("rank", { required: "field is required" })}
                  type="text"
                  name="rank"
                  id="rank"
                  placeholder="rank"
                />
                <input
                  {...register("category", { required: "field is required" })}
                  type="text"
                  name="category"
                  id="category"
                  placeholder="category"
                />
                <input
                  {...register("stock", { required: "field is required" })}
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="stock"
                />
              </div>
              <div className=" flex flex-col items-center gap-5 w-fit">
                <input
                  {...register("brand", { required: "field is required" })}
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="brand"
                />
                <input
                  {...register("importFrom", { required: "field is required" })}
                  type="text"
                  name="importFrom"
                  id="importFrom"
                  placeholder="import from"
                />
                <input
                  {...register("madeIn", { required: "field is required" })}
                  type="text"
                  name="madeIn"
                  id="madeIn"
                  placeholder="made in"
                />
              </div>
            </div>
          </div>
          {/* projetct_details_start */}
          <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
            <h1>Product Descriptions</h1>
            <input
              {...register("productDescriptions", {
                required: "product descriptions is invalid",
              })}
              type="text"
              name="productDescriptions"
              id="productDescriptions"
              placeholder="Product Descriptions"
              className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </section>
    </main>
  );
};

export default Product_uploadPage;
