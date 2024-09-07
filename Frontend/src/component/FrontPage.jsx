import React from "react";
import FrontImage from "../assets/banner.jpg";
import StripImage from "../assets/BannerStrip.png";

const FrontPage = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-10 px-5 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 my-5 px-3 md:mt-32">
        <div
          style={{ letterSpacing: "1px" }}
          className="text-4xl md:mt-1 mt-2 pt-10"
        >
          <h1>
            Discover Your Next{" "}
            <div className="text-highlight text-red-600">Great Read!</div>
          </h1>
        </div>
        <div
          style={{ letterSpacing: "1px", wordSpacing: "4px" }}
          className="mt-12"
        >
          <p className="font-serif font-normal text-2xl hidden md:block">
            "Explore a curated collection of Notes that inspire, entertain, and
            educate. Your next great read awaits."
          </p>
          <div className="hidden md:block">
            <img
              src={StripImage}
              alt="Decorative strip"
              style={{ width: "600px", height: "300px" }}
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 my-5 px-3">
        <img
          src={FrontImage}
          alt="Banner"
          className="w-9/12 md:mt-28 mx-auto rounded-2xl"
        />
      </div>
    </div>
  );
};

export default FrontPage;