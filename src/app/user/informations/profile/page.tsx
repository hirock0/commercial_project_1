"use client"

import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"


const ProfilePage = () => {


const[userData,setUser]=useState<any>({})

const profileData = async()=>{
    
        const  reqApi = await axios.get("/pages/api/user/login")
        setUser(reqApi?.data?.findUser)
}

useEffect(()=>{
    profileData()  
},[])


    return (
        <div className=" h-screen pt-20">
            <section>
                <div className=" flex items-center justify-center mt-5">
                    <div className=" flex flex-col justify-center items-center border">
                        <Image src={userData?.userImg || ""} alt="uerImage" width={100} height={100} className=" rounded-full"/>
                        <h1 className=" mt-5">{userData?.name || ""}</h1>
                        <h1>{userData?.email || ""}</h1>
                    </div>
                </div>

                <div className=" mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum autem obcaecati nihil deleniti distinctio culpa perspiciatis, vitae nemo impedit placeat possimus amet quia delectus nisi sunt magnam eligendi maxime. Rem!
                </div>
            </section>
        </div>
    )
}

export default ProfilePage
