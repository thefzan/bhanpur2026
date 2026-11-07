import React from "react";
import Pic1 from "../assets/photo.png";
import Map from "../assets/pmap.jpg";
import { useState } from "react";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="mt-1 ">
        <img src={Pic1} alt="" />
      </div>
      <div className="  grid grid-cols-3 gap-2 bg-gray-200 pl-4.5 rounded-2xl mt-2 mb-2  pt-2 pb-2">
        <button className="bg-[linear-gradient(90deg,hsla(132,79%,68%,1)_0%,hsla(101,62%,48%,1)_100%)] shadow-2xl  h-11 flex leading-3.5  rounded-xl w-28 text-white items-center p-1">
          <div>
            <FaUsers className="text-2xl mr-2" />
          </div>
          <h1 className="text-[12px] text-left font-semibold">
            2003 Voter list
          </h1>
        </button>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-[linear-gradient(90deg,hsla(318,44%,51%,1)_0%,hsla(347,94%,48%,1)_100%)] h-11 flex leading-3.5  rounded-xl w-28 text-white items-center p-1"
        >
          <div>
            <FaUsers className="text-2xl mr-2" />
          </div>
          <Link to="/download">
            <h1 className="text-[12px] text-left font-semibold">
              2026 Voter list
            </h1>
          </Link>
        </button>
        <a
          href="https://voters.eci.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[linear-gradient(90deg,hsla(214,92%,47%,1)_0%,hsla(231,85%,24%,1)_100%)] h-11 flex leading-3.5  rounded-xl w-28 text-white items-center p-1 ">
            <div>
              <FaUsers className="text-2xl mr-2" />
            </div>
            <h1 className="text-[12px] text-left font-semibold">
              New Voter Apply
            </h1>
          </button>{" "}
        </a>
        <a
          href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[linear-gradient(90deg,hsla(279,95%,49%,1)_0%,hsla(295,96%,50%,1)_100%)] h-11 flex leading-3.5  rounded-xl w-28 text-white items-center p-1">
            <div>
              <FaUsers className="text-2xl mr-2" />
            </div>
            <h1 className="text-[12px] text-left font-semibold">
              Download Aadhar Card
            </h1>
          </button>{" "}
        </a>

        <a
          href="https://upbhulekh.gov.in/#/selection"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[linear-gradient(90deg,hsla(4,84%,49%,1)_0%,hsla(37,89%,52%,1)_100%)] h-11 flex leading-3.5  rounded-xl w-28 text-white items-center p-1">
            <div>
              <FaUsers className="text-2xl mr-2" />
            </div>
            <h1 className="text-[12px] text-left font-semibold">
              खतौनी की नक़ल देखे
            </h1>
          </button>{" "}
        </a>
        <a
          href="https://nfsa.gov.in/public/frmPublicGetMyRCDetails.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[linear-gradient(90deg,hsla(173,89%,70%,1)_0%,hsla(196,68%,38%,1)_100%)] h-11 flex leading-3.5  rounded-xl w-28 text-white items-center p-1">
            <div>
              <FaUsers className="text-2xl mr-2" />
            </div>
            <h1 className="text-[12px] text-left font-semibold">
              Ration Card Details
            </h1>
          </button>{" "}
        </a>

        <a
          href="https://www.sarkariresult.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[linear-gradient(90deg,hsla(324,91%,46%,1)_0%,hsla(18,100%,49%,1)_100%)] h-11 flex leading-3.5  rounded-xl w-28 text-white items-center p-1">
            <div>
              <FaUsers className="text-2xl mr-2" />
            </div>
            <h1 className="text-[12px] text-left font-semibold">
              सरकारी रिजल्ट <span className="text-[10px]">Official</span>
            </h1>
          </button>{" "}
        </a>

        <a
          href="https://results.upmsp.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[linear-gradient(90deg,hsla(13,93%,67%,1)_0%,hsla(21,91%,73%,1)_100%)] h-11 flex leading-4.5  rounded-xl w-28 text-white items-center p-1">
            <div>
              <FaUsers className="text-2xl mr-2" />
            </div>
            <h1 className="text-[12px] text-left font-semibold">
              यूपी बोर्ड रिजल्ट 2026
            </h1>
          </button>{" "}
        </a>
        <a
          href="https://www.confirmtkt.com/pnr-status"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[linear-gradient(90deg,hsla(175,79%,63%,1)_0%,hsla(82,96%,57%,1)_100%)] h-11 flex leading-4.5  rounded-xl w-28 text-white items-center p-1">
            <div>
              <FaUsers className="text-2xl mr-2" />
            </div>
            <h1 className="text-[12px] text-left font-semibold">
              Railway PNR Status
            </h1>
          </button>{" "}
        </a>
      </div>

      
        <div
          className="m-2 h-25.5 w-94.75 rounded-xl bg-cover bg-center bg-no-repeat flex justify-end p-2"
          style={{ backgroundImage: `url(${Map})` }}
        >
          <a href="https://maps.app.goo.gl/1yry7AG9qSdyq3cE7"
          target="_blank"
          rel="noopener noreferrer">

          
          <div className="text-white font-semibold p-1  bg-linear-to-r from-[#430081] to-[#8A2BE2] rounded-2xl w-20 h-8 items-center flex justify-center ">
            <FaLocationDot  className="mr-1 text-[11px]"/>
            <h2 className="text-[12px]">View Map</h2>
          </div>
          </a>
        </div>
      
    </>
  );
};

export default Hero;
