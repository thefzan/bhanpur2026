import React from "react";
import Profile from "../assets/profile.png"; // apni photo yahan rakhen

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Profile Section */}
      <div className="bg-blue-950 text-white flex flex-col items-center py-8 rounded-b-3xl">
        <img
          src={Profile}
          alt="Syed Shahzad Husain"
          className="w-28 h-28 rounded-full border-4 border-white object-cover"
        />
        <h1 className="mt-4 text-xl font-bold">
          सैयद शहज़ाद हुसैन
        </h1>
        <p className="text-sm opacity-90">
          प्रधान पद प्रत्याशी 2026
        </p>
      </div>

      {/* About Content */}
      <div className="p-4 space-y-4">

        {/* About Me */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            मेरे बारे में
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            मेरा नाम <span className="font-semibold">सैयद शहज़ाद हुसैन</span> है।
            मेरा जन्म <span className="font-semibold">भानपुर, गोंडा</span> में हुआ।
            मैं एक शिक्षित, ईमानदार और मेहनती व्यक्ति हूँ, जो हमेशा अपने गाँव
            की सेवा और विकास के लिए तत्पर रहता है।
          </p>
        </div>

        {/* Qualities */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            मेरी विशेषताएँ
          </h2>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>शिक्षित और समझदार नेतृत्व</li>
            <li>ईमानदार और पारदर्शी कार्यशैली</li>
            <li>मेहनती और ज़मीन से जुड़ा हुआ</li>
            <li>हर वर्ग के लिए समान सोच</li>
          </ul>
        </div>

        {/* Why Vote */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            मुझे वोट क्यों दें?
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            मेरा लक्ष्य गाँव का समग्र विकास है — बेहतर सड़कें, साफ़ पानी,
            शिक्षा, स्वास्थ्य सुविधाएँ और युवाओं के लिए रोज़गार के अवसर।
            मैं आपके विश्वास पर खरा उतरने का पूरा प्रयास करूँगा।
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white rounded-2xl p-4 text-center">
          <p className="text-sm font-semibold">
            एक मजबूत और विकसित गाँव के लिए  
          </p>
          <p className="text-lg font-bold mt-1">
            सैयद शहज़ाद हुसैन को समर्थन दें
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
