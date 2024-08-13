"use client";
import Style from "./nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";

const ProfileNavDetails = [
  {
    id: 0,
    svg: "M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM6 15V17H18V15H6ZM6 7V13H12V7H6ZM14 7V9H18V7H14ZM14 11V13H18V11H14ZM8 9H10V11H8V9Z",
    title: "Profile",
    link: "/user/informations/profile",
  },
  {
    id: 1,
    svg: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 5C8.13401 5 5 8.13401 5 12C5 13.8525 5.71957 15.5368 6.89445 16.7889L7.05025 16.9497L8.46447 15.5355C7.55964 14.6307 7 13.3807 7 12C7 9.23858 9.23858 7 12 7C12.448 7 12.8822 7.05892 13.2954 7.16944L14.8579 5.60806C13.9852 5.21731 13.018 5 12 5ZM18.3924 9.14312L16.8306 10.7046C16.9411 11.1178 17 11.552 17 12C17 13.3807 16.4404 14.6307 15.5355 15.5355L16.9497 16.9497C18.2165 15.683 19 13.933 19 12C19 10.9824 18.7829 10.0155 18.3924 9.14312ZM16.2426 6.34315L12.517 10.0675C12.3521 10.0235 12.1788 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 11.8212 13.9765 11.6479 13.9325 11.483L17.6569 7.75736L16.2426 6.34315Z",
    title: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    svg: "M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM4.03961 11H19.9604L19.3604 8H4.63961L4.03961 11ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z",
    title: "Categories",
    link: "/",
  },
  {
    id: 3,
    svg: "M21.1384 3C21.4146 3 21.6385 3.22386 21.6385 3.5C21.6385 3.58701 21.6157 3.67252 21.5725 3.74807L18 10L21.5725 16.2519C21.7095 16.4917 21.6262 16.7971 21.3865 16.9341C21.3109 16.9773 21.2254 17 21.1384 17H4V22H2V3H21.1384ZM18.5536 5H4V15H18.5536L15.6965 10L18.5536 5Z",
    title: "Work Fields",
    link: "/",
  },
  {
    id: 4,
    svg: "M5 8V20H19V8H5ZM5 6H19V4H5V6ZM20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 10H11V14H7V10ZM7 16H17V18H7V16ZM13 11H17V13H13V11Z",
    title: "Pages",
    link: "/",
  },
  {
    id: 5,
    svg: "M15.1986 9.94447C14.7649 9.5337 14.4859 8.98613 14.4085 8.39384L14.0056 5.31138L11.275 6.79724C10.7503 7.08274 10.1433 7.17888 9.55608 7.06948L6.49998 6.50015L7.06931 9.55625C7.17871 10.1435 7.08257 10.7505 6.79707 11.2751L5.31121 14.0057L8.39367 14.4086C8.98596 14.4861 9.53353 14.7651 9.94431 15.1987L12.0821 17.4557L13.4178 14.6486C13.6745 14.1092 14.109 13.6747 14.6484 13.418L17.4555 12.0823L15.1986 9.94447ZM15.2238 15.5079L13.0111 20.1581C12.8687 20.4573 12.5107 20.5844 12.2115 20.442C12.1448 20.4103 12.0845 20.3665 12.0337 20.3129L8.49229 16.5741C8.39749 16.474 8.27113 16.4096 8.13445 16.3918L3.02816 15.7243C2.69958 15.6814 2.46804 15.3802 2.51099 15.0516C2.52056 14.9784 2.54359 14.9075 2.5789 14.8426L5.04031 10.3192C5.1062 10.1981 5.12839 10.058 5.10314 9.92253L4.16 4.85991C4.09931 4.53414 4.3142 4.22086 4.63997 4.16017C4.7126 4.14664 4.78711 4.14664 4.85974 4.16017L9.92237 5.10331C10.0579 5.12855 10.198 5.10637 10.319 5.04048L14.8424 2.57907C15.1335 2.42068 15.4979 2.52825 15.6562 2.81931C15.6916 2.88421 15.7146 2.95507 15.7241 3.02833L16.3916 8.13462C16.4095 8.2713 16.4739 8.39766 16.5739 8.49245L20.3127 12.0338C20.5533 12.2617 20.5636 12.6415 20.3357 12.8821C20.2849 12.9357 20.2246 12.9795 20.1579 13.0112L15.5078 15.224C15.3833 15.2832 15.283 15.3835 15.2238 15.5079ZM16.0206 17.435L17.4348 16.0208L21.6775 20.2634L20.2633 21.6776L16.0206 17.435Z",
    title: "Trust Rate",
    link: "/",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const sessionData = useSession();
  const [loggedUser, setLoggedUser] = useState({
    name: "",
    userImg: "",
    email: "",
    userId:""
  });
  const [menuFlag, setMenuFlag] = useState<boolean>(false);
  const [searchData, setSearchData] = useState("");
  const [logOutPopup, setLogOutPopup] = useState(false);
  const [profileFlag, setProfileFlag] = useState(false);

  const onSearch = async (data: any) => {
    try {
      data.preventDefault();
      setTimeout(()=>{
      const searchUrl = new URLSearchParams(window.location.search);
      searchUrl.set("q", searchData);
      router.replace(`${pathname}?${searchUrl}`);
    },1000)
    } catch (error: any) {
      throw new Error("something went wrong", error);
    }
  };

  const search = useCallback(() => {
    try {
      const searchUrl = new URLSearchParams(window.location.search);
      if (searchData == "") {
        searchUrl.delete("q");
      }
      router.replace(`${pathname}?${searchUrl}`);
    } catch (error: any) {
      throw new Error("something went wrong", error);
    }
  }, [searchData]);

  useEffect(() => {
    setTimeout(()=>{
      search();
    },1000)
  
  }, [searchData]);

  const LoggedUser = useCallback(async () => {
    try {
      const reqData = await axios.get("/pages/api/user/login");
      const User = reqData?.data?.findUser;
      setLoggedUser({
        ...loggedUser,
        name: User?.name,
        userImg: User?.userImg,
        email: User?.email,
        userId: User?._id,
      });
    } catch (error: any) {
      throw new Error("something went wrong", error);
    }
  }, [loggedUser]);

  const windowEvent = () => {
    window.addEventListener("click", (e: any) => {
      setMenuFlag(false);
      setProfileFlag(false);
    });
  };

  useEffect(() => {
    LoggedUser();
    windowEvent();
  }, []);

  return (
    <nav className=" z-50 bg-black text-white sticky top-0  h-20 flex items-center justify-between">
      <div
        onClick={(e) => {
          e.stopPropagation(), setProfileFlag(!profileFlag), setMenuFlag(false);
        }}
        className=" cursor-pointer"
      >
        <Image
          src={loggedUser?.userImg || ""}
          alt="user"
          width={30}
          height={30}
          className=" rounded-full"
        />
      </div>

      {/* Profile_start */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${Style.mainProfileNav} ${
          !profileFlag ? " -translate-x-full " : "translate-x-0"
        } ${
          sessionData.status !== "authenticated" ? " hidden" : " block"
        } transition-all fixed max-sm:w-52 sm:w-52 md:w-72 h-screen top-20  left-0 bg-slate-800 p-5 overflow-y-scroll pb-32 `}
      >
        <div className=" ">
          <div className=" flex flex-col gap-4 items-center justify-center">
            <div className="  select-none h-10 w-10 rounded-full overflow-hidden ">
              <Image
                src={loggedUser?.userImg}
                alt="user"
                width={500}
                height={500}
                priority={true}
                className=" w-full h-full"
              />
            </div>
            <div className="">
              <h1 className="text-center text-xs">{loggedUser?.name}</h1>
              <h1 className="text-center text-xs mt-2">{loggedUser.email}</h1>
            </div>
          </div>
        </div>
        <ul className={` ${Style.profileUl} mt-5 border-t pt-5`}>
          {ProfileNavDetails.map((item: any, index: any) => (
            <Link key={index} href={item?.link}>
              <li>
                <svg
                  className=" w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="yellow"
                >
                  <path d={item.svg}></path>
                </svg>
                <h1>{item.title}</h1>
              </li>
            </Link>
          ))}
        </ul>

        <div
          onClick={() => setLogOutPopup(!logOutPopup)}
          className=" p-2 rounded-sm bg-red-600 h-16 select-none mt-5 flex  items-center gap-5 hover:bg-red-700  active:bg-red-800"
        >
          <svg
            className=" w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path>
          </svg>
          <h1>log out</h1>
        </div>

        <div
          className={`${
            !logOutPopup ? " hidden" : "block"
          } select-none flex flex-col gap-5 items-center justify-center absolute top-0  left-0 h-full right-0  bg-slate-800/80`}
        >
          <h1 className=" text-center text-sm">Do you want to logout?</h1>
          <div className=" flex gap-3">
            <button
              onClick={() => setLogOutPopup(false)}
              className=" text-sm w-20 h-8 rounded-sm bg-green-600 hover:bg-green-700 active:bg-green-800 "
            >
              cancel
            </button>
            <button
              onClick={() =>
                setTimeout(() => {
                  signOut();
                }, 2000)
              }
              className=" text-sm w-20 h-8 rounded-sm bg-amber-600 hover:bg-amber-700 active:bg-amber-800"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Profile_end */}

      <form
        onSubmit={(data) => onSearch(data)}
        className={`${
          pathname == "/" ? "block" : "hidden"
        } w-3/4 md:w-2/6 flex items-center relative overflow-hidden rounded-full`}
      >
        <input
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className=" outline-none text-black pl-2 h-10 rounded-full w-full "
        />
        <button
          type="submit"
          disabled={searchData == ""}
          className={` absolute right-0 bg-white h-full flex items-center justify-center w-10`}
        >
          <Image
            src={"/assets/search-2-line.svg"}
            alt="search"
            width={20}
            height={20}
            className=" "
          />
        </button>
      </form>

      <div onClick={(e) => e.stopPropagation()} className=" md:hidden">
        <Image
          onClick={() => setMenuFlag(!menuFlag)}
          src={"/assets/menu-5-fill.svg"}
          alt="menu"
          width={25}
          height={25}
          className={menuFlag ? "hidden" : "block"}
        />
        <Image
          onClick={() => setMenuFlag(!menuFlag)}
          src={"/assets/close-line.svg"}
          alt="menu"
          width={25}
          height={25}
          className={`${!menuFlag ? "hidden" : "block"}`}
        />
      </div>

      <ul
        onClick={(e) => e.stopPropagation()}
        className={` ${Style.navUl} max-md:${
          !menuFlag ? "  max-md:translate-x-full" : " max-md:translate-x-0"
        } text-nowrap   max-md:transition-all max-md:fixed max-md:right-0 max-md:top-20 max-md:backdrop:filter max-md:backdrop-blur-3xl max-md:p-5 max-md:w-52 max-md:flex-col max-md:items-start max-md:justify-normal flex items-center justify-between gap-5`}
      >
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/admin/product_upload"}>
          <li>Admin</li>
        </Link>
        <Link href={"/"}>
          <li>Category</li>
        </Link>
        <Link href={"/"}>
          <li>About Us</li>
        </Link>
        <Link href={"/"}>
          <li>Contact</li>
        </Link>
        {
          loggedUser.userId == undefined?
          <Link href={"/user/login"}>
          <li>Login</li>
        </Link>:null
        }

      </ul>
    </nav>
  );
};

export default Nav;
