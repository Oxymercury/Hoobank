import React from "react";
import Button from "./Button";
import Reward from "../assets/Star.svg";
import Shield from "../assets/Shield.svg";
import Send from "../assets/Send.svg";

const Achievement = () => {
  return (
    <div className="my-20 xl:flex ">
      <div className="mx-7 md:mx-16 xl:my-7 xl:mx-52">
        <p className="font-bold xl:w-full text-4xl md:text-5xl text-white w-5/6 md:w-2/3" data-aos="fade-right" data-aos-delay="70">You do the business, we’ll handle the money.</p>
        <p className="text-slate-500 my-9 md:text-xl md:w-2/3 xl:w-full">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button value="Get Started" />
      </div>
      <div className="mx-7 md:mx-16 md:my-20 xl:my-0 xl:mr-48 xl:w-2/3">
        <div className="flex p-3 my-7 " data-aos="fade-right" data-aos-delay="70">
          <img src={Reward} className="mx-4 " />
          <div>
            <p className="font-semibold text-md text-white">Rewards</p>
            <p className="text-slate-500">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="shadow-2xl shadow-black/50 flex bg-gradient-to-r from-[#151515] to-[#36363b] rounded-xl p-3 my-7" data-aos="fade-right" data-aos-delay="70">
          <img src={Shield} className="mx-4 " />
          <div>
            <p className="font-semibold text-md text-white">100 % Secured</p>
            <p className="text-slate-500">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="flex p-3 my-7" data-aos="fade-right" data-aos-delay="70" >
          <img src={Send} className="mx-4 " />
          <div>
            <p className="font-semibold text-md text-white">Balance Transfer</p>
            <p className="text-slate-500">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
