import React, { useState } from "react";
import Logo from "../assets/Logoproper.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [HoverLine,ChangeLine] = useState([false,false,false,false]);
   
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLine = (value) =>{
    const newHoverLine = [...HoverLine];
    newHoverLine[value] = !newHoverLine[value];
    ChangeLine(newHoverLine);
  };

  

  return (
    <div className="">
      <div className="flex justify-between items-center pt-4 z-30">
        <img
          src={Logo}
          className="h-8 ml-8 md:ml-16 md:h-10 md:my-2 xl:mx-52 cursor-pointer"
        />

        <ul className="relative flex mx-12 xl:mx-48 ">
          <li
            className={`lg:hidden md:mr-[3.75rem] ml-3  ${menuOpen ? "hidden" : "inline "}`}
            onClick={toggleMenu}
          >
            <MenuIcon style={{ color: "white" }} />
          </li>
          <li onMouseEnter={() => toggleLine(0)} onMouseLeave={() => toggleLine(0)} className="m-4 text-slate-400 xl:text-2xl cursor-pointer lg:block hidden hover:text-white">
            Home
          </li>
          <li className={HoverLine[0] ? "w-20 h-1 rounded-lg absolute bg-white top-16 left-2.5 ease-in-out duration-300" : "w-0 h-1 rounded-lg absolute bg-slate-500 top-16 left-2.5 ease-in-out duration-300" }></li>
          <li onMouseEnter={() => toggleLine(1)} onMouseLeave={() => toggleLine(1)} className="m-4 text-slate-400 xl:text-2xl cursor-pointer lg:block hidden hover:text-white whitespace-nowrap">
            About us
          </li>
          <li className={HoverLine[1] ? "w-24 h-1 rounded-lg absolute bg-white top-16 left-28 ease-in-out duration-300" : "w-0 h-1 rounded-lg absolute bg-slate-500 top-16 left-28 ease-in-out duration-300" }></li>
          <li onMouseEnter={() => toggleLine(2)} onMouseLeave={() => toggleLine(2)} className="m-4 text-slate-400 xl:text-2xl cursor-pointer lg:block hidden hover:text-white">
            Features
          </li>
          <li className={HoverLine[2] ? "w-28 h-1 rounded-lg absolute bg-white top-16 left-60 ease-in-out duration-300" : "w-0 h-1 rounded-lg absolute bg-slate-500 top-16 left-60 ease-in-out duration-300" }></li>
          <li onMouseEnter={() => toggleLine(3)} onMouseLeave={() => toggleLine(3)} className="m-4 text-slate-400 xl:text-2xl cursor-pointer lg:block  hidden hover:text-white">
            Solution
          </li>
          <li className={HoverLine[3] ? "w-24 h-1 rounded-lg absolute bg-white top-16 left-[370px] ease-in-out duration-300" : "w-0 h-1 rounded-lg absolute bg-slate-500 top-16 left-[370px] ease-in-out duration-300" }></li>
        </ul>
        <ul className={menuOpen ? "absolute top-0 ease-in-out duration-500 z-50 bg-gradient-to-r from-[#151515] to-[#36363b] rounded-b-2xl  text-center w-full" : "absolute -top-[100%] ease-in-out duration-500 z-50 bg-gradient-to-r from-[#151515] to-[#36363b] rounded-b-2xl text-center w-full "}>
            <li onClick={toggleMenu} className="text-slate-400 hover:text-white m-5 text-right mx-16">
                <CloseIcon style={{color:"white"}}/>
            </li>
            <li className="text-slate-400 hover:text-white m-5 md:text-[20px]">Home</li>
            <li className="text-slate-400 hover:text-white m-5 md:text-[20px]">About us</li>
            <li className="text-slate-400 hover:text-white m-5 md:text-[20px]">Features</li>
            <li className="text-slate-400 hover:text-white m-5 md:text-[20px]">Solution</li>
        </ul>
        <div onClick={toggleMenu} className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-500 z-20 ${menuOpen ? 'opacity-80 visible' : 'opacity-0 invisible'}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
