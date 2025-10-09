import React from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { FaDownload, FaRegStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const app = apps.find((p) => p.id === Number(id));
  const { image, title, downloads, ratingAvg, companyName, reviews, size, ratings, description } =
    app || {};
    
  return (
    <div className=" container mx-auto ">
      <div className="flex flex-col lg:flex-row  bg-gray-50 p-4 items-center my-6">
        <img
          className="w-[200px] lg:w-[250px] rounded-[8px]"
          src={image}
          alt=""
        />

        <div className="flex flex-col justify-between p-4">
          <div>
            <h4 className="text-xl lg:text-3xl">{title}</h4>
            <p>
              Developed by :{" "}
              <span className="text-[#9F62F2]">{companyName}</span>
            </p>
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row">
            <div className="p-2 flex flex-col gap-2 text-black">
              <FaDownload className="text-[#00D390]" />
              <span>Downloads</span>
              <span className="text-2xl font-bold">{downloads}</span>
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
          <button className="btn bg-[#00D390] p-2 w-[200px] text-white font-semibold">
            Install Now ({size}M)
          </button>
        </div>
      </div>
      <div className='bg-base-100 border rounded-xl p-4 h-80 rotate-270 lg:rotate-0 mb-9'>
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
            <p className="text-center text-xl m-3">{description}</p>
        </div>
    </div>
  );
};

export default AppsDetails;
