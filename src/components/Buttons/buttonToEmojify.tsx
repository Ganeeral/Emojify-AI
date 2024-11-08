import { ArrowIcon } from "@/ui/icons";
import React from "react";
import Link from "next/link";

const ButtonToEmojify = () => {
  return (
    <Link href='/emojify' className="flex gap-x-2 text-lg rounded-[55px] px-8 py-3 border-[0.5px] border-white items-center hover:bg-white hover:text-black transition-all duration-200">
      Emojify <ArrowIcon />
    </Link>
  );
};

export default ButtonToEmojify;
