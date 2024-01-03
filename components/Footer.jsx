import React from "react";

const Footer = () => {
  return (
    <section className="relative block box-border">
      <div className="  max-w-[1300px] px-[20px] py-[0] mx-[auto] my-[0] relative overflow-hidden">
        <h4 className=" block text-center mt-[0] mx-[auto] mb-[40px] overflow-hidden uppercase font-[aracnereg,Arial,Verdana,sans-serif] font-normal text-[19px] leading-[25px] text-[#232323] tracking-[2px]">
          <span className="inline-block relative font-[aracnereg,Arial,Verdana,sans-serif] tracking-[2px] text-[19px] leading-[23px] uppercase text-center">
            <span className='absolute content-[""] top-[10px] -left-[160px] w-[140px] h-[3px] bg-[url("https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/line.png")]'></span>
            Maintained and Developed by{" "}
            <a
              href="https://www.linkedin.com/in/nikhiljha1104/"
              className=" no-underline text-[#88b198] hover:text-[#f53145]"
            >
              Nikhil Jha
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/palkinanda/"
              className=" no-underline text-[#88b198] hover:text-[#f53145]"
            >
              Palki Nanda
            </a>
            <span className='absolute content-[""] top-[10px] left-auto -right-[160px]  w-[140px] h-[3px] bg-[url("https://www.everywhereist.com/wp-content/themes/everywhereist-v3/images/line.png")]'></span>
          </span>
        </h4>
      </div>
    </section>
  );
};

export default Footer;
