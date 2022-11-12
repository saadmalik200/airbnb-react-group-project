import React, { useContext } from "react";
import { Context } from "../../../context/Context";

import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";
import { GiMedal } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
const NameReviewHeader = ({ filteredHome }) => {
  const { state } = useContext(Context);
  console.log(state.localData);

  return (
    <div className="w-[1120px] h-[86px] mx-auto  ">
      <h1
        className="text-[26px] font-[500] pt-[24px] mb-[4px] "
        style={{ lineHeight: "32px" }}
      >
        {filteredHome?.title}
      </h1>
      <div className="flex justify-between h-[28px] items-center">
        <div className="text-[14px] flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <BsFillStarFill />
            <p className="flex items-center justify-center">
              {filteredHome?.rating}
            </p>
          </div>
          <div className="flex flex-row justify-center items-start">
            <BsDot />
          </div>
          <div className="flex gap-1" style={{ textDecoration: "underline" }}>
            <p>{filteredHome?.num_reviews} reviews</p>
          </div>
          <div className="flex flex-row justify-center items-start">
            <BsDot />
          </div>
          <div className="flex items-center gap-2">
            <GiMedal />
            {filteredHome.superhost ? <p>Superhost</p> : ""}
          </div>
          <div className="flex flex-row justify-center items-start">
            <BsDot />
          </div>
          <div style={{ textDecoration: "underline" }}>
            <p className="">
              {filteredHome.city}, {filteredHome.country}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="flex items-center gap-2 ">
            <FiShare />
            <p
              className=" text-[14px] font-bold"
              style={{ textDecoration: "underline" }}
            >
              Share
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineHeart />
            <p
              className="font-bold  text-[14px]"
              style={{ textDecoration: "underline" }}
            >
              Save
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameReviewHeader;
