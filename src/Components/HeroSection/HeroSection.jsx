import React from "react";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import heroPng from "../../assets/hero.png";
const HeroSection = () => {
  return (
    <div className="mt-6">
      <div>
        <div className="text-center font-semibold text-black">
          <h1 className="text-2xl md:text-4xl lg:text-6xl ">
            We Build <br />
            <span className="text-[#632EE3]">Productive</span> Apps
          </h1>
          <p className="mt-1 lg:mt-4 text-[10px] lg:text-xl">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>
        <div className="flex items-center gap-12 justify-center mt-5 md:mt-8 lg:mt-10 text-xl lg:ext-2xl">
          <button className="flex items-center gap-2 border-1 p-2 rounded-xl">
            <IoLogoGooglePlaystore /> Google Play
          </button>
          <button className="flex items-center gap-2 border-1 p-2 rounded-xl">
            <FaAppStore /> App Store
          </button>
        </div>
        <div className="mt-5 md:mt-8 lg:mt-10">
          <img className="w-[80%] lg:w-fit mx-auto" src={heroPng} alt="" />
        </div>
        <div className=" bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white font-semibold">
          <div className="text-center p-4 md:p-8 lg:p-10">
            <h1 className="text-xl md:text-3xl lg:text-5xl ">
              Trusted by Millions, Built for You
            </h1>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-20 p-4 md:p-8 lg:p-10">
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-300">Total Downloads</p>
              <h1 className="text-2xl md:text-4xl lg:text-6xl ">29.6M</h1>
              <p className="text-gray-300">21% more than last month</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-300">Total Reviews</p>
              <h1 className="text-2xl md:text-4xl lg:text-6xl ">906K</h1>
              <p className="text-gray-300">46% more than last month</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-300">Active Apps</p>
              <h1 className="text-2xl md:text-4xl lg:text-6xl ">132+</h1>
              <p className="text-gray-300">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
