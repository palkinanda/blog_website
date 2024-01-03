import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => (
  <div className="h-[372.5px] bg-[#fff] text-[15px] leading-[19px] [transition:height_.25s_ease] relative    ">
    <div
      className="relative pb-[56%] overflow-hidden block w-full  top-[0] left-[0] border-[0] max-w-full h-auto "
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <p className="pt-[20px] px-[20px] pb-[40px] text-[28px] leading-[36px] block text-[#232323] font-bold no-underline mt-[0] mx-[0] mb-[15px] font-[oswald,Arial,sans-serif] hover:[transition:.25s_ease] hover:text-[#3e9776]">
      {post.title}
    </p>
    <p className="pt-[20px] px-[20px] pb-[40px] text-[14px] leading-[18px] font-[oswald,Arial,sans-serif] font-bold absolute left-[20px] bottom-[20px]">
      Posted on :{" "}
      <span className="text-[#f53145] uppercase text-[14px] leading-[18px] font-[oswald,Arial,sans-serif] font-bold">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </span>
    </p>

    <div className="left-auto right-[0] absolute bottom-[0] pl-[45px] pr-[15px] py-[10px] font-[oswald,Arial,sans-serif] text-[#fff] text-[16px] leading-[20px]">
      <p className="inline align-middle text-black ">{post.author.name}</p>
    </div>

    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
