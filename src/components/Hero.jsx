import React from "react";
import Pic1 from "../assets/Pic1.jpg";
import Map from "../assets/map.jpg";
import { useState } from "react";
import Popup from "./Popup";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="mt-1 ">
        <img src={Pic1} alt="" />
      </div>
      <div className="  flex items-center gap-10 bg-gray-200 pl-4.5 rounded-2xl mt-2 m-2 p-2">
        <button
          
          className="bg-green-600 h-22 rounded w-22  text-white font-bold"
        >
          2023 Voter's List 
        </button>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-pink-700 h-22  rounded w-22 text-white font-bold"
        ><Link to="/download">
          2026 Voter's List </Link>
        </button>
        <a
          href="https://voters.eci.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-400 h-22  rounded w-22 text-white font-bold">
            New Voter Apply
          </button>{" "}
        </a>
      </div>
      <div className=" pl-4.5 flex items-center gap-10 bg-gray-200 rounded-2xl mt-2 m-2 p-2">
        <a
          href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#8567D0] h-22  rounded w-22 text-white font-bold">
            Download Aadhar Card
          </button>{" "}
        </a>

         <a
          href="https://upbhulekh.gov.in/#/selection"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#F17764] h-22  rounded w-22 text-white font-bold">
            खतौनी की नक़ल देखे
          </button>{" "}
        </a>
         <a
          href="https://nfsa.gov.in/public/frmPublicGetMyRCDetails.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#45B5B2] h-22  rounded w-22  text-white font-bold">
            Ration Card Details
          </button>{" "}
        </a>
      </div>


      <div className=" pl-4.5 flex items-center gap-10 bg-gray-200 rounded-2xl mt-2 m-2 p-2">
        <a
          href="https://www.sarkariresult.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#AB183D] h-22  rounded w-22 text-white font-bold">
            सरकारी रिजल्ट Official
          </button>{" "}
        </a>

         <a
          href="https://results.upmsp.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#78170C] h-22  rounded w-22 text-white font-bold">
            यूपी बोर्ड रिजल्ट 2026
          </button>{" "}
        </a>
         <a
          href="https://www.confirmtkt.com/pnr-status"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#B9B00D] h-22  rounded w-22  text-white font-bold">
            Railway PNR Status
          </button>{" "}
        </a>
      </div>




      <div className="ml-2 mr-2 rounded">
        <img src={Map} alt="Bhanpur_Map" className="rounded-xl" />
      </div>
    </>
  );
};

export default Hero;
