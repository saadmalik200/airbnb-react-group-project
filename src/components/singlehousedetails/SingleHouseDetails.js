import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import Header from "../header/Header";
import ImageContainer from "./imagebox/ImagesContainer";
import NameReviewHeader from "./top-name-review/NameReviewHeader";
import RoomGuestInfo from "./roomguestinfo/RoomGuestInfo";
import Form from "./form/Form";
const SingleHouseDetails = () => {
  const { state } = useContext(Context);

  const { singlehome } = useParams();

  const filteredHome = state.localData.filter(
    (item) => +item.id === +singlehome
  )[0];

  return (
    <div>
      <Header />
      <NameReviewHeader filteredHome={filteredHome} />
      <ImageContainer filteredHome={filteredHome} />
      <div className="flex justify-between w-[1120px] mx-auto relative">
        <RoomGuestInfo filteredHome={filteredHome} />
        <Form filteredHome={filteredHome} />
      </div>
    </div>
  );
};

export default SingleHouseDetails;
