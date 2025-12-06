import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 pb-24 md:pb-0">
      {/* Footer Container */}
      <div className="bg-[#181818] text-white rounded-t-[40px] md:rounded-t-[60px] px-6 py-12 md:px-12 md:py-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* --- Main Grid Content --- */}
          {/* Reduced bottom padding on mobile to bring copyright closer, kept desktop spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 pb-8 lg:pb-16">
            
            {/* 1. Left Column */}
            <div className="lg:col-span-5 space-y-10">
              <div className="md:text-left text-center ">
                <h2 className="text-3xl foot font-bold italic tracking-wide">
                  Ngo
                </h2>
                <h1 className="text-3xl font-serif tracking-wider text-white">
                  Foundation
                </h1>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#F998BB] foot_1 font-bold text-[20px]">
                  Core Values
                </h3>
                <p className="text-gray-300 foot_1 leading-relaxed text-[16px] md:text-base">
                  At Charity 128, we prioritize transparency, integrity, and
                  inclusivity. These values guide our actions as we work
                  tirelessly to bridge the gap between those in need and those
                  willing to help.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#F998BB] font-semibold text-xl foot_1 leading-6">
                  Sign up for our newsletter
                </h3>

                <form className="flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent border border-[#F998BB] rounded-full md:rounded-sm pl-4 pr-12 md:px-4 py-3 foot_1 font-normal text-[18px] text-white placeholder-gray-400 focus:outline-none focus:border-[#D62062] transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-center text-[#ffff] bg-[#D62062] rounded-full rotate-45 md:hidden"
                    >
                      <Send className="w-5 h-5 pr-0.5" />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="hidden md:block bg-[#D62062] hover:bg-[#b0164d] text-white font-semibold text-[16px] py-3 px-8 rounded-sm transition-colors"
                  >
                    Signup
                  </button>
                </form>
              </div>
            </div>

            {/* 2. Middle Column (Useful Links) - UPDATED FOR MOBILE GRID */}
            <div className="lg:col-span-3 lg:pl-8">
              <h3 className="text-[#F998BB] foot_1 text-[16px] font-semibold mb-8">
                Useful links
              </h3>
              
              {/* 
                  UPDATED LIST CLASS:
                  - grid grid-cols-2: Two columns on mobile
                  - grid-rows-3: Forces 3 rows (so 3 items on left, 2 on right)
                  - grid-flow-col: Fills vertically first (Left col fills 1,2,3 then Right col 4,5)
                  - lg:block: Resets to standard block list on Desktop
              */}
              <ul className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-4 gap-y-4 lg:block lg:space-y-6 lg:gap-0 font-normal text-[#FFFFFF]">
                <li>
                  <Link href="#" className="hover:text-[#D62062] transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#D62062] transition-colors">Our Mission</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#D62062] transition-colors">Why Choose Us</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#D62062] transition-colors">Our Programs</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#D62062] transition-colors">Membership</Link>
                </li>
              </ul>
            </div>

            {/* 3. Right Column (Contacts) */}
            <div className="lg:col-span-4">
              <h3 className="text-[#F998BB] foot_1 font-semibold text-xl mb-8">
                Our contacts
              </h3>

              <ul className="space-y-6 text-[16px] font-normal text-gray-300 mb-10">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-[#F998BB] mr-4 mt-1 shrink-0" />
                  <span>information@office.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-[#F998BB] mr-4 mt-1 shrink-0" />
                  <span>+ (0777) 888 88 888</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#F998BB] mr-4 mt-1 shrink-0" />
                  <span>2307 Beverley, New York</span>
                </li>
              </ul>

              <div className="flex md:justify-start md:items-start justify-center items-center gap-4">
                <Link href="#" className="w-12 h-12 rounded-full border flex items-center justify-center border-[#F998BB] text-[#F998BB] transition-all">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-12 h-12 rounded-full border flex items-center justify-center border-[#F998BB] text-[#F998BB] transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* --- Bottom Copyright Bar --- */}
          {/* Added pb-8 to ensure content isn't cut off on mobile screens */}
          <div className=" pt-0 md:pt-4 pb-8 md:pb-0 text-center text-white text-[16px] leading-6 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8">
            <p>© Charity 128. All Rights Reserved 2025.</p>
            <Link href="#" className="text-white hover:text-[#D62062] transition-colors block">
              Licensing
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;