"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Style from "./profile.module.css";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const [userData, setUser] = useState<any>({});
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    contact: "",
    division: "",
    district: "",
    thana: "",
    postOffice: "",
    postCode: "",
    userImg: "",
    userid: "",
  });
  const [editFlag, setEditFlag] = useState(false);
  const [profileImagepopup, setProfileImagePopup] = useState(false);
  const profileData = async (): Promise<void> => {
    try {
      const reqApi = await axios.get("/pages/api/user/login");
      if (reqApi?.data?.success) {
        setUser(reqApi?.data?.findUser);
        const user = reqApi?.data?.findUser;
        setEditData({
          ...editData,
          name: user.name,
          email: user.email,
          contact: user.contact,
          division: user.address.division,
          district: user.address.district,
          thana: user.address.thana,
          postOffice: user.address.postOffice,
          postCode: user.address.postCode,
          userid: user._id,
        });
      } else {
        console.log("You are not logged in!");
      }
    } catch (error: any) {
      throw new Error("something went wrong");
    }
  };

  const onProfileEdit = async (e: any): Promise<void> => {
    e.preventDefault();
    const sendProfileData = await axios.post(
      "/pages/api/user/profile",
      editData
    );
    if (sendProfileData?.data.success) {
      toast.success("Update successful");
      setProfileImagePopup(false);
    }
  };

  const base64 = (data: any) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(data.target.files[0]);

      reader.onload = (result: any) => {
        setEditData({ ...editData, userImg: result.target.result });
      };
      reader.onerror = (errors: any) => {
        throw new Error("something went wrong", errors);
      };
    } catch (error: any) {
      throw new Error("something went wrong", error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    <main className=" pb-10 pt-10 bg-slate-600 text-white">
      <section>
        <div className=" flex items-center justify-center ">
          <div className=" flex flex-col justify-center items-center ">
            <div
              onClick={() => setProfileImagePopup(!profileImagepopup)}
              className=" cursor-pointer"
            >
              <Image
                src={userData?.userImg || ""}
                alt="uerImage"
                width={100}
                height={100}
                className=" rounded-full"
              />
            </div>

            <h1 className=" mt-5">{userData?.name || ""}</h1>
            <h1>{userData?.email || ""}</h1>
          </div>
        </div>

        <div className=" mt-5">
          <div className=" pb-5 flex items-center justify-end">
            <button onClick={() => setEditFlag(!editFlag)}>Edit</button>
          </div>
          <form onSubmit={onProfileEdit} className="">
            <div className=" grid grid-cols-2 gap-5">
              <div className=" relative">
                <input
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Full Name"
                  className=" pl-2 h-8 rounded-sm mt-2  bg-transparent border-b-2 w-full outline-none"
                />
              </div>
              <div className="">
                <input
                  value={editData.email}
                  onChange={(e) =>
                    setEditData({ ...editData, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  className=" pl-2 h-8 rounded-sm mt-2  bg-transparent border-b-2 w-full outline-none"
                />
              </div>
              <div className="">
                <input
                  value={editData.contact}
                  onChange={(e) =>
                    setEditData({ ...editData, contact: e.target.value })
                  }
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Enter Contatct"
                  className=" pl-2 h-8 rounded-sm mt-2  bg-transparent border-b-2 w-full outline-none"
                />
              </div>
            </div>
            {/* ------------------ */}

            <div className="  mt-10 bg-zinc-800 p-5 rounded-md ">
              <address>Address:</address>

              <div className=" mt-5 grid grid-cols-2 gap-5 ">
                {/* --------- */}
                <div className="  bg-slate-700 p-2 rounded-sm">
                  <div className="">
                    <h1>Division :</h1>
                    <select
                      value={editData?.division}
                      onChange={(e) =>
                        setEditData({ ...editData, division: e.target.value })
                      }
                      name="division"
                      id="division"
                      className=" w-full outline-none py-2 pl-2 bg-transparent border-b-2"
                    >
                      <option value="" className=" text-black">
                        Select Division
                      </option>
                      <option value="Jashore" className=" text-black">
                        Jashore
                      </option>
                    </select>
                  </div>
                </div>
                {/* --------- */}
                {/* --------- */}
                <div className="  bg-slate-700 p-2 rounded-sm">
                  <div className="">
                    <h1>District :</h1>
                    <select
                      value={editData.district}
                      onChange={(e) =>
                        setEditData({ ...editData, district: e.target.value })
                      }
                      name="district"
                      id="district"
                      className=" w-full outline-none py-2 pl-2 bg-transparent border-b-2"
                    >
                      <option value="" className=" text-black">
                        Select District
                      </option>
                      <option value="Jashore" className=" text-black">
                        Jashore
                      </option>
                    </select>
                  </div>
                </div>
                {/* --------- */}
                {/* --------- */}
                <div className="  bg-slate-700 p-2 rounded-sm">
                  <div className="">
                    <h1>Thana :</h1>
                    <select
                      value={editData.thana}
                      onChange={(e) =>
                        setEditData({ ...editData, thana: e.target.value })
                      }
                      name="thana"
                      id="thana"
                      className=" w-full outline-none py-2 pl-2 bg-transparent border-b-2"
                    >
                      <option value="" className=" text-black">
                        Select District
                      </option>
                      <option value="Jashore" className=" text-black">
                        Jashore
                      </option>
                    </select>
                  </div>
                </div>
                {/* --------- */}
                {/* --------- */}
                <div className="  bg-slate-700 p-2 rounded-sm">
                  <div className="">
                    <h1>Post Office :</h1>
                    <div className="">
                      <input
                        value={editData.postOffice}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            postOffice: e.target.value,
                          })
                        }
                        type="text"
                        name="postOffice"
                        id="postOffice"
                        placeholder="Enter Post Office"
                        className=" pl-2 h-8 rounded-sm mt-2  bg-transparent border-b-2 w-full outline-none"
                      />
                    </div>
                  </div>
                </div>
                {/* --------- */}
                <div className="  bg-slate-700 p-2 rounded-sm">
                  <div className="">
                    <h1>Post Office :</h1>
                    <div className="">
                      <input
                        value={editData.postCode}
                        onChange={(e) =>
                          setEditData({ ...editData, postCode: e.target.value })
                        }
                        type="text"
                        name="postCode"
                        id="postCode"
                        placeholder="Enter Post Code"
                        className=" pl-2 h-8 rounded-sm mt-2  bg-transparent border-b-2 w-full outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* --------- */}
                {/* --------- */}
              </div>
            </div>

            {/* ---------------------- */}
            <div className=" flex items-center justify-center mt-5">
              <button
                disabled={!editFlag ? true : false}
                type="submit"
                className=" w-1/2 py-2 rounded-lg bg-slate-800"
              >
                Submit
              </button>
            </div>
          </form>
          {/* popup_start */}
          <div
            onClick={() => setProfileImagePopup(false)}
            className={`${
              !profileImagepopup ? "hidden" : "block"
            } fixed  left-0 h-full w-full bg-slate-800/80 flex items-center justify-center top-10 max-md:text-sm max-sm:text-xs `}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`${Style.imageDiv} bg-black shadow shadow-white rounded-md w-3/6 h-3/5 max-md:w-5/6  flex flex-col items-center p-20 max-md:p-10 overflow-y-scroll`}
            >
              <form onSubmit={onProfileEdit} className=" flex flex-col">
                <label
                  htmlFor="userimage"
                  className="  py-2 px-5 bg-rose-400 rounded-sm"
                >
                  Choose your image
                </label>

                <input
                  type="file"
                  accept="image/**"
                  onChange={base64}
                  name="userimage"
                  id="userimage"
                  className="hidden"
                />
                {editData.userImg == "" ? (
                  <div className=" flex items-center justify-center bg-slate-700 mt-5 h-48 w-full rounded-sm overflow-hidden">
                    Select Image
                  </div>
                ) : (
                  <div className=" mt-5 rounded-sm overflow-hidden">
                    <Image
                      src={editData.userImg}
                      alt="userImg"
                      width={200}
                      height={200}
                    />
                  </div>
                )}
                <div className=" flex items-center justify-center mt-5">
                  <button
                    disabled={editData.userImg == "" ? true : false}
                    type="submit"
                    className={`${
                      editData.userImg == ""
                        ? "w-1/2 py-2 rounded-md  bg-red-600 opacity-45"
                        : "w-1/2 py-2 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800"
                    }  `}
                  >
                    update
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* popup_end */}
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
