import Image from "next/image";
import Style from "./showRoom.module.css";
import SeemoreBtn from "./seeMoreBtn/seemoreBtn";
const ShowRoomArray = [
  {
    id: 0,
    title: "Hirock LTD.",
    location: "Bahadurpur, Manirampur, Jashore",
    showRooomDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem quae, maxime placeat quia est molestias assumenda vitae quas officia ab mollitia necessitatibus fugiat architecto, amet odit reiciendis, nihil sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure asperiores rem, incidunt, voluptatibus voluptate voluptatem, ratione placeat alias recusandae quaerat sit doloribus consequatur eos? Quam consequatur voluptatum eius fuga!",
    image: "/assets/car_garage.jpg",
  },
  {
    id: 1,
    title: "Hirock LTD.",
    location: "Kashobpur, Jashore",
    showRooomDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem quae, maxime placeat quia est molestias assumenda vitae quas officia ab mollitia necessitatibus fugiat architecto, amet odit reiciendis, nihil sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure asperiores rem, incidunt, voluptatibus voluptate voluptatem, ratione placeat alias recusandae quaerat sit doloribus consequatur eos? Quam consequatur voluptatum eius fuga!",
    image: "/assets/car_garage.jpg",
  },
  ,
  {
    id: 2,
    title: "Hirock LTD.",
    location: "Korang Bazar, Dinajpur",
    showRooomDescriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem quae, maxime placeat quia est molestias assumenda vitae quas officia ab mollitia necessitatibus fugiat architecto, amet odit reiciendis, nihil sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure asperiores rem, incidunt, voluptatibus voluptate voluptatem, ratione placeat alias recusandae quaerat sit doloribus consequatur eos? Quam consequatur voluptatum eius fuga!",
    image: "/assets/car_garage.jpg",

  },
  ,
  {
    id: 3,
    title: "Hirock LTD.",
    location: "Bonani, Dhaka",
    showRooomDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem quae, maxime placeat quia est molestias assumenda vitae quas officia ab mollitia necessitatibus fugiat architecto, amet odit reiciendis, nihil sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure asperiores rem, incidunt, voluptatibus voluptate voluptatem, ratione placeat alias recusandae quaerat sit doloribus consequatur eos? Quam consequatur voluptatum eius fuga!",
    image: "/assets/car_garage.jpg",
  },
  ,
  {
    id: 4,
    title: "Hirock LTD.",
    location: "Goray, Nator, 12 Road",
    showRooomDescriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem quae, maxime placeat quia est molestias assumenda vitae quas officia ab mollitia necessitatibus fugiat architecto, amet odit reiciendis, nihil sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure asperiores rem, incidunt, voluptatibus voluptate voluptatem, ratione placeat alias recusandae quaerat sit doloribus consequatur eos? Quam consequatur voluptatum eius fuga!",
    image: "/assets/car_garage.jpg",
  },
];

const Show_Rooms = () => {
  return (
    <div className=" ">
      {/* ------------------ */}

      {ShowRoomArray.map((item: any, index: any) => (
        <div key={item.id} className=" mt-10 max-md:mt-5 p-5 bg-slate-800/80">
          <h1 className=" text-center text-2xl mb-5">Show Rooom - {index}</h1>
          {/* card_1 */}
          <div
            className={`${
              item.id % 2 !== 0 ? " flex-row-reverse" : null
            } flex justify-between items-center max-md:flex-col gap-5 max-md:gap-0  `}
          >
            <div className=" w-1/2 max-md:w-full h-[300px]">
              <Image
                priority
                src={item.image}
                alt="garage"
                width={5000}
                height={5000}
                className=" object-cover w-full h-full rounded-md shadow shadow-white hover:scale-110"
              />
            </div>
            <div className="h-[300px] max-md:w-full w-1/2 px-5 max-md:px-0 max-md:pt-5">
              <h1 className="text-center text-xl">{item.title}</h1>
              <div className=" ">
                <Image src={"/assets/map_1.svg"} alt="mapPin" width={20} height={20}/>
                <p className=" text-wrap max-sm:text-xs mt-3 underline underline-offset-4">{item.location}</p>
              </div>
             

              {/* btn */}
              <SeemoreBtn descriptions={item.showRooomDescriptions} />
            </div>
          </div>
          {/* card_1 */}
        </div>
      ))}
      {/* -------------- */}
    </div>
  );
};

export default Show_Rooms;
