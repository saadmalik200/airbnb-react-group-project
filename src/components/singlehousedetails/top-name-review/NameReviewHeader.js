import React, { useContext } from "react";
import { Context } from "../../../context/Context";

import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";

const NameReviewHeader = () => {
  const { state } = useContext(Context);
  console.log(state.localData);

  return (
    <div className="w-[1120px] h-[86px]  ">
      <h1 className="text-[26px] font-bold pt-[24px]">
        {state?.localData[1]?.name}
      </h1>
      <div className="flex justify-between items-center">
        <div className="text-[14px] flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <BsFillStarFill />
            <p className="flex items-center justify-center">
              {state?.localData[1]?.rating} <span>.</span>
            </p>
          </div>
          <div className="flex gap-1">
            <p>{state?.localData[5].num_reviews}</p>
            <p>reviews </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FiShare />
            <p className="underline text-[14px] font-bold">Share</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineHeart />
            <p className="underline font-bold  text-[14px]">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameReviewHeader;
