import ButtonToEmojify from "@/components/Buttons/buttonToEmojify";
import { Emojify } from "@/ui/icons";
import React from "react";

export const AboutSection = () => {
  return (
    <div className="flex max-w-[1300px] mx-auto flex-col justify-center items-center w-full">
      <Emojify />
      <div className="">
        <div className="Inter text-left text-balance clamp-subtitle font-bold mt-24">
          Создайте эмоцию с помощью текста! Введите описание, и наша{" "}
          <span className="gradientText">система </span>
          мгновенно подберет{" "}
          <span className="gradientText">анимированный эмодзи</span>, который
          передаст настроение вашего текста.
        </div>
      </div>
      <div className="mt-16">
        <ButtonToEmojify />
      </div>
    </div>
  );
};
