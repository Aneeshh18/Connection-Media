import React from 'react'
import Banner from './Banner';
import Transaction from './Transaction';
import Banner3 from './Banner3';
import Transaction3 from './Transaction3';


const Body = () => {
  return (
    <div className='flex flex-col items-center justify-center overflow-x-hidden'>
     {/*<Banner />
    <Transaction/> */}
    <Banner3 />
    <Transaction3 />

    </div>
  );
};

export default Body;