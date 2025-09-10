import React from "react";
import creator1 from "../assets/creator1.png";
import creator2 from "../assets/creator2.png";
import creator3 from "../assets/creator3.png";
import creator4 from "../assets/creator4.png";
import creator5 from "../assets/creator5.png";
import creator6 from "../assets/creator6.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";

const Creators = () => {
  return (
    <div className="bg-black xl:px-0 text-white font-inter py-[30px]">
        <div className="max-w-[1080px] mx-auto px-[16px]">
      <h2 className="text-center text-[28px] md:text-[42px] font-semibold">Rejoignez les nombreux créateurs <br /> qui nous ont fait confiance</h2>
      <div className="flex overflow-x-scroll lg:overflow-visible items-center gap-[10px] my-[30px]">
        <img src={creator1} alt="creator1" className="w-[170px]" />
        <img src={creator2} alt="creator2" className="w-[170px]" />
        <img src={creator3} alt="creator3" className="w-[170px]" />
        <img src={creator4} alt="creator4" className="w-[170px]" />
        <img src={creator5} alt="creator5" className="w-[170px]" />
        <img src={creator6} alt="creator6" className="w-[170px]" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center w-full items-top gap-[30px] text-center my-[50px]">
        <div>
          <h4 className="font-caveat text-[52px] font-bold">180</h4>
          <p>
            épisodes diffusés <br />
            (et autant de rencontres provoquées)
          </p>
        </div>
        <div>
          <h4 className="font-caveat text-[52px] font-bold">4x</h4>
          <p>
            plus de reach sur les réseaux (depuis le <br /> lancement de leur
            podcast)
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <img src={partner1} alt="partner1" className="w-[150px] lg:w-auto" />
        <img src={partner2} alt="partner2" className="w-[150px] lg:w-auto" />
        <img src={partner3} alt="partner3" className="w-[150px] lg:w-auto" />
      </div>
        </div>
    </div>
  );
};

export default Creators;
