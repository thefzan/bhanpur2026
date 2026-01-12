import React from "react";
import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">

      {/* Header */}
      <div className="bg-blue-950 text-white rounded-2xl p-5 text-center mb-4">
        <h1 className="text-xl font-bold">संपर्क करें</h1>
        <p className="text-sm opacity-90 mt-1">
          शिफ़ा-ए-शाफ़ी दवाखाना
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-white rounded-2xl shadow p-4 space-y-4">

        {/* Address */}
        <div className="flex items-start gap-3">
          <FiMapPin className="text-blue-900 text-xl mt-1" />
          <p className="text-sm text-gray-700 leading-relaxed">
            शिफ़ा-ए-शाफ़ी दवाखाना,  
            भानपुर चौराहा, गौराचौकी,  
            गोंडा, उत्तर प्रदेश – 271312
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <FiPhone className="text-blue-900 text-xl" />
          <div className="text-sm text-gray-700">
            <p>
              <a href="tel:9919092470" className="text-blue-700">
                9919092470
              </a>
            </p>
            <p>
              <a href="tel:9919610510" className="text-blue-700">
                9919610510
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <FiMail className="text-blue-900 text-xl" />
          <a
            href="mailto:dr.shazadhusain@gmail.com"
            className="text-sm text-blue-700"
          >
            dr.shazadhusain@gmail.com
          </a>
        </div>

        {/* Time */}
        <div className="flex items-center gap-3">
          <FiClock className="text-blue-900 text-xl" />
          <p className="text-sm text-gray-700">
            समय: सुबह 9 बजे से रात 8 बजे तक
          </p>
        </div>

      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl shadow p-4 mt-4">
        <h2 className="text-base font-semibold text-blue-900 mb-3">
          सोशल मीडिया पर जुड़ें
        </h2>

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/shahzadhusainsyed?igsh=ZXp0c2w4OWo5YWU3"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-pink-600"
          >
            <FaInstagram className="text-xl" />
            <span className="text-sm">Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/share/1AsVVx7iNw/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-700"
          >
            <FaFacebook className="text-xl" />
            <span className="text-sm">Facebook</span>
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs text-gray-500 mt-6">
        आपकी सेवा में सदैव तत्पर 🙏
      </div>

    </div>
  );
};

export default ContactUs;
