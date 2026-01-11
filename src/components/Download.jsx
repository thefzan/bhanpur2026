import React from "react";
import Pic3 from '../assets/dpage.jpeg'
import pd65 from '../assets/65.pdf'
import pd66 from '../assets/66.pdf'
import pd67 from '../assets/67.pdf'

const DownloadCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4">
       <img src={Pic3} alt="" className='rounded-2xl' />
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow p-4 flex justify-between items-center">
        <h2 className="text-base font-semibold text-gray-800">
          65 प्राथमिक पाठशाला उत्तरी भाग, भानपुर
        </h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm active:scale-95"
        ><a href={pd65}>
          डाउनलोड
          </a>
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow p-4 flex justify-between items-center">
        <h2 className="text-base font-semibold text-gray-800">
          66 प्राथमिक पाठशाला उत्तरी भाग, भानपुर
        </h2>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm active:scale-95"
        >
          <a href={pd66}>
          डाउनलोड
          </a>
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow p-4 flex justify-between items-center">
        <h2 className="text-base font-semibold text-gray-800">
          67 प्राथमिक पाठशाला मध्य भाग, भानपुर
        </h2>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm active:scale-95"
        >
          <a href={pd67}>
          डाउनलोड
          </a>
        </button>
      </div>

    </div>
  );
};

export default DownloadCards;
