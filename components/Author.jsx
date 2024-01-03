import React from "react";
import Image from "next/image";

import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg  bg-[url('https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/bg-light-green.jpg')]">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        loader={grpahCMSImageLoader}
        alt={author.name}
        unoptimized
        height="100"
        width="100"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">
      About {author.name}.
    </h3>
    <p className="text-white text-ls">{author.bio}</p>
    <p className="text-white text-ls">{author.em}</p>
  </div>
);

export default Author;
