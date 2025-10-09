import React from "react";

import useApps from "../../hooks/useApps";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import { Link } from "react-router";
const Home = () => {
  const { apps } = useApps();
  const trendingApps = apps.slice(0, 8);
  return (
    <>
      <HeroSection />
      <div className="text-center mt-5">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-bold">
          Trending Apps
        </h2>
        <p className="mt-2">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-10">
        {trendingApps.map((app) => (
          <TrendingApps key={app.id} app={app}></TrendingApps>
        ))}
        
      </div>
      <button className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white p-2 w-[150px] mx-auto rounded-[8px] font-semibold my-4">
          <Link to={'/apps'}>Show All</Link>
        </button>
    </>
  );
};

export default Home;
