"use client"

import axios from "axios"
import { useForm } from "react-hook-form"




const Forgot_Password = () => {

  const{register,handleSubmit,reset,formState:{errors}}= useForm()

  const handleData  = async(e:any)=>{
    console.log(e)
    const sendEmail = await axios.post("/pages/api/user/forgot_password",{email:e.emailOrnumber})
    
  }


  return (
    <main className={`h-screen`}>
        <div className=" mt-5">
            <div className="  w-1/2 max-md:w-5/6 m-auto">
              <h1 className=" text-center">Forgot Password?</h1>
              <form onSubmit={handleSubmit((data:any)=>handleData(data)) } className=" mt-5 w-full bg-slate-300 p-5 rounded-md">
                <div className="">
                <h1 className=" mb-3">
                  Enter your previous email or number
                </h1>

                <input {...register("emailOrnumber",{required:"Enter your previous email or number !"})} type="email" name="emailOrnumber" id="emailOrnumber" placeholder="Email or Number" className=" w-full h-12 pl-3 outline-none rounded-b-sm" />
                {errors.emailOrnumber && <p className=" text-xs mt-2 text-center text-red-600">{errors.emailOrnumber.message?.toString()}</p>}
                </div>
                <div className=" w-1/2 m-auto ">
                  <button className=" w-full  bg-green-200 mt-5 h-10 rounded-sm hover:bg-green-300 active:bg-green-400">submit</button>
                </div>
              </form>
            </div>
        </div>
    </main>
  )
}

export default Forgot_Password