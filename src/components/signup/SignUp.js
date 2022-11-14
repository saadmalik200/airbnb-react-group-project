import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const SignUpPage = () => {
  const { state } = useContext(Context);

  const { singlehome } = useParams();

  return (
    <div>
      <div className="flex  w-[1120px] mx-auto h-[116px] items-end text-[32px] font-[500] mb-[32px]">
        {" "}
        <BsFillArrowLeftCircleFill
          style={{ marginRight: "35px", marginBottom: "8px" }}
        />{" "}
        Confirm and pay{" "}
      </div>
      <div className="flex w-[1120px] h-[1080px] mx-auto">
        <div className="flex w-[560px] flex-col">
          <div className="h-[50px] text-[26px] font-[500] text-slate-800 pb-[24px]">
            {" "}
            Your trip
          </div>
          <div className="flex justify-between items-start mb-[24px]">
            <div>
              {" "}
              <div className="text-[1em] font-[500]">Dates</div>
              <div className="mt-[5px]">Dec 26-31</div>
            </div>
            <div className="underline">Edit</div>
          </div>
          <div className="flex justify-between items-start mb-[24px]">
            <div>
              {" "}
              <div className="text-[1em] font-[500]">Guests</div>
              <div className="mt-[5px]">1 guests</div>
            </div>
            <div className="underline">Edit</div>
          </div>
          <div className="h-[82px] text-[26px] py-[28px] font-[500] border-t-2 text-slate-800">
            {" "}
            Choose how to pay
          </div>
          <div className="h-[76px] rounded-t-xl border-2 p-[16px] text-[16px]">
            <div className="flex justify-between">
              <div className="font-[500]">Pay in full</div>
              <div> € {state?.filteredData?.price} </div>
            </div>
            <div>Pay the total now and you're all set.</div>
          </div>

          <div className="h-[154px]  rounded-b-xl border-2 border-t-0 p-[16px] text-[16px]">
            <div className="flex justify-between">
              <div className="font-[500]">Pay part now, part later</div>
              <div> € 515.00</div>
            </div>
            <div className="w-[494px]">
              Pay € 257.50 now, and the rest (€ 257.50) will be automatically
              charged to the same payment method on Dec 15, 2022. No extra fees.
            </div>
            <div className="underline h-[20px] mt-[8px] font-[500]">
              More info
            </div>
          </div>
        </div>

        <div className="flex w-[560px] justify-end">
          <div className="w-[465.667px] h-[449px] border-2 rounded-2xl p-[24px]">
            <div className="flex">
              <div className="w-[124px] h-[106px] border-2 rounded-2xl">
                img
              </div>
              <div className="w-[210px] h-[106px] mb-[24px] border-2 flex  flex-col justify-between">
                <div>
                  <div className="text-[12px] text-slate-500">Farm stay</div>
                  <div className="text-[16px] mt-[4px]">
                    Bünner Hof, Bleumken
                  </div>
                </div>
                <div className="text-[12px] text-slate-500">Farm stay</div>
              </div>
            </div>
            <div className="h-[68px] py-[24px] flex gap-2 items-center border-t-2 border-b-2">
              <div> Your booking is protected by</div>{" "}
              <div>
                {" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAOCAYAAAB0DKHBAAAD2ElEQVRIS9VWQVITQRTtHrVcGk5AhgsQVmZnOAGws4QqwwkIJzA5AeEEjlUs3AknYNhYuHJyATLu3Bl2Wuq07/3pP3RCmMrspKu6pnv69+//X7//f1vToLnum74x0XtsSe312XaDrY9C1Dax0nUPUsi/kj0/n67ZLJk12f+/yzYEA8xwdmyMTeyXs8H/7lxT++6B4bqv2/b6Y95UUZ18Gw3rszzPa5m0qtwqtkFXC3ItnLmyLwKG6/Rb5vnvd7jxvrGGSvg3MYW9MJH55A9njhhqmCBn2CBsRuUWc4T9E6z1ON3Y2Bg6546staIT4xx9DPtO1SEaHUXRCf7vhnIYJzc3NyOsd7D+1e//MJ1O+8HeXaypfceQH0Oeek7QeQE8c0ZdRVGMeBlY72HPJdfwbw/jtxjuoo9KMF4eZHBiUw+pvs7M7sAxNWC4HEDK4WhXBCOO4wRG8KBlbQTDhwQCMpfonQfkziG3B10ZZDbpGMBYU1mAjZDFBZSOxXCMQOFSBYRv+BAI8QvzDHu3QjB4OQqagBFUCN7sBH0INsywe2Cs3QmMrGMGT7tlLjG2yOLvnw0MY9WhEVfoQwzp+FCNo/F+LoBB5oKsWSJ3CF1k1ol3egs3nHEMkOjMut87gNzU66oYBOf7agvOPMR6rsxQ0DxzUluxgs78etYOK8Rc9TB1zKDaP7HmGhiZ4gBWnVsY0NZcQcrjXxudzsxg1A8FDLfWU+B96OSYv+CNom+rLP6dgi2DMHw83blfWULaV/kJtpwzBPViFAyyB+fSHmmMe+fHQm9dECO7B0N8hHZodcyY2wv6ik4eHjoZ6g7piv8SNuF6AKjBmsWcDu2Q2tAZByFyi/VWKB/qmfOnzFlkmuSMxXMfDRhMjJoswYQtf9vrcEiYsgBGmdCXNOxNHwZjLnneUb1kxn4O8vDARsxQw5jw0OMwTGDIDgximFwFYSK3rbazxAbxX7ErzBFkCeWZe1g+WbkwFRYTLM0rnDOkdF7HyPkEalgVkEDhhLERH1W9ANyVwyRMWj7maagm0LY6AYd5hsQ55NKFBKpye3DknDJh9fB7JgBRKtECgMwzPJN5iT5wzHbMi3iQGaK0u5+AAffLIKvLXcldGQzqrCutzOpwMPGllcn2flkvAVp8V1SM8YCKHu8oAakqh/7TL3RN0AkM3y3Lc0YlLMnS9cuwQI12ZmwKl5onEcudMX+LAeolH2VyE0y2qERjmTuTLXue0zg4OghqvZRZOJCGxvrHGR9L+iZYKqcg49uWS8RDbfFVyzDwZ0oYsWL40snHHh9dHczFJ6wlIZj/AC4jxpmUxtkUAAAAAElFTkSuQmCC" />
              </div>
            </div>
            <div>
              <div className="h-[26px] my-[24px] text-[20px] font-[500]">
                Price details
              </div>
              <div className="flex justify-between mb-[8px]">
                <div>€ 103.00 x 5 nights</div>
                <div>€ 515.00</div>
              </div>
              <div className="flex justify-between mb-[8px]">
                <div className="underline">Service fee</div>
                <div className="text-[green]">€ 0.00</div>
              </div>
              <div className="flex justify-between mb-[16px]">
                <div className="underline">Cleaning fee</div>
                <div className="text-[green]">€ 0.00</div>
              </div>
              <hr />
              <div className="flex justify-between mt-[12px] font-[500]">
                <div className="flex ">
                  Total<span className="underline">(EUR)</span>
                </div>
                <div>€ 515.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
