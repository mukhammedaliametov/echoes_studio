import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "../assets/pitch_card.png";

const Hero = () => {
  return (
    <div className="bg-gradient pt-[150px] ">
      <div className="max-w-[1080px] mx-auto px-[16px] flex flex-col lg:flex-row justify-between items-top gap-[50px]">
        <div className="text-white font-inter ">
          <h1 className="text-[30px]/[35px] md:text-[52px]/[52px] font-semibold w-auto md:w-[638px] pr-0 md:pr-[150px]">
            Créez un podcast pour développer votre{" "}
            <span className="inline-block text-primary font-caveat text-[45px] md:text-[80px] font-bold">
              acquisition
            </span>
          </h1>
          <p className="w-auto md:w-[370px] text-[15px] md:text-[20px] my-[20px]">
            Echoes vous forme et vous accompagne pour faire grandir une
            communauté engagée.
          </p>
          <button className="w-full lg:w-auto px-[30px] py-[19px] rounded-[32px] bg-primary opacity-100 lg:opacity-65 hover:opacity-100 duration-300 cursor-pointer">
            Commencer
          </button>
        </div>
        <div className="max-w-[310px] bg-[#f6f2ee] rounded-2xl overflow-hidden shadow-md">
          <div className="relative">
            <img src={Image} alt="" className="w-full object-cover" />
            <button className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <div className="bg-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium shadow">
                <FaPlay className="text-black text-xs" />
                Écouter le Pitch
              </div>
            </button>
          </div>
          <div className="p-4">
            <p className="text-black text-center font-medium text-[15px]">
              Xavier et Jérémy vous présentent Echoes, et vous donnent les clés
              du succès.
            </p>
            <p className="text-gray-500 text-sm mt-2 text-center">1min24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
