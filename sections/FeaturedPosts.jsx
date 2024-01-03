import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-[#f53145] rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-[#f53145] rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );

  return (
    <div>
      <div className=' relative text-[15px] leading-[24px] text-[#000] mt-[0]  mx-[0]   bg-[url("https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/bg-light-green.jpg")] '>
        <img src="wave.png" className="bg-repeat-x " />

        <Carousel
          className=" pb-4  pt-8"
          infinite
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          responsive={responsive}
          itemClass="px-4"
        >
          {dataLoaded &&
            featuredPosts.map((post, index) => (
              <FeaturedPostCard key={index} post={post} />
            ))}
        </Carousel>
      </div>
      <div className='px-[20px] py-[30px] mb-8 bg-[url("https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/bg-beige.jpg")] text-[#333] text-center min-h-[80px]'></div>
      <h4 className=" block mt-[0] mx-[auto] mb-[30px] overflow-hidden uppercase font-[aracnereg,Arial,Verdana,sans-serif] font-normal text-[19px] leading-[25px] text-[#232323] tracking-[2px]">
        <span className="inline-block relative font-[aracnereg,Arial,Verdana,sans-serif] tracking-[2px] text-[19px] leading-[23px] uppercase ">
          <a
            href="./"
            className=" no-underline text-[#88b198] hover:text-[#f53145]"
          >
            The blog
          </a>
          <span className='absolute content-[""] top-[10px] left-auto -right-[160px]  w-[140px] h-[3px] bg-[url("https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/line.png")]'></span>
        </span>
      </h4>
    </div>
  );
};
export default FeaturedPosts;
