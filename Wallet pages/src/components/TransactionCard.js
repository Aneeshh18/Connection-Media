import React from "react";

const TransactionCard = ({ name, amount, date }) => {
  return (
    <div className="flex md:p-4 mb-4 md:mb-5 justify-between border-b-2 border-b-[#C8DAF3] md:mr-10 overflow-x-hidden">
      {/* Left side */}
      <div className="flex pb-3 flex-col md:flex-row items-center md:mr-4">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-blue-600 text-white mr-2">
          <span className="text-lg md:text-3xl">&#8377;</span>
        </div>
        <div className="mt-1 md:mt-0 flex flex-col items-center">
          <div className="font-bold text-sm md:text-base overflow-hidden">
            {name}
          </div>
          <div className="text-xs md:text-sm overflow-hidden">Job Applied</div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col mt-2 md:mt-3 ">
        <div className="font-semibold text-xs md:text-base overflow-hidden">
          - &#8377;<span>{amount}</span>
        </div>
        <div className="text-xs md:text-sm overflow-hidden">{date}</div>
      </div>
    </div>
  );
};

export default TransactionCard;
