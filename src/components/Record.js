import React from "react";

const Record = () => {
  return (
    <div className="overflow:hidden">
      <div className="md:flex justify-center bg-gradient-to-r from-[#151515] to-[#36363b] p-5 rounded-3xl mx-7 xl:bg-none shadow-2xl shadow-black/50">
        <div className="flex justify-center my-4 text-center mx-2  xl:mx-7" data-aos="fade-right" data-aos-delay="70">
          <p className="font-bold text-white text-2xl xl:text-4xl">3800+</p>
          <p className="uppercase bg-gradient-to-r from-[#DEF9FA] to-[#33BBCF] text-transparent xl:text-2xl  bg-clip-text my-auto mx-3 whitespace-nowrap">
            User Active
          </p>
        </div>
        <div className="bg-slate-400 w-full h-0.5 md:hidden"data-aos="fade-right" data-aos-delay="70"></div>
        <div className="h-3 xl:h-5 rounded-xl bg-slate-600 w-1 hidden md:block  my-7" data-aos="fade-up" data-aos-delay="70" ></div>
        <div className="flex justify-center mx-2 xl:mx-7 my-4" data-aos="fade-right" data-aos-delay="70">
          <p className="font-bold text-white text-2xl xl:text-4xl">230+</p>
          <p className="uppercase bg-gradient-to-r from-[#DEF9FA] to-[#33BBCF] text-transparent xl:text-2xl  bg-clip-text my-auto mx-3 whitespace-nowrap">
            Trusted by Company
          </p>
        </div>
        <div className="bg-slate-400 w-full h-0.5 md:hidden "data-aos="fade-right" data-aos-delay="70"></div>
        <div className="h-3 xl:h-5 rounded-xl bg-slate-600 w-1 hidden md:block  my-7" data-aos="fade-up" data-aos-delay="70"></div>
        <div className="flex justify-center mx-2 xl:mx-7 my-4" data-aos="fade-right" data-aos-delay="70">
          <p className="font-bold text-white text-2xl xl:text-4xl">$230M+</p>
          <p className="uppercase bg-gradient-to-r from-[#DEF9FA] to-[#33bbcf] text-transparent xl:text-2xl bg-clip-text my-auto mx-3 whitespace-nowrap">
            Transaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default Record;
