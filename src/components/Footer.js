import React from "react";
import Logo from "../assets/Logoproper.png";

const Footer = () => {
  return (
    <div>
      <div className="xl:flex bg-[#0B0A0C] p-3">
        <div className="mx-auto">
          <img src={Logo} className="mx-auto my-6 md:h-16" />
          <p className="text-center xl:text-left md:text-xl text-slate-500 w-1/2 mx-auto my-6">
            A new way to make the payments easy, reliable and secure.
          </p> 
        </div>
        <ul className="md:text-xl xl:mx-11">
          <li className="text-white font-medium text-center my-5 underline">Usefull Links</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Content</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">How it Works</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Create</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Explore</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Terms & Services</li>
        </ul>
        <ul className="md:text-xl xl:mx-11">
          <li className="text-white font-medium text-center my-5 underline">Community</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Help Center</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Partners</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Suggestions</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Blog</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Newsletter</li>
        </ul>
        <ul className="md:text-xl xl:mx-11 xl:mr-40">
          <li className="text-white font-medium text-center my-5 underline">Partner</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Our Partner</li>
          <li className="text-slate-500 text-center p-1 hover:text-white">Become a Partner</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
