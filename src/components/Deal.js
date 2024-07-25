import React from "react";
import Card from "../assets/card.png";
import Button from "./Button";

const Deal = () => {
  return (
    <div>
      <div className="xl:flex xl:my-24">
        <div className="mx-7 md:mx-16 xl:my-auto xl:mx-52 ">
          <p className="font-bold xl:w-full text-4xl md:text-5xl text-white w-5/6 md:w-2/3" >
            Find a better card deal in few easy steps.
          </p>
          <p className="text-slate-500 my-9 md:text-xl md:w-2/3 xl:w-full">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button value="Get Started" />
        </div>
        <img src={Card} className="h-60 mx-auto my-10 md:h-[600px] xl:mr-40 xl:h-[500px]" />
      </div>
    </div>
  );
};

export default Deal;
