import React, { useState } from "react";
import useApps from "../../hooks/useApps";
import AllApp from "../../Components/AllApp/AllApp";

import SkeletonLoader from "../../Components/SkeletonLoader/SkeletonLoader";
import { Link } from "react-router";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term
    ? apps.filter(app =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : apps
  return (
    <>
      <div className="text-center my-10 p-4">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-bold">
          Our All Applications
        </h2>
        <p className="mt-2 ">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between py-5 items-center container mx-auto p-4">
        <h1 className="text-xl lg:text-3xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-500">({searchedApps.length})Products Found.</span>
        </h1>
        <label className="input">
          <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search Apps" />
        </label>
      </div>
      
      {
        loading?<SkeletonLoader count={20}/>:<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-10 mb-6">
        {searchedApps.map((app) => (
          <AllApp key={app.id} app={app}></AllApp>
        ))}
        
      </div>
      }
      {
        searchedApps.length === 0 && <div className="flex-1 flex items-center justify-center flex-col">
        <p className="text-xl text-gray-600">No Apps Found</p>
        <button className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white p-2 w-[150px] mx-auto rounded-[8px] font-semibold my-4"><a href="/apps">Show All Apps</a></button>
      </div>
      }
    </>
  );
};

export default Apps;
