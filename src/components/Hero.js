import React,{useEffect} from "react";
import Discount from "../assets/Discount.svg";
import GetS from "../assets/Getstarted.png";
import Robot from '../assets/robot.png';
import AOS from "aos";
import "aos/dist/aos.css"; 

const Hero = () => {
  useEffect(() => {
    AOS.init({
        duration: 1500,
      })
  })
  return (
    <div>
      <div className="flex justify-between my-16 overflow-hidden">
        <div className="mx-7 md:mx-16 xl:mx-52 xl:my-24 ">
          <p className="shadow-2xl shadow-black/50 inline-block text-sm bg-gradient-to-r from-[#151515] to-[#36363b] p-2 rounded-xl uppercase md:text-xl text-slate-500 xl:text-[30px] my-8 md:my-14 whitespace-nowrap">
            <img src={Discount} className="inline xl:h-10"/>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white"> 1 month</span> account
          </p>
          <div className="flex justify-start">
            <div>
              <p className="text-4xl md:text-[50px] xl:text-[60px] xl:font-extrabold md:my-3 xl:my-8 text-white font-bold" data-aos="fade-right" data-aos-delay="150">The Next</p>
              <p className="text-4xl md:text-[50px] xl:text-[60px] xl:font-extrabold md:my-3 xl:my-8 font-bold bg-gradient-to-r from-[#DEF9FA] to-[#33BBCF] text-transparent  bg-clip-text" data-aos="fade-right" data-aos-delay="250">Generation</p>
            </div>
            <img src={GetS} data-aos="fade-left" data-aos-delay="500" className="h-[80px] mx-10 xl:mx-48 xl:my-2 md:-mt-3 xl:h-36  md:h-[120px]" />
          </div>
          <p className="text-4xl md:text-[50px] xl:text-[60px] md:mb-3 md:mt-1 xl:my-1 whitespace-nowrap text-white font-bold xl:font-extrabold" data-aos="fade-right" data-aos-delay="350">Payment method</p>
          <p className=" text-slate-500 my-5 md:my-12 xl:my-24 md:text-xl w-full md:w-3/4">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <img src={Robot} data-aos="fade-left" data-aos-delay="70" className="h-[300px] xl:h-[800px] hidden md:inline my-16 xl:my-10" />
      </div>
    </div>
  );
};

export default Hero;
