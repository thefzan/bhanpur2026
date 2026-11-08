import React from "react";
import Pic1 from "../assets/photo.png";
import Pic2 from "../assets/piclogo.png";
import Pic3 from "../assets/logo.png";
import Map from "../assets/pmap.jpg";
import { useState } from "react";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";

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
              <IoDocumentText className="text-2xl mr-2" />
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
              <FaFileDownload className="text-2xl mr-2" />
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
              <FaMapLocation className="text-2xl mr-2" />
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
              <FaIdCard className="text-2xl mr-2" />
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
              <RiGovernmentFill className="text-2xl mr-2" />
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
              <FaTrophy className="text-2xl mr-2" />
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
              <FaTrainSubway className="text-2xl mr-2" />
            </div>
            <h1 className="text-[12px] text-left font-semibold">
              Railway PNR Status
            </h1>
          </button>{" "}
        </a>
      </div>

      <div className="   bg-[#430081]  pl-2 pr-2 rounded-2xl mt-2 mb-2  pt-2 pb-2">
        <div className=" flex h-25 w-full justify-between items-center">
          <div className="w-25">
            <img src={Pic2} alt="" className="" />
          </div>
          <h1 className="text-white mt-15 text-2xl font-black text-center">
            MY VISION FOR BHANPUR
          </h1>
          <div className="w-30">
            <img className="" src={Pic3} alt="" />
          </div>
        </div>
        <div className="p-4">
          <p className="text-white ">
            मेरा सपना केवल एक बेहतर गांव बनाना नहीं, बल्कि भानपुर को उत्तर
            प्रदेश के आदर्श और विकसित गांवों में शामिल करना है। मैं ऐसा भानपुर
            बनाना चाहता हूं, जहां हर परिवार को बेहतर शिक्षा, अच्छी स्वास्थ्य
            सुविधाएं, स्वच्छ वातावरण, सुरक्षित सड़कें और अपने अधिकारों का सम्मान
            मिले। मेरी प्राथमिकता होगी कि गांव का विकास किसी एक व्यक्ति या वर्ग
            तक सीमित न रहे, बल्कि हर मजहब, हर समाज और हर परिवार को समान अवसर और
            सम्मान मिले।
          </p>
          <p className="text-white mt-5">
            मेरे विकास के प्रमुख संकल्प: <br />
            <br /> 1. बेहतर शिक्षा: गांव के बच्चों के लिए गुणवत्तापूर्ण शिक्षा
            और डिजिटल शिक्षा को बढ़ावा देना। <br /> <br /> 2. स्वास्थ्य
            सुविधाएं: बेहतर चिकित्सा सुविधाएं और स्वास्थ्य जागरूकता सुनिश्चित
            करना। <br />
            <br /> 3. स्वच्छ एवं सुंदर भानपुर: साफ-सफाई, नालियों और कचरा प्रबंधन
            की उचित व्यवस्था। <br />
            <br /> 4. बेहतर सड़कें: गांव की सभी गलियों और संपर्क मार्गों का
            विकास। <br />
            <br /> 5. पेयजल एवं बिजली: हर घर तक स्वच्छ पेयजल और निर्बाध बिजली की
            व्यवस्था के लिए प्रयास।
            <br />
            <br /> 6. युवा सशक्तिकरण: युवाओं के लिए रोजगार, कौशल विकास और खेलकूद
            के अवसर।
            <br />
            <br /> 7. महिला सशक्तिकरण: महिलाओं की सुरक्षा, सम्मान और
            आत्मनिर्भरता को बढ़ावा देना।
            <br />
            <br /> 8. किसानों का विकास: किसानों की समस्याओं को प्राथमिकता से
            उठाना और सरकारी योजनाओं का लाभ दिलाने में सहयोग।
            <br />
            <br /> 9. डिजिटल भानपुर: सरकारी योजनाओं, ऑनलाइन सेवाओं और जरूरी
            सुविधाओं को गांव के लोगों तक पहुंचाना।
            <br />
            <br /> 10. पारदर्शी व्यवस्था: ग्राम पंचायत के कार्यों में
            पारदर्शिता, जवाबदेही और जनभागीदारी सुनिश्चित करना।
          </p>
          <hr className="text-white mt-2" />
          <p className="text-white mt-5">
            मेरा संकल्प: <br />
            <br /> मैं राजनीति को सत्ता का माध्यम नहीं, बल्कि सेवा और जिम्मेदारी
            का माध्यम मानता हूं। मेरा प्रयास रहेगा कि भानपुर का प्रत्येक नागरिक
            विकास की प्रक्रिया में भागीदार बने और उसकी आवाज को सम्मान मिले।
          </p>
          <h2 className="text-yellow-400 font-black text-center mt-4">
            मेरा लक्ष्य स्पष्ट है — एक शिक्षित, स्वच्छ, स्वस्थ, आत्मनिर्भर और
            विकसित भानपुर।
          </h2>
          <h2 className="text-red-700 font-black text-center bg-amber-300 mt-4">
            आइए, मिलकर भानपुर को उत्तर प्रदेश का नंबर 1 गांव बनाने की दिशा में आगे बढ़ें।
          </h2>
        </div>
      </div>

      <div
        className="m-2 h-25.5 w-94.75 rounded-xl bg-cover bg-center bg-no-repeat flex justify-end p-2"
        style={{ backgroundImage: `url(${Map})` }}
      >
        <a
          href="https://maps.app.goo.gl/1yry7AG9qSdyq3cE7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white font-semibold p-1  bg-linear-to-r from-[#430081] to-[#8A2BE2] rounded-2xl w-20 h-8 items-center flex justify-center ">
            <FaLocationDot className="mr-1 text-[11px]" />
            <h2 className="text-[12px]">View Map</h2>
          </div>
        </a>
      </div>
    </>
  );
};

export default Hero;
