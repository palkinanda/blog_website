import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container relative block mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block py-8">
        <div className='top-0 right-0 left-0 h-[15px] bg-[url("https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/bg-beige.jpg")] absolute '></div>
        <div className="sm:w-[375px] w-[300px] mx-[auto] block my-[0] z-10 relative sm-w-[280px]">
          <Link href="/">
            <img
              className="cursor-pointer object-cover block"
              src="logo.png"
              border="0"
              alt="logo"
            />
          </Link>
        </div>
        {/*<div className=" absolute overflow-hidden font-[oswald,Arial,sans-serif] top-[70px] left-[40px] right-[40px] text-[14px] leading-[20px] uppercase tracking-[1px] text-center inline-block ">
          <div className="flex justify-center items-center m-0 p-0 list-none box-border">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className=" bg-[url('https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/books.svg')] bg-no-repeat bg-center bg-top [background-size:70px_auto] text-[#232323] pt-[70px] px-[0] pb-[0] no-underline   cursor-pointer    inline-block mx-[20px] my-[0] w-[100px] relative">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Header;
