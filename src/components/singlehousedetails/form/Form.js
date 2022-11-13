import React, { useContext, useState } from "react";
import { BsDot } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DatePickerProvider } from "@bcad1591/react-date-picker";
import FormCalender from "./FormCalender";
import { Context } from "../../../context/Context";
const Form = ({ filteredHome }) => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="border-2 relative border-slate-300 p-[24px] w-[372.74px] h-[540px] sticky right-0 top-[48px] rounded-2xl">
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
            <div
              className="flex flex-row justify-center items-center text-slate-500 font-medium text-[15px]"
              style={{ textDecoration: "underline" }}
            >
              <BsDot />
              <p className="flex gap-1" style={{ textDecoration: "underline" }}>
                {filteredHome?.num_reviews} reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[322.333px] h-[112px] border-2  border-slate-300 rounded-2xl">
        <div
          onClick={() => dispatch({ type: "formCalender" })}
          className="flex h-[56px]"
        >
          <div className="w-[50%] border-r-2 p-4">
            <p className="text-[10px] font-[700]">CHECK-IN</p>
            <p className="text-[14px]">
              {state.startDate ? state.startDate.slice(4, 11) : "Add dates"}
            </p>
          </div>
          <div className="w-[50%] p-4">
            <p className="text-[10px] font-[700]">CHECKOUT</p>
            <p className="text-[14px]">
              {state.endDate ? state.endDate.slice(4, 11) : "Add dates"}
            </p>
          </div>
        </div>
        <div className="h-[56px] border-t-2 flex items-center justify-between px-4">
          <div>
            <p className="text-[10px] font-[700]">GUESTS</p>
            <p className="text-[14px]">1 guest</p>
          </div>
          <div>
            <RiArrowDropDownLine size={"35px"} />
          </div>
        </div>
      </div>
      <div className="w-[322.333px] h-[48px] bg-pink-700 text-white font-[500] flex items-center justify-center rounded-xl mt-5">
        <button>Reserve</button>
      </div>
      <div className="w-[283.667] h-[70px] mt-5 mb-10 text-center list-none">
        <li> You won't be charged yet </li>
        <li> Price per night includes VAT and all applicable fees.</li>
      </div>
      <div>
        <div className="flex justify-between w-[283.667] h-[20px] mb-[16px]">
          <div style={{ textDecoration: "underline" }}>
            € {filteredHome?.price} x {state.calcDays} nights
          </div>
          <div>€ {filteredHome?.price * state.calcDays}</div>
        </div>
        <div className="flex justify-between w-[283.667] h-[20px] mb-[16px]">
          <div style={{ textDecoration: "underline" }}>Cleaning fee</div>
          <div>
            € {(filteredHome?.price * state.calcDays * 0.08).toFixed(0)}
          </div>
        </div>
        <div className="flex justify-between w-[283.667] h-[20px] mb-[16px]">
          <div style={{ textDecoration: "underline" }}>Service fee</div>
          <div>
            € {(filteredHome?.price * state.calcDays * 0.05).toFixed(0)}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between w-[283.667] h-[45px] mt-[16px] font-bold">
        <div>Total</div>
        <div>
          €{" "}
          {+filteredHome?.price * state.calcDays +
            +(filteredHome?.price * state.calcDays * 0.08).toFixed(0) +
            +(filteredHome?.price * state.calcDays * 0.05).toFixed(0)}
        </div>
      </div>
      {state.formCalender && (
        <div className="absolute top-0 right-1">
          <DatePickerProvider>
            <FormCalender />
          </DatePickerProvider>
        </div>
      )}
    </div>
  );
};

export default Form;
