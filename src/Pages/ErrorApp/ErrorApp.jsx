import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import img from "../../../src/assets/App-Error.png";
import { useNavigate } from "react-router";
const ErrorApp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow flex flex-col items-center justify-center space-y-2">
      <img src={img} alt="404 Error" className="w-[200px] lg:w-[400px]" />
      <h2 className="text-2xl lg:text-5xl text-center font-bold">
        OPPS!! APP NOT FOUND
      </h2>
      <p className="text-l text-center">
        The App you are requesting is not found on our system.  please try another apps
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white p-2 rounded-[8px] mb-3"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorApp;
