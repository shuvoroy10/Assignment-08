import React from "react";
import useApps from "../../hooks/useApps";
import AllApp from "../../Components/AllApp/AllApp";

const Apps = () => {
  const { apps } = useApps();
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
          <span className="text-sm text-gray-500">(0)Products Found.</span>
        </h1>
        <label className="input">
          <input type="search" placeholder="Search Products" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-10 mb-6">
        {apps.map((app) => (
          <AllApp key={app.id} app={app}></AllApp>
        ))}
      </div>
    </>
  );
};

export default Apps;
