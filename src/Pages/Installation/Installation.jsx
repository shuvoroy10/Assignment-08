import React from "react";
import { FaDownload, FaRegStar } from "react-icons/fa";

const Installation = () => {
  return (
    <div className=" container mx-auto space-y-2">
      <div className="text-center my-10">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-bold">
          Your Installed Apps
        </h2>
        <p className="mt-2 ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between py-5 items-center p-4">
        <h1 className="text-xl lg:text-3xl font-semibold">
          Install List{" "}
          <span className="text-sm text-gray-500">(0) Products Found.</span>
        </h1>

        <label className="form-control w-full max-w-xs">
          <select className="select select-bordered">
            <option value="none">Sort by Size</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="flex justify-between bg-gray-50 p-4 items-center">
        <div className="flex gap-4">
          
            <img
            className="w-[70px] lg:w-[100px] rounded-[8px]"
            src="https://i.ibb.co.com/BKjJ3wgt/mariia-shalabaieva-4-Vh-Dq-Jy69v-Q-unsplash.jpg"
            alt=""
          />
          
          <div className="flex flex-col justify-evenly">
            <h4>Google Map</h4>
          
          <div className="flex items-center">
            <div className="p-2 flex items-center gap-2 text-[#00D390]">
              <FaDownload /> 5M
            </div>
            <div className="p-2 flex items-center gap-2 text-[#FF8811]">
              <FaRegStar />
              4.8
            </div>
            <div>258 MB</div>
          </div>
          </div>
        </div>
        <button className="bg-[#00D390] h-[35px] px-1 text-white font-bold shadow-2xl">Uninstall</button>
      </div>
      <div className="flex justify-between bg-gray-50 p-4 items-center">
        <div className="flex gap-4">
          
            <img
            className="w-[100px] rounded-[8px]"
            src="https://i.ibb.co.com/BKjJ3wgt/mariia-shalabaieva-4-Vh-Dq-Jy69v-Q-unsplash.jpg"
            alt=""
          />
          
          <div className="flex flex-col justify-evenly">
            <h4>Google Map</h4>
          
          <div className="flex items-center">
            <div className="p-2 flex items-center gap-2 text-[#00D390]">
              <FaDownload /> 5M
            </div>
            <div className="p-2 flex items-center gap-2 text-[#FF8811]">
              <FaRegStar />
              4.8
            </div>
            <div>258 MB</div>
          </div>
          </div>
        </div>
        <button className="bg-[#00D390] h-[35px] px-1 text-white font-bold shadow-2xl">Uninstall</button>
      </div>
    </div>
  );
};

export default Installation;
