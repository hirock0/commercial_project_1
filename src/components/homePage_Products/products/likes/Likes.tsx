"use client";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";

interface Props {
  likeData: object | any;
  productId: string | any;
}

const Likes: React.FC<Props> = ({ likeData, productId }) => {
  const [likeFlag, setLikeFlag] = useState(false);
  const [loggedUser, setLoggedUser] = useState({
    name: "",
    userImg: "",
    email: "",
    userId: "",
  });
  const [likeLength, setLikeLength] = useState(0);

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

  const onLikes = async (): Promise<void> => {
    if (loggedUser?.userId == undefined) {
      toast.success("Your are not logged in");
    } else {
      setLikeFlag(!likeFlag);
      const likeDets = {
        userId: loggedUser?.userId,
        userEmail: loggedUser?.email,
        productId: productId,
        recentDate: new Date().toLocaleDateString(),
      };

      const sendLikes = await axios.post("/pages/api/products/likes", likeDets);
      if (sendLikes?.data.message !== "unliked") {
        setLikeLength((prev) => prev + 1);
      } else {
        setLikeLength((prev) => prev - 1);
      }
    }
  };

  const onLikeLength = () => {
    setLikeLength(likeData.length);
  };

  useEffect(() => {
    LoggedUser();
    onLikeLength();
  }, []);

  return (
    <div onClick={onLikes} className="  flex gap-2">
      <svg
        className=" w-5 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={`  ${
          likeData.find((elm: any) => elm.userId == loggedUser?.userId)
            ? `${!likeFlag ? "red" : "white"}`
            : `${!likeFlag ? "white" : "red"}`
        }`}
      >
        <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
      </svg>
      <h1>{likeLength}</h1>
    </div>
  );
};

export default Likes;
