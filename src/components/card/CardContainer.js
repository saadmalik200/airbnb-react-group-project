import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import Card from "./Card";

const CardContainer = () => {
  const { state } = useContext(Context);
  return (
    <div className="flex mt-10  justify-center gap-10 flex-wrap">
      {state?.localData?.map((item, i) => (
        <Link key={i} to={`/home/${item.id}`}>
          <Card item={item} />
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
