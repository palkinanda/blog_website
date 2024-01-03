import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block py-8">
      <div className='top-0 right-0 left-0 h-[15px] bg-[url("https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/bg-light-green.jpg")] absolute '></div>
        <div className="sm:w-[375px] w-[300px] mx-[auto] block my-[0] z-10 relative sm-w-[280px]">
          <Link href="/">
            <img className="cursor-pointer object-cover block" src='logo.png' border='0' alt='logo'/>
          </Link>
        </div>
        <div className=" md:float-left md:contents ">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className=" mt-2  text-black ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;