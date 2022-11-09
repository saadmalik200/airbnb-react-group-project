import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Card from "../card/Card";

const CardConatiner = () => {
  const { state } = useContext(Context);
  return (
    <div className="flex gap-6 flex-wrap">
      {state?.localData?.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
};

export default CardConatiner;
