"use client";

import React from "react";
import ButtonToEmojify from "@/components/Buttons/buttonToEmojify";

const PreviewSection = () => {

  return (
    <div className="flex flex-col justify-center h-full items-center">
      <div className="flex flex-col gap-y-6 justify-center items-center h-full">
        <h2 className="clamp-title max-w-[955px] w-full leading-none poin">
          <span className="text-yellow">
            Welcome to <br />{" "}
          </span>{" "}
          the <span className="gradientText">Emojify AI</span>
        </h2>
        <ButtonToEmojify />
      </div>  
    </div>
  );
};

export default PreviewSection;
