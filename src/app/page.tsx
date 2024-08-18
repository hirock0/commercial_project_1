import Chart from "@/components/graph_chart/chart";
import Show_Rooms from "@/components/homePage_Products/our_show_rooms/show_room";
import Products from "@/components/homePage_Products/products/products";
import Image from "next/image";
interface Props {
  searchParams: object | any;
}

const Home: React.FC<Props> = ({ searchParams }) => {
  const searchdata = searchParams?.q || "";
  return (
    <main className=" bg-black pb-10 pt-10">
      <div id="main" className=" flex justify-center items-center">
        <Products searchProducts={searchdata} />
      </div>

      {/* our_success_start */}
      <div className=" text-white  mt-10">
        {/* Animation_part_start */}
        <div
          id=""
          className=" mt-5 flex justify-center items-center overflow-hidden"
        >
          <div className=" ourSuccess relative w-fit">
            <h1 className=" ourSuccessText text-center text-5xl max-md:text-3xl font-extrabold">
              Our Successes
            </h1>
          </div>
        </div>
        {/* Animation_part_end*/}
        {/* --------------------- */}
        <div className=" mt-5">
          <Chart />

          <div className=" relative flex items-center justify-center">
            <video
              src="/videos/car_1.mp4"
              playsInline
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
              className=" w-full h-full"
            />
            <div className=" absolute">
              <h1 className=" max-sm:text-xl text-center text-5xl max-md:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
                We are perfect about
                <br /> our concern
              </h1>
            </div>
          </div>
          {/* our_garages_start */}
          <div className="">
            <Show_Rooms />
          </div>
          {/* our_garages_start */}
        </div>
      </div>
      {/* our_success_start */}
    </main>
  );
};

export default Home;
