import React, { useState } from "react";
import { FaDownload, FaRegStar } from "react-icons/fa";
import { loadInstallList, removeFrominstallList } from "../../Utils/localStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installList, setInstallList] = useState(() => loadInstallList());
  const [sortOrder, setSortOrder] = useState("none");

  const handleUninstall = (id) => {
    removeFrominstallList(id);
    setInstallList((prev) => prev.filter((p) => p.id !== id));
    toast.success("Uninstalled successfully!");
  };

  const sortedItem = (() => {
    if (sortOrder === "size-asc") return [...installList].sort((a, b) => a.downloads - b.downloads);
    if (sortOrder === "size-desc") return [...installList].sort((a, b) => b.downloads - a.downloads);
    return installList;
  })();

  return (
    <>
      
      <ToastContainer position="top-center" />

      <div className="container mx-auto space-y-2 flex flex-col">
        {installList.length === 0 ? (
          <div className="flex flex-1 items-center justify-center my-20">
        <p className="text-xl text-gray-600">No Data</p>
      </div>
        ) : (
          <>
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
                <span className="text-sm text-gray-500">
                  ({sortedItem.length}) Products Found.
                </span>
              </h1>

              <label className="form-control w-full max-w-xs">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="select select-bordered"
                >
                  <option value="none">Sort by Download</option>
                  <option value="size-asc">Low-&gt;High</option>
                  <option value="size-desc">High-&gt;Low</option>
                </select>
              </label>
            </div>

            {sortedItem.map((a) => (
              <div key={a.id} className="flex justify-between bg-gray-50 p-4 items-center">
                <div className="flex gap-4">
                  <img className="w-[95px] lg:w-[100px] rounded-[8px]" src={a.image} alt="" />
                  <div className="flex flex-col justify-evenly">
                    <h4>{a.title}</h4>
                    <div className="flex items-start lg:items-center flex-col lg:flex-row">
                      <div className="p-2 flex items-center gap-2 text-[#00D390]">
                        <FaDownload /> {a.downloads}M
                      </div>
                      <div className="p-2 flex items-center gap-2 text-[#FF8811]">
                        <FaRegStar /> {a.ratingAvg}
                      </div>
                      <div>{a.size} MB</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(a.id)}
                  className="bg-[#00D390] h-[35px] px-1 text-white font-bold shadow-2xl"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Installation;
