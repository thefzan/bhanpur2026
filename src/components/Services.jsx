import React from "react";
import { FiTool } from "react-icons/fi";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-100 p-4 rounded-full">
            <FiTool className="text-yellow-600 text-3xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          पेज निर्माणाधीन है
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          यह सेवाएँ पेज अभी तैयार किया जा रहा है।  
          बहुत जल्द यहाँ गाँव से जुड़ी सभी महत्वपूर्ण सेवाओं की जानकारी उपलब्ध होगी।
        </p>

        {/* Optional message */}
        <p className="text-xs text-gray-500 mt-4">
          आपके सहयोग और धैर्य के लिए धन्यवाद 🙏
        </p>

      </div>
    </div>
  );
};

export default Services;
