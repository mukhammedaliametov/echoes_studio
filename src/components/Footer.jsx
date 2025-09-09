import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-[70px] font-inter">
      <div className="max-w-[1080px] mx-auto px-[16px] grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-start">
          <img src={Logo} alt="Echoes Logo" className="h-10" />
        </div>
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Agence
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Formation
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Ressources
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Nous suivre</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
