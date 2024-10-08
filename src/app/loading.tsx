import Style from "./loader.module.css";
export default function Loading() {
  return (
    <div className=" fixed left-0 top-0 right-0 w-screen h-screen bg-black text-white flex items-center justify-center">
      <div
        id={Style.GlowDiv}
        className=" flex rounded-full items-center justify-center relative  overflow-hidden bg-cyan-300 h-12 w-12 "
      >
        <div id={Style.rotatedDiv} className=" absolute  h-full w-32"></div>

        <div className=" h-10 w-10 bg-black overflow-hidden z-50 rounded-full"></div>
      </div>
    </div>
  );
}
