import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const GetQuote: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(29,166,120,0.5)] to-[rgba(255,255,255,1)]  h-auto w-full py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 px-4 sm:px-6">
        
        {/* Left Text Section */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-700 text-center sm:text-left leading-tight">
          We Always Feel Free To Hear <br className="hidden sm:block" /> Your Talk
        </h2>
        
        {/* Right Section (Button and Phone) */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <button className="bg-[rgba(29,166,120,1)] text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
            Get a Quote
          </button>
          
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-black text-lg" />
            <span className="text-yellow-400 font-semibold text-lg">(877)-555-6666</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
