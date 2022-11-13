import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

import { BsMap } from "react-icons/bs";
import Card from "./Card";

const CardContainer = () => {
  const { state } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="flex mt-10  justify-center gap-10 flex-wrap relative">
      {state?.localData?.map((item, i) => (
        <div
          key={i}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/home/${item?.id}`)}
        >
          <Card item={item} i={i} />
        </div>
      ))}

      <button
        onClick={() => navigate("/map")}
        className="bg-black px-[19px]  py-[14px] w-[137.74px] z-40 rounded-full text-white h-[49.92px] fixed top-[calc(100vh-15.2vh)]"
      >
        <div className="flex items-center gap-3 h-[18.71px]">
          <p>Show map</p>
          <BsMap />
        </div>
      </button>
    </div>
  );
};

export default CardContainer;
