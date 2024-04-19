import React from "react";
import Link from "next/link";

interface MenuDrawerProps {
  isVisible: boolean;
  toggleMenu: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isVisible, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full transform transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } bg-black shadow-xl p-5 z-50 flex flex-col items-center justify-center text-white`}
    >
      <div onClick={toggleMenu} className="mb-4 text-lg barlow-regular cursor-pointer">
        <Link href="/about">About Us</Link>
      </div>

      <div onClick={toggleMenu} className="mb-4 text-lg barlow-regular cursor-pointer">
        <Link href="/#services">Services</Link>
      </div>

      <div onClick={toggleMenu} className="mb-4 text-lg barlow-regular cursor-pointer">
        <Link href="/#contact">Contact Us</Link>
      </div>

      <div onClick={toggleMenu} className="text-lg barlow-regular cursor-pointer">
        <Link href="/projects">All Projects</Link>
      </div>
    </div>
  );
};

export default MenuDrawer;
