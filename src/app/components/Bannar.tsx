"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="w-full h-auto md:h-[650px] relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute hidden md:left-[51px] bottom-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-gray-200 z-10 md:flex items-center justify-center cursor-pointer hover:opacity-90 "
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-5 bottom-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-gray-200 z-10 md:flex items-center  hidden justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <img
            className="w-full h-auto md:h-[650px] object-cover"
            src="/bannerImgOne.jpg"
            loading={"eager"}
            alt="bannerImgOne"
          />
        </div>
        <div>
          <img
            className="w-full h-auto md:h-[650px] object-cover"
            src="/bannerImgTwo.jpg"
            loading={"lazy"}
            alt="/bannerImgTwo.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-auto md:h-[650px] object-cover"
            src="/bannerImgThree.jpg"
            loading={"lazy"}
            alt="bannerImgThree"
          />
        </div>
        <div>
          <img
            className="w-full h-auto md:h-[650px] object-cover"
            src="/bannerImgFour.jpg"
            loading={"lazy"}
            alt="bannerImgFour"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
