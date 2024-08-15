import Style from "./LoaderPage.module.css";
export default function CustomLoading() {
  return (
    <main className=" h-screen  text-white flex items-center justify-center">
      <div
        id={Style.GlowDiv}
        className=" flex rounded-full items-center justify-center relative  overflow-hidden bg-cyan-300 h-16 w-16 "
      >
        <div id={Style.rotatedDiv} className=" z-0 absolute  h-full w-10"></div>

        <div className=" h-14 w-14 bg-white overflow-hidden z-50 rounded-full"></div>
      </div>
    </main>
  );
}
