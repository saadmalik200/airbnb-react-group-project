import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import Card from "./Card";

const CardContainer = () => {
  const { state } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="flex mt-10  justify-center gap-10 flex-wrap">
      {state?.localData?.map((item, i) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/home/${item?.id}`)}
        >
          <Card item={item} i={i} />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
