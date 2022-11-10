import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import Header from "../header/Header";
import ImageContainer from "./imagebox/ImagesContainer";
import NameReviewHeader from "./top-name-review/NameReviewHeader";

const SingleHouseDetails = () => {
  const { state } = useContext(Context);

  const { singlehome } = useParams();

  const filteredHome = state.localData.filter(
    (item) => +item.id === +singlehome
  )[0];
  console.log(filteredHome);

  return (
    <div>
      <Header />
      <NameReviewHeader filteredHome={filteredHome} />
      <ImageContainer filteredHome={filteredHome} />
    </div>
  );
};

export default SingleHouseDetails;
