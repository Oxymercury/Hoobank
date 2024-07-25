import React from "react";
import Transaction from "../assets/bill.png";
import Google from "../assets/google.svg";
import Apple from "../assets/apple.svg";

const Downloads = () => {
  return (
    <div>
      <div className="xl:flex xl:flex-row-reverse xl:my-10">
        <div className="mx-7 md:mx-16 xl:my-auto xl:mr-40 xl:w-5/6 ">
          <p className="font-bold xl:w-full text-4xl md:text-5xl text-white w-5/6 md:w-2/3">
            Easily control your billing & invoicing.
          </p>
          <p className="text-slate-500 my-9 md:text-xl md:w-2/3 xl:w-full">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex">
            <img src={Google} className="h-8 md:h-12 mr-2" />
            <img src={Apple} className="h-8 md:h-12 mx-2" />
          </div>
        </div>
        <img src={Transaction} className="h-60 md:h-[600px] mx-auto my-10 xl:ml-52 xl:mr-36" />
      </div>
    </div>
  );
};

export default Downloads;
