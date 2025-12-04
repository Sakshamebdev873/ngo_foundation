import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[92px] flex items-center justify-between px-20">
      {/* Left Logo */}
      <div className="flex flex-col items-center leading-none">
        <p className="nav text-[20px] font-normal text-[#FF1376]">Ngo</p>
        <p className="nav_1 text-[20px] font-normal text-[#FF1376]">
          Foundation
        </p>
      </div>

      {/* Center Navigation Links */}
      <div className="hidden md:flex gap-10 text-[16px]">
        <h1 className="text-[#FF1376] nav_center font-semibold cursor-pointer">
          Home
        </h1>
        <h1 className="text-[#00000080] nav_center cursor-pointer">Programs</h1>
        <h1 className="text-[#00000080] nav_center cursor-pointer">About Us</h1>
        <h1 className="text-[#00000080] nav_center cursor-pointer">
          Contact Us
        </h1>
      </div>

      {/* Donate Button */}
      <button
        type="button"
        className="bg-[#D62062] w-[120px] h-12 rounded text-center nav_center text-white font-semibold text-[18px]"
      >
        Donate
      </button>
    </nav>
  );
};

export default Navbar;
