import Link from "next/link";
import React from "react";
import { SidebarAbout } from "../Sidebar/Sidebar";
import { EmojifyMiniLogo } from "@/ui/icons";

interface NavShelfProps {
  isScrolled: boolean;
  activeSection: string;
}

const data = [
  { id: 1, content: "Emojify AI", href: "#preview", key: "preview" },
  { id: 2, content: "About", href: "#about", key: "about" },
  { id: 3, content: "Work", href: "#work", key: "work" },
  { id: 4, content: "Demo", href: "#demo", key: "demo" },
];

const NavShelf: React.FC<NavShelfProps> = ({ isScrolled, activeSection }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`flex z-[999] top-[1.4rem] fixed ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }  bg-[#464344] px-8 py-3 gap-x-8 items-center rounded-[99px] justify-center transition-opacity duration-500`}
      >
        <EmojifyMiniLogo className="mobile:hidden"/>
        {data.map((item) => (
          <Link key={item.id} href={item.href} className="relative hidden mobile:block">
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
        <SidebarAbout />
      </div>
    </div>
  );
};

export default NavShelf;