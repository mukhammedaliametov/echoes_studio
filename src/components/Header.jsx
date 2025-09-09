import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full bg-[#14121B] text-white font-inter">
        <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 flex items-center justify-between py-[15px]">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="hidden md:flex items-center gap-[15px] lg:gap-[30px] text-[16px] lg:text-[18px]">
        <Link to="/" className="hover:text-primary duration-300">La Formation</Link>
        <Link to="/" className="hover:text-primary duration-300">Blog</Link>
        <Link to="/" className="hover:text-primary duration-300">Case Studies</Link>
      </nav>
      <div className="block md:hidden text-[26px]" onClick={handleClick}>
        <IoMenu />
      </div>
      <nav className={`absolute top-0 flex flex-col gap-[20px] pt-[80px] pl-[40px] bg-[#14121B] w-full h-screen text-white transition-all duration-300 ${nav ? 'left-0' : '-left-[100%]'}`}>
        <Link to="/" onClick={handleClick}>La Formation</Link>
        <Link to="/" onClick={handleClick}>Blog</Link>
        <Link to="/" onClick={handleClick}>Case Studies</Link>
        <IoClose className="mt-[25px] mr-[20px] text-[26px] absolute top-0 right-0" onClick={handleClick} />
      </nav>
        </div>
    </div>
  );
};

export default Header;
