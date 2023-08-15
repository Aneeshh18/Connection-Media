import React from "react";
import { Input } from "antd";
import logo1 from "../utils/logos_whatsapp-icon.png";
import logo2 from "../utils/Vector.png";
import logo3 from "../utils/material-symbols_sms.png";
import logo4 from "../utils/Vector 11.png";
import logo5 from "../utils/Vector12.png";
import logo6 from "../utils/logo6.png";
import logo7 from "../utils/logo7.png";

const Transaction3 = () => {
  return (
    <div className="box m-4 mt-10 pb-12 p-2 shadow-lg md:w-[800px] lg:w-[900px] xl:w-[1000px] mx-auto">
      <div className="Box2 flex flex-row items-center space-x-5 md:flex-row mt-4 ml-4 md:mt-14 justify-center md:space-x-8 lg:space-x-12 xl:space-x-12">
        {/* Logo Components */}
        <div className="w-14 h-14 flex flex-col items-center justify-center text-center text-black font-bold mb-4 md:mb-0 m-4">
          <img className="rounded-full" src={logo1} alt="logo1" />
          <span className="mt-1">WhatsApp</span>
        </div>

        <div className="w-14 h-14 p-1 flex flex-col items-center justify-center text-center text-black font-bold mb-4 md:mb-0 mt-7">
          <img src={logo2} alt="logo2" />
          <span className="mt-1">
            <span>Referral</span>
            <span className=" ">QR</span>
          </span>
        </div>

        <div className="w-14 h-14 flex flex-col items-center justify-center text-center text-black font-bold mb-4 md:mb-0 mt-5">
          <img src={logo3} alt="logo3" />
          <span className="mt-1">SMS</span>
        </div>
      </div>

      {/* Your Code Input */}
      <div className="container1 flex flex-col items-center justify-center bg-blue-200 border-blue-200 rounded-lg mt-8 md:mt-10 w-10/12 mx-auto h-28 md:my-8">
        <div className="flex items-center justify-center pb-3 font-bold mt-1 md:mt-2">
          Your Code
        </div>
        <div className="flex items-center justify-center">
          <img src={logo4} alt="logo4" className="mr-2 md:mr-4 pl-2" />
          <Input className="flex items-center justify-center" allowClear />
          <img src={logo5} alt="logo5" className="ml-2 md:ml-4 pr-2" />
        </div>
      </div>

      {/* Refer Your Friend */}
      <div className="container2 flex flex-col items-center justify-center h-[3rem] md:h-18 bg-blue-600 rounded-lg mt-8 md:mt-6 w-10/12 mx-auto">
        <div className="flex items-center justify-center text-white">
          <img src={logo6} alt="logo6" className="mr-4 " />
          Refer Your Friend
        </div>
      </div>

      {/* See All Friends You Can Refer */}
      <div className="container2 flex flex-col items-center justify-center h-[3rem] md:h-18 bg-blue-600 rounded-lg mt-8 md:mt-6 w-10/12 p-3 mx-auto">
        <div className="flex items-center justify-center text-white">
          <img src={logo7} alt="logo7" className="mr-4" />
          See All Friends You Can Refer
        </div>
      </div>
    </div>
  );
};

export default Transaction3;
