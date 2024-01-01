import React from 'react';

import Link from 'next/link';


const Footer = () => {
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-[#ffffff] py-10 ">
          <span className=" mt-2 align-middle self-center  text-white ml-4 font-semibold cursor-pointer">Build and Maintained by <span className='text-[#ff4545]'>Nikhil Jha </span>- nikhilaryan@gmail.com and <span className='text-[#ff4545]'>Palki Nanda</span> - palkinaanda@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;