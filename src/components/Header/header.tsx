import React from "react";
import { EmojifyLogo } from "@/ui/icons/index";
import Link from "next/link";

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
}

const data = [
  { id: 1, content: "Emojify AI", href: "#preview", key: "preview" },
  { id: 2, content: "About", href: "#about", key: "about" },
  { id: 3, content: "Work", href: "#work", key: "work" },
  { id: 4, content: "Demo", href: "#demo", key: "demo" },
];

const Header: React.FC<HeaderProps> = ({ isScrolled, activeSection }) => {
  return (
    <header className="p-8 z-20 fixed w-full flex items-center justify-between transition-all duration-500">
      <div
        className={`transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <Link href="/">
          <EmojifyLogo />
        </Link>
      </div>

      <div
        className={`flex z-[999] fixed bottom-11 left-1/2 transform -translate-x-1/2 bg-[#464344] px-8 py-3 gap-x-8 items-center rounded-[99px] justify-center transition-opacity duration-500 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {data.map((item) => (
          <Link key={item.id} href={item.href} className="relative">
            <p
              className={`text-[#888888] transition-all ${
                activeSection === item.key
                  ? "text-white after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-full bgGradient after:rounded-lg after:transform after:translate-x-[-50%]"
                  : "hover:text-white"
              }`}
            >
              {item.content}
            </p>
          </Link>
        ))}
      </div>

      <div className="ml-auto">
        <Link href="/registration">
          <button className="Inter rounded-[55px] border-[0.7px] border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-500 font-bold">
            Войти
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
