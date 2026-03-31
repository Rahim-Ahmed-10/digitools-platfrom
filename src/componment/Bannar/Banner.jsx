import React from 'react';
import BannerImg from "../../assets/banner.png";
import { IoMdRadioButtonOn } from "react-icons/io";
import playImg from '../../assets/Play.png'


const Banner = () => {
    return (

    <div className="relative min-h-162.5 flex items-center overflow-hidden pt-10">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 p-4">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium px-5 py-2 rounded-full">
          <IoMdRadioButtonOn />  New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tighter text-gray-800">
           Supercharge Your <br />
           Digital Workflow
            
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Experience the full spectrum of frontier intelligence — all the most
            advanced AI models, unified under a single, powerful subscription.
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            <button className="btn btn-primary rounded-3xl">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-3xl">
              <img src={playImg} alt="" />
             Watch Demo
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImg}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;