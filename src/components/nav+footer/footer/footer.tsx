import Image from "next/image";
import Link from "next/link";
import Style from "./footer.module.css";
const Footer = () => {
  return (
    <footer
      className={` ${Style.footer} bg-slate-800  text-white flex flex-col justify-around p-20 max-md:p-10 max-sm:p-5 max-md:text-xs`}
    >
      {/* --------------- */}
      <div className=" flex items-center justify-between">
        <div className="">
          <Image
            src={"/images/Hirock_logo.png"}
            alt="HirockLogo"
            width={50}
            height={50}
          />
        </div>
        <div className=" flex gap-5 max-md:gap-2 items-center">
          <div className=" max-sm:hidden">
            <h1>Ready to get started</h1>
          </div>
          <div className="">
            <Link
              href={"/"}
              className=" px-4 max-md:px-2 py-2 max-md:py-1 rounded-lg bg-gradient-to-tr from-orange-400 via-red-600 to-red-700 hover:from-orange-500 hover:via-red-700 hover:to-red-800 active:from-orange-600 active:via-red-800 active:to-red-900 "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      {/* ---------------------- */}

      <div className=" lg:mt-10 flex justify-center items-center w-full">
        <div className=" w-full mt-5 flex justify-between max-md:grid max-md:grid-cols-2 max-md:gap-5 max-md:items-center ">
          <div className=" max-md:rounded-md max-md:bg-slate-900 max-md:p-5  max-md:flex max-md:flex-col max-md:items-center">
            <h1 className=" max-md:underline max-md:underline-offset-4">
              Quick Links
            </h1>
            <ul className=" mt-2 text-slate-400 flex flex-col gap-3 ">
              <Link href={""}>
                <li>Home</li>
              </Link>
              <Link href={""}>
                <li>About Us</li>
              </Link>
              <Link href={""}>
                <li>Insurance</li>
              </Link>
              <Link href={""}>
                <li>Privacy Plicy </li>
              </Link>
            </ul>
          </div>

          <div className=" max-md:rounded-md max-md:bg-slate-900 max-md:p-5 max-md:flex max-md:flex-col max-md:items-center">
            <h1 className="max-md:underline max-md:underline-offset-4">
              Our Services
            </h1>
            <ul className="mt-2 text-slate-400 flex flex-col gap-3">
              <Link href={""}>
                <li>Life Insurance</li>
              </Link>
              <Link href={""}>
                <li>Car Insurance</li>
              </Link>
              <Link href={""}>
                <li>Health Insurance</li>
              </Link>
              <Link href={""}>
                <li>Home</li>
              </Link>
            </ul>
          </div>
          <div className=" max-md:h-full max-md:rounded-md max-md:bg-slate-900 max-md:p-5 max-md:flex max-md:flex-col max-md:items-center">
            <h1 className="max-md:underline max-md:underline-offset-4">Help</h1>
            <ul className="mt-2 text-slate-400 flex flex-col gap-3">
              <Link href={""}>
                <li>FAQs</li>
              </Link>
              <Link href={""}>
                <li>Contacts Us </li>
              </Link>
            </ul>
          </div>

          <div className=" max-md:rounded-md max-md:bg-slate-900 max-md:p-5 max-md:flex max-md:flex-col max-md:items-center">
            <h1>
              Subscribe to
              <br /> our newsletter
            </h1>
            <form action="" className="mt-2 flex items-center gap-2">
              <input
                type="text"
                name="email"
                id="emal"
                placeholder="Email address"
                className=" bg-transparent border-b-2 h-10 w-full pb-5 max-md:pb-0 mt-5 text-white outline-none"
              />
              <button className=" rounded-full bg-orange-600 max-md:w-5 max-md:h-5">
                <Image
                  src={"/assets/right-arrow.svg"}
                  alt="rightArrow"
                  width={20}
                  height={20}
                />
              </button>
            </form>
            <ul className=" flex gap-5 mt-5">
              <Link href={"https://www.facebook.com/profile.php?id=100028605347325"}>
                <li>
                  <Image
                    src={"/assets/facebook.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </li>
              </Link>
              <Link href={""}>
                <li>
                  <Image
                    src={"/assets/twitter.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </li>
              </Link>
              <Link href={""}>
                <li>
                  <Image
                    src={"/assets/whatsapp.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className=" mt-20">
        <h1 className=" text-center ">
          © 2027 Motors.to - All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
