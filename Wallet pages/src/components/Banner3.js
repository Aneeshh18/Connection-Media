import React from "react";
import Tag1 from "../utils/Ellipse 10.jpg";
import Tag2 from "../utils/Ellipse 12.png";
import Tag3 from "../utils/Ellipse 11.png";

const Transaction = () => {
  return (
    <div className="flex justify-center w-screen h-[360px] bg-[#2465ba]">
      <div className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <div className="text-white text-center font-bold text-xl md:text-3xl lg:text-4xl p-4">
          Get a Redeemable Coupons
          <span className="block"> worth &#8377;100</span>
        </div>

        <div className="flex md:flex-row justify-center text-white font-bold mt-1 md:mt-4">
          <div className="flex flex-col items-center text-center md:items-center md:mr-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-white">
              <img className="rounded-full" src={Tag1} alt="logo1" />
            </div>
            <span className="mt-1">
              Refer Your <span>Friend</span>
            </span>
          </div>

          <div className="flex flex-col items-center text-center md:items-center md:mx-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-white">
              <img className="rounded-full" src={Tag2} alt="logo1" />
            </div>
            <span className="mt-1">
              Friend Signs Up <span>Using Code</span>
            </span>
          </div>

          <div className="flex flex-col items-center text-center md:items-center md:ml-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-white">
              <img className="rounded-full" src={Tag3} alt="logo1" />
            </div>
            <span className="mt-1">
              Your Earn <span>Coupons</span>
            </span>
          </div>
        </div>

        <div className="flex justify-center mb-8 mt-8">
          <button className="border bg-white rounded-md shadow-lg font-bold border-white w-44 h-11 text-lg lg:mt-0">
            Refer & Earn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
