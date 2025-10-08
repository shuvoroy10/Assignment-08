import React from "react";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Home = () => {
  return (
    <div>
      <div className="text-center font-semibold text-black">
        <h1 className="text-2xl md:text-4xl lg:text-6xl ">
          We Build <br />
          <span className="text-[#632EE3]">Productive</span> Apps
        </h1>
        <p className="mt-1 lg:mt-4 text-[10px] lg:text-xl">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      </div>
      <div className="flex items-center gap-12 justify-center mt-5 lg:mt-10 text-xl lg:ext-2xl">
        <button className="flex items-center gap-2 border-1 p-2 rounded-xl"><IoLogoGooglePlaystore /> Google Play</button>
        <button className="flex items-center gap-2 border-1 p-2 rounded-xl"><FaAppStore /> App Store</button>
      </div>
    </div>
  );
};

export default Home;
