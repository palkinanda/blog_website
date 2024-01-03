import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { grpahCMSImageLoader } from "../util";
import { getSimilarPosts, getRecentPosts } from "@/services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white  p-8 pb-12 mb-8">
      <h3 className="mt-[0] mx-[0] mb-[20px] text-[19px] leading-[25px] text-[#232323] tracking-[2px] text-center uppercase font-[aracnereg,Arial,Verdana,sans-serif] font-normal">
        Checkout our {slug ? "Related Posts" : "Recent Posts"}.
      </h3>
      <div className="text-[15px] leading-[19px] bg-[url('https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/separator.png')]  bg-no-repeat bg-top bg-center px-[0] py-[30px]"></div>
      {relatedPosts.map((post, index) => (
        <div
          key={index}
          className="flex items-center w-full mb-4     cursor-pointer  pb-3 box-border m-0 p-0 list-none font-[oswald,Arial,sans-serif] text-[14px] leading-[30px] uppercase font-bold tracking-[1px]
             pl-[25px] pr-[20px] py-[10px] relative text-[#232323] no-underline hover:[transition:.25s_ease] hover:text-[#3e9776]   bg-[url('https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/bg-beige.jpg')]"
        >
          <div className="w-16 flex-none  ">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="60"
              width="60"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
