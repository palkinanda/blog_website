import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { grpahCMSImageLoader } from "../util";

const PostCard = ({ post }) => (
  <div className="bg-[#fff]  p-0 lg:p-8 pb-12 mb-8">
    {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
    <div className="block relative pt-0 pr-[170px] pb-0 pl-0 ">
      <h1 className="transition duration-700 mb-8 cursor-pointer hover:text-[#3e9776] text-3xl font-bold font-sans text-[40px]">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="absolute right-0 bottom-0 w-[105px] min-h-[62px] pt-[15px] pr-[5px] pb-0 pl-0 font-sans text-right font-bold text-[14px] leading-[18px]  ">
        Posted on
        <div className="text-[#f53145] mt-[5px] mr-0 mb-0 ">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </div>
      </div>
    </div>

    <div className="relative overflow-hidden mb-6">
      <img
        src={post.featuredImage.url}
        alt=""
        className="object-cover object-center w-[800px] h-[400px]"
      />
    </div>

    <div className="block lg:flex  mb-[30px] font-sans text-black w-full text-base leading-8">
      <div className=" flex items-center justify-center ml-1 mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        Posted by
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="40"
          width="40"
          className="align-middle rounded-full ml-[10px]"
          src={post.author.photo.url}
        />
        <p className="inline text-black font-small align-middle  ml-2 text-lg">
          {post.author.name}
        </p>
      </div>
    </div>
    <div className="block text-base leading-8 text-gray-900 ">
      <p className=" text-lg  font-normal  mb-8">{post.excerpt}</p>
      <div>
        <Link href={`/post/${post.slug}`}>
          <span className="relative transition duration-500 ease uppercase text-sm transform hover:-translate-y-1 inline-block leading-4 font-medium text-center text-white py-3 px-4 cursor-pointer bg-[#88b198]">
            Keep Reading..
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default PostCard;
