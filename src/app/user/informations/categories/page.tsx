import Style from "./loader.module.css";

const CategoriesPage = () => {
  return (
    <main className=" h-screen bg-black text-white flex items-center justify-center">
      <div
        id={Style.GlowDiv}
        className=" flex rounded-full items-center justify-center relative  overflow-hidden bg-cyan-300 h-12 w-12 "
      >
        <div id={Style.rotatedDiv} className=" z-0 absolute  h-full w-32"></div>

        <div className=" h-10 w-10 bg-black overflow-hidden z-50 rounded-full"></div>
      </div>
    </main>
  );
};

export default CategoriesPage;
