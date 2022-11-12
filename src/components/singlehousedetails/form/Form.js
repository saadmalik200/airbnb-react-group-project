import React from "react";
import { BsDot } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
const Form = ({ filteredHome }) => {
  return (
    <div className="border-2 border-slate-500 p-[24px] w-[372.74px] h-[540px]">
      <div>
        <div className="flex justify-between w-[322.333px] h-[27px] mb-[30px]">
          <h5 className="w-[120px] h-[26px] text-[24px] text-slate-800">
            <strong>€ {filteredHome?.price} </strong>

            <span className="text-[15px]">night</span>
          </h5>
          <div className="flex text-[15px] items-end justify-center">
            <div className="flex gap-2 items-center">
              <BsFillStarFill />
              <p className="flex items-center justify-center font-[500]">
                {filteredHome?.rating}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center text-slate-500 font-medium text-[15px]">
              <BsDot />
              <p className="flex gap-1" style={{ textDecoration: "underline" }}>
                {filteredHome?.num_reviews} reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[283.667] h-[108px] border-2 mb-[16px]">
        <div className="flex">
          {" "}
          <div>CHECK-IN</div>
          <div>CHECK-OUT</div>
        </div>

        <div className="w-[144px] h-[56px]">GUESTS</div>
      </div>
      <div className="w-[322.333px] h-[48px] bg-pink-700 text-white font-[500] flex items-center justify-center rounded-xl">
        <button>Reserve</button>
      </div>
      <div className="w-[283.667] h-[70px] mt-5 mb-10 text-center list-none">
        <li> You won't be charged yet </li>
        <li> Price per night includes VAT and all applicable fees.</li>
      </div>
      <div>
        <div className="flex justify-between w-[283.667] h-[20px] mb-[16px]">
          <div>${filteredHome?.price} x 5 nights</div>
          <div>$300</div>
        </div>
        <div className="flex justify-between w-[283.667] h-[20px] mb-[16px]">
          <div>Cleaning fee</div>
          <div>$50</div>
        </div>
        <div className="flex justify-between w-[283.667] h-[20px] mb-[16px]">
          <div>Service fee</div>
          <div>$45</div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between w-[283.667] h-[45px] mt-[16px] font-bold">
        <div>Total</div>
        <div>$500</div>
      </div>
    </div>
  );
};

export default Form;
