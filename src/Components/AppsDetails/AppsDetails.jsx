import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { FaDownload, FaRegStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { updateList, loadInstallList } from "../../Utils/localStorage";
import { toast, ToastContainer } from "react-toastify";
import ErrorApp from "../../Pages/ErrorApp/ErrorApp";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const app = apps.find((p) => p.id === Number(id));
  const { image, title, downloads, ratingAvg, companyName, reviews, size, ratings, description } =
    app || {};

  const [isInstalled, setIsInstalled] = useState(false);

  
  useEffect(() => {
    const installList = loadInstallList();
    const found = installList.some((p) => p.id === Number(id));
    setIsInstalled(found);
  }, [id]);

  const handleInstall = () => {
    updateList(app);
    setIsInstalled(true);
    toast.success("Installed successfully!")
  };
   if (!app) {
    return <ErrorApp></ErrorApp>
  }

  return (
    
    <div className="container mx-auto">

      <ToastContainer position="top-center"></ToastContainer>
      <div className="flex flex-col md:flex-row lg:flex-row bg-gray-50 p-4 items-center my-6 gap-0 lg:gap-35">
        <div>
          <img
          className="w-[200px] lg:w-[250px] rounded-[8px]"
          src={image}
          alt=""
        />
        </div>

        <div className="flex flex-col justify-between p-4 flex-1">
          <div>
            <h4 className="text-xl lg:text-3xl">{title}</h4>
            <p>
              Developed by:{" "}
              <span className="text-[#9F62F2]">{companyName}</span>
            </p>
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row">
            <div className="p-2 flex flex-col gap-2 text-black">
              <FaDownload className="text-[#00D390]" />
              <span>Downloads</span>
              <span className="text-2xl font-bold">{downloads}M</span>
            </div>
            <div className="p-2 flex flex-col gap-2 text-black">
              <FaRegStar className="text-[#FF8811]" />
              <span>Average Ratings</span>
              <span className="text-2xl font-bold">{ratingAvg}</span>
            </div>
            <div className="p-2 flex flex-col gap-2 text-black">
              <BiLike className="text-[#FF8811]" />
              <span>Total Reviews</span>
              <span className="text-2xl font-bold">{reviews}</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn p-2 w-[200px] text-white font-semibold ${
              isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size}M)`}
          </button>
        </div>
      </div>
<h2 className="text-center text-2xl lg:text-3xl m-1">Ratings</h2>
<br />
<br />
      <div className="bg-base-100 border rounded-xl p-4 h-80 mb-9 rotate-270 md:rotate-0 lg:rotate-0 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF9800" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-center text-2xl lg:text-3xl">Description :</h2>
        <p className="text-center text-xl m-3">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
