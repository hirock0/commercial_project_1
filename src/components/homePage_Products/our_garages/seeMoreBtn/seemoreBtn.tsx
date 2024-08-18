"use client";
import { useState } from "react";

import Style from "./semorebtn.module.css";

const SeeMore: any = {
  WebkitLineClamp: "5",
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
};

const SeemoreBtn = (props: any) => {
  const [seeMoreFlag, setSeeMoreFlag] = useState(false);
  return (
    <div className="">
      <p
        style={!seeMoreFlag ? SeeMore : null}
        className={`${
          !seeMoreFlag ? null : "overflow-y-scroll h-40 pr-2  "
        } ${Style.garagetext} mt-5 max-sm:text-xs text-slate-300 `}
      >
        {props.descriptions}
      </p>
      <div className=" flex items-center justify-end">
        <button
          onClick={() => setSeeMoreFlag(!seeMoreFlag)}
          className=" rounded-lg mt-5 max-sm:text-xs"
        >{`${!seeMoreFlag ? "See More" : "less"}`}</button>
      </div>
    </div>
  );
};

export default SeemoreBtn;
