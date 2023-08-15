import React from "react";
import { Input } from "antd";

const Transaction = () => {
  return (
    // <div className='flex items-center justify-center w-screen max-w-screen h-[300px] md:h-[400px] lg:h-[300px] bg-[#6ba4ee]'>
    <div className="flex items-center justify-center w-full md:w-screen h-[300px] md:h-[400px] lg:h-[300px] bg-[#F8CED8]">


      <div className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        {/* <div className='text-blue-800 text-center font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl p-2 md:p-3 lg:p-4> */}
        <div className="text-red-600 text-center font-bold text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl p-2 md:p-3 lg:p-4">
          Your Balance
        </div>
        <div className="text-red-600 text-center font-bold text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-3 pb-2 md:pb-3 lg:pb-4">
          &#8377; <span>0</span>
        </div>

        <Input
          className="w-full max-w-[645px]"
          placeholder="Add Amount"
          prefix={<span className="p-1 font-semibold text-xl">&#8377;</span>}
          maxLength={7}
          allowClear
          type="number"
        />
      </div>
    </div>
  );
};

export default Transaction;
