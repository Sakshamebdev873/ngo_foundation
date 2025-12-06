"use client"; // Required if you are using Next.js App Router because we use useState

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Changed px-20 to px-6 for mobile, md:px-20 for desktop
    <nav className="w-full h-[92px] flex items-center justify-between px-6 md:px-20 bg-white relative z-50 shadow-sm md:shadow-none">
      
      {/* --- Left Logo --- */}
      <div className="flex flex-col items-center leading-none z-50">
        <p className="nav text-[20px] font-normal text-[#FF1376]">Ngo</p>
        <p className="nav_1 text-[20px] font-normal text-[#FF1376]">
          Foundation
        </p>
      </div>

      {/* --- Desktop Center Navigation Links (Hidden on Mobile) --- */}
      <div className="hidden md:flex gap-10 text-[16px]">
        <h1 className="text-[#FF1376] nav_center font-semibold cursor-pointer hover:opacity-80 transition-opacity">
          Home
        </h1>
        <h1 className="text-[#00000080] nav_center cursor-pointer hover:text-[#FF1376] transition-colors">Programs</h1>
        <h1 className="text-[#00000080] nav_center cursor-pointer hover:text-[#FF1376] transition-colors">About Us</h1>
        <h1 className="text-[#00000080] nav_center cursor-pointer hover:text-[#FF1376] transition-colors">
          Contact Us
        </h1>
      </div>

      {/* --- Desktop Donate Button (Hidden on Mobile) --- */}
      <div className="hidden md:block">
        <button
            type="button"
            className="bg-[#D62062] w-[120px] h-12 rounded text-center nav_center text-white font-semibold text-[18px] hover:bg-[#b0164d] transition-colors"
        >
            Donate
        </button>
      </div>

      {/* --- Mobile Menu Icon (Visible ONLY on Mobile) --- */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} className="text-[#000000] focus:outline-none">
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {/* This overlay appears when the menu icon is clicked */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "92px" }} // Starts below the navbar
      >
        <h1 
            onClick={() => setIsMenuOpen(false)}
            className="text-[#FF1376] font-semibold cursor-pointer"
        >
          Home
        </h1>
        <h1 
            onClick={() => setIsMenuOpen(false)}
            className="text-[#00000080] cursor-pointer hover:text-[#FF1376]"
        >
            Programs
        </h1>
        <h1 
            onClick={() => setIsMenuOpen(false)}
            className="text-[#00000080] cursor-pointer hover:text-[#FF1376]"
        >
            About Us
        </h1>
        <h1 
            onClick={() => setIsMenuOpen(false)}
            className="text-[#00000080] cursor-pointer hover:text-[#FF1376]"
        >
          Contact Us
        </h1>

        {/* Mobile Donate Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="bg-[#D62062] w-[150px] h-14 rounded text-center text-white font-semibold text-[20px] mt-4"
        >
          Donate
        </button>
      </div>

    </nav>
  );
};

export default Navbar;