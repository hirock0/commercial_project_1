"use client"
import axios from 'axios'
import Style from './productUpload.module.css'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'


const Product_uploadPage = () => {

    const{register,handleSubmit,formState:{errors}}=useForm<any>()
    const onFormData = async(formData:any)=>{

        console.log(formData)
        formData.recentDate = new Date().toDateString()
       const sendProducts =  await axios.post("/pages/api/products",formData)
       if(sendProducts?.data.success){
        toast.success("uploaded")
       }

        
    }

    return (
        <main className=" w-full pt-5">
            <section className=" flex items-center justify-center ">
                <form onSubmit={handleSubmit((data:any)=>onFormData(data))} className=" text-white flex flex-col gap-5 bg-slate-400 p-5 rounded-md">
                    <h1 className=" text-center">Upload Products</h1>
                    <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
                        <h1>Product Name</h1>
                        <input {...register("productName",{required:"product name is invalid"})} type="text" name="productName" id="productName" placeholder="Product Name" className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"/>
                    </div>
                    <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
                        <h1>Products Link</h1>
                        <input {...register("productsLink",{required:"product link is invalid"})} type="text" name="productsLink" id="productsLink" placeholder="Products Link" className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"/>
                    </div>
                    <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
                        <h1>Product Image Link</h1>
                        <input {...register("productImageLink",{required:"product image link is invalid"})} type="text" name="productImageLink" id="productImageLink" placeholder="Product Image Link" className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"/>
                    </div>
                    <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
                        <h1>Price</h1>
                        <input {...register("price",{required:"price is invalid"})} type="text" name="price" id="price" placeholder="Price" className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"/>
                    </div>
                    {/* projetct_details_start */}
                    <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
                       <h1>Project Details</h1>
                       <div className={`${Style.ProjectDetailsDiv} flex justify-center items-center  gap-2`}>
                            <div className=" flex flex-col gap-5 items-center">
                                <input {...register("rank",{required:"field is required"})} type="text" name="rank" id="rank" placeholder="rank"/>
                                <input {...register("category",{required:"field is required"})} type="text" name="category" id="category" placeholder="category"/>
                                <input {...register("stock",{required:"field is required"})} type="text" name="stock" id="stock" placeholder="stock"/>
                            </div>
                            <div className=" flex flex-col items-center gap-5 w-fit">
                                <input {...register("brand",{required:"field is required"})} type="text" name="brand" id="brand" placeholder="brand"/>
                                <input {...register("importFrom",{required:"field is required"})} type="text" name="importFrom" id="importFrom" placeholder="import from" />
                                <input {...register("mandeIn",{required:"field is required"})} type="text" name="mandeIn" id="mandeIn" placeholder="made in"/>
                            </div>
                       </div>
                    </div>
                      {/* projetct_details_start */}
                    <div className="  bg-cyan-600 mt-5 p-2 rounded-md ">
                        <h1>Product Descriptions</h1>
                        <input {...register("productDescriptions",{required:"product descriptions is invalid"})} type="text" name="productDescriptions" id="productDescriptions" placeholder="Product Descriptions" className=" pl-2 h-10 mt-1 rounded-sm outline-none w-full text-black"/>
                    </div>
                    <button type="submit">Upload</button>
                    
                </form>
            </section>
        </main>
    )
}

export default Product_uploadPage
