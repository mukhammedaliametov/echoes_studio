import React from "react";
import img1 from "../assets/clients1.png";
import img2 from "../assets/clients2.png"; 

const Clients= () => {
  return (
    <section className="bg-black text-white py-16 px-4 font-inter">
      <div className="max-w-[1080px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Nos clients
          <div className="relative inline-block">
            <div className="h-2 w-2 bg-purple-500 absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full"></div>
          </div>
          <br />
          <span className="text-white">partagent leur expérience</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 flex flex-row md:flex-col items-start gap-4 text-left">
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1 text-white">Victor Lora</p>
              <p className="text-white font-medium mb-2 text-[24px]/[28px]">
                La retraite à 40 ans creates joyful experiences for millions of learners
              </p>
              <a href="#" className="text-sm text-white underline hover:text-gray-200">
                Lire l’interview
              </a>
            </div>
            <img
              src={img1}
              alt="La retraite à 40 ans"
              className="w-[130px] object-cover rounded-md mx-auto"
            />
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl p-6 flex-row  md:flex-col flex items-start gap-4 text-left">
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1 text-white">Creator Conversation</p>
              <p className="text-white font-medium mb-2 text-[24px]/[28px]">
                Dui et a egestas orci. Pharetra at vel volutpat lectus. Amet tortor amet.
              </p>
              <a href="#" className="text-sm text-white underline hover:text-gray-200">
                Lire l’interview
              </a>
            </div>
            <img
              src={img2}
              alt="Woman"
              className="w-[130px] object-cover rounded-md mx-auto"
            />
          </div>
        </div>
        <div className="mt-10">
          <button className="border border-white text-white px-5 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition">
            Toutes les histoires
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
