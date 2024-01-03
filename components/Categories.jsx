import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white  p-8 pb-12 mb-8">
      <h3 className="  mt-[0] mx-[0] mb-[20px] text-[19px] leading-[25px] text-[#232323] tracking-[2px] text-center uppercase font-[aracnereg,Arial,Verdana,sans-serif] font-normal ">Categories we write about.</h3>
      <div className='box-border block'>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block pb-3 mb-3 box-border m-0 p-0 list-none font-[oswald,Arial,sans-serif] text-[14px] leading-[30px] uppercase font-bold tracking-[1px]
            bg-[url("https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/bg-beige.jpg")] pl-[65px] pr-[20px] py-[10px] relative text-[#232323] no-underline hover:[transition:.25s_ease] hover:text-[#3e9776] `}>
            <span className='box-border absolute content-[""] top-[0] left-[0] bottom-[0] w-[50px] bg-[#f53145] bg-no-repeat bg-center  bg-[url("https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/star.svg")]'></span>{category.name}</span>
        </Link>
      ))}
      </div>
     
    </div>
  );
};

export default Categories;