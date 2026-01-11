import React from "react";
import {Link} from 'react-router-dom'
const Popup = ({ onOk }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm text-center shadow-xl">
        <h2 className="text-lg font-bold mb-3">
          SIR Draft 2026
        </h2>

        <p className="text-gray-600 mb-5">
          बेहतर कल की उम्मीद के साथ, आइए शहज़ाद हुसैन को अपना बहुमूल्य वोट देकर बदलाव की शुरुआत करें।
        </p>

        {/* ✅ Make sure no parentheses */}
        <Link to="/download">
        <button
          onClick={onOk}
          className="bg-green-600 text-white px-8 py-2 rounded-lg font-bold hover:bg-green-700"
        >
          OK
        </button> </Link>
      </div>
    </div>
  );
};

export default Popup;
