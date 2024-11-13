"use client";

import React, { useState } from "react";
import Link from "next/link";

const HeaderAuth = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex p-8 w-full relative">
      <Link href="/" className="bg-[#464344] rounded-[99px] px-8 py-3 mx-auto">
        <span className="gradientText">Emojify AI</span>
      </Link>

      <div className="relative">
        <div
          onClick={toggleMenu}
          className="cursor-pointer rounded-full h-[50px] w-[50px] bg-[#1D73F3] flex items-center justify-center text-[22px] font-normal text-white absolute right-8 transition-transform duration-300 hover:scale-105"
        >
          A
        </div>

        {isMenuOpen && (
          <div className="absolute right-0 top-14 w-[200px] bg-[#2d2c2e] rounded-lg shadow-lg overflow-hidden animate-slideDown">
            <ul className="flex flex-col">
              <li className="border-b border-gray-600">
                <Link
                  href="/profile"
                  className="block px-6 Inter font-bold py-3 text-white hover:bg-[#3c3a3b] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Профиль
                </Link>
              </li>
              <li className="border-b border-gray-600">
                <Link
                  href="/admin"
                  className="block px-6 Inter font-bold py-3 text-white hover:bg-[#3c3a3b] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Панель администратора
                </Link>
              </li>
              <li>
                <button
                  className="block w-full Inter font-bold text-left px-6 py-3 text-white hover:bg-[#3c3a3b] transition-all"
                  onClick={() => {
                    setIsMenuOpen(false);
                    alert("Logged out");
                  }}
                >
                  Выход
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAuth;
