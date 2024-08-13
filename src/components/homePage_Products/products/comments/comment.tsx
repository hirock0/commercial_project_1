"use client";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import Style from "./comments.module.css";
import Image from "next/image";
import toast from "react-hot-toast";

interface Props {
  productId: string;
  comments: object | any;
}

const Comment: React.FC<Props> = ({ productId, comments }) => {
  const [commentFlag, setCommentFlag] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loggedUser, setLoggedUser] = useState({
    name: "",
    userImg: "",
    email: "",
    userId: "",
  });
  const [commentConatiner, setCommentContainer] = useState<any>([]);

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

  const onCommentsData = async (comments: any): Promise<void> => {
    const Comments = {
      userImg: loggedUser.userImg,
      userId: loggedUser.userId,
      userEmail: loggedUser.email,
      productId: productId,
      comments: comments.comments,
      recentDate: new Date().toLocaleDateString(),
    };

    const CommentsDets = {
      comments: comments.comments,
      userImg: loggedUser.userImg,
    };
    if (loggedUser?.userId !== undefined) {
      commentConatiner.push(CommentsDets);
      const senComments = await axios.post(
        "/pages/api/products/comments",
        Comments
      );
      if (senComments?.data.success) {
        reset();
      }
    } else {
      toast.success("You are not logged in");
    }
  };

  const windowEvents = () => {
    window.addEventListener("click", (e: any) => {
      setCommentFlag(false);
    });
  };

  useEffect(() => {
    windowEvents();
    LoggedUser();
  }, []);

  return (
    <div className="">
      <button
        className=" flex gap-3"
        onClick={(e) => {
          `${setCommentFlag(!commentFlag)} ${e.stopPropagation()}`;
        }}
      >
        <h1 className="">Comments</h1>
        <h1>{comments.length}</h1>
      </button>

      {/* popup_start */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          !commentFlag ? "hidden" : "block"
        } absolute bg-slate-800 w-full left-0 h-full bottom-0 pl-2 pr-2 pt-2`}
      >
        {/* <button onClick={(e)=>{`${ setCommentFlag(!commentFlag)} ${e.stopPropagation()}`}} className=" text-xs">cancel</button> */}
        <div className=" flex justify-between gap-2 ">
          <form
            onSubmit={handleSubmit((data) => onCommentsData(data))}
            className=" flex flex-col w-1/2"
          >
            <textarea
              {...register("comments", { required: "comments required" })}
              name="comments"
              id="comments"
              placeholder="Comments"
              maxLength={20}
              className="text-black outline-none pl-2 rounded-md h-full"
            ></textarea>
            <button type="submit" className=" text-xs border mt-2 rounded-md ">
              submit
            </button>
          </form>
          <div
            className={` ${Style.commentsBox} bg-black rounded-md p-2  w-1/2 overflow-y-scroll h-40 sm:h-32 pl-2 text-xs flex flex-col gap-3`}
          >
            {commentConatiner?.map((item: any, index: any) => (
              <div key={index} className=" flex gap-2">
                <Image
                  src={item?.userImg}
                  alt="img"
                  width={20}
                  height={20}
                  className=" rounded-full"
                />
                <p>{item.comments}</p>
              </div>
            ))}

            {comments?.map((item: any, index: any) => (
              <div key={index} className=" flex gap-2">
                <Image
                  src={item?.userImg}
                  alt="img"
                  width={20}
                  height={20}
                  className=" rounded-full"
                />
                <p>{item?.comments}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* popup_end */}
    </div>
  );
};

export default Comment;
