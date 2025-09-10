import React from "react";
import { RiVoiceprintFill } from "react-icons/ri";
import Image from "../assets/show.png";
import background from '../assets/show-bg.png';

const Show = () => {
  return (
    <div style={{backgroundImage: `url(${background})`}} className="text-white min-h-[100vh] w-full bg-center bg-cover">
      <div className="max-w-[1080px] mx-auto px-[16px] lg:px-0 flex flex-col-reverse lg:flex-row items-top justify-between font-inter">
        <div className="my-[60px]">
          <div className="bg-[#FFFFFF0A] p-[24px] rounded-[40px]">
            <p className="text-[#7748EF] text-[18px]">Pre Show</p>
            <div className="grid grid-cols-2 gap-[10px] mt-[10px]">
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Scheduling
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Show Prep
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Equipment
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Artwork
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Strategy
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Guest Coordination
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Directory Submissions
              </p>
            </div>
          </div>
          <p className="text-[42px]/[42px] font-caveat text-center w-[60%] my-[15px] mx-auto font-bold">Nous vous assistons à chaque étape</p>
          <div className="bg-[#FFFFFF0A] p-[24px] rounded-[40px]">
            <p className="text-[#E349C4] text-[18px]">Post Show</p>
            <div className="grid grid-cols-2 gap-[10px] mt-[10px]">
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Scheduling
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Show Prep
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Equipment
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Artwork
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Strategy
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Guest Coordination
              </p>
              <p className="flex items-center">
                <RiVoiceprintFill className='text-[#7748EF] text-[20px] mr-[10px]' />
                Directory Submissions
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center mx-auto lg:mx-0">
        <img src={Image} alt="show" className="w-auto h-[250px] lg:h-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default Show;
