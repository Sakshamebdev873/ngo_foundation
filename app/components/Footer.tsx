import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12">
      {/* 
         The Footer Container 
         - bg-[#181818] gives the dark gray color
         - rounded-t-[50px] creates the curved top edges
      */}
      <div className="bg-[#181818] text-white rounded-t-[40px] md:rounded-t-[60px] px-6 py-16 md:px-12 md:py-20 lg:px-24">
        
        <div className="max-w-7xl mx-auto">
          
          {/* --- Main Grid Content --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-b border-gray-800 pb-16">
            
            {/* 1. Left Column (Branding, Values, Newsletter) - Spans 5 columns */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Logo Area */}
              <div>
                <h2 className="text-3xl font-bold italic tracking-wide">Ngo</h2>
                <h1 className="text-4xl font-serif tracking-wider text-white">Foundation</h1>
              </div>

              {/* Core Values Text */}
              <div className="space-y-4">
                <h3 className="text-[#F998BB] font-bold text-xl">Core Values</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  At Charity 128, we prioritize transparency, integrity, and inclusivity. These values
                  guide our actions as we work tirelessly to bridge the gap between those in need
                  and those willing to help.
                </p>
              </div>

              {/* Newsletter Section */}
              <div className="space-y-4">
                <h3 className="text-[#F998BB] font-bold text-xl">Sign up for our newsletter</h3>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#D62062] transition-colors"
                  />
                  <button 
                    type="button"
                    className="bg-[#D62062] hover:bg-[#b0164d] text-white font-bold py-3 px-8 rounded-sm transition-colors"
                  >
                    Signup
                  </button>
                </form>
              </div>
            </div>

            {/* 2. Middle Column (Useful Links) - Spans 3 columns */}
            <div className="lg:col-span-3 lg:pl-8">
              <h3 className="text-[#F998BB] font-bold text-xl mb-8">Useful links</h3>
              <ul className="space-y-6 text-gray-300">
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

            {/* 3. Right Column (Contacts) - Spans 4 columns */}
            <div className="lg:col-span-4">
              <h3 className="text-[#F998BB] font-bold text-xl mb-8">Our contacts</h3>
              
              <ul className="space-y-6 text-gray-300 mb-10">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-[#F998BB] mr-4 mt-1 shrink-0" />
                  <span>information@office.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-[#F998BB] mr-4 mt-1 shrink-0" />
                  <span>+6329562949</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#F998BB] mr-4 mt-1 shrink-0" />
                  <span>2307 Beverley, New York</span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-4">
                <Link href="#" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#F998BB] hover:text-[#F998BB] transition-all">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#F998BB] hover:text-[#F998BB] transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>

          {/* --- Bottom Copyright Bar --- */}
          <div className="pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-center gap-2 md:gap-8">
            <p>© Charity 128. All Rights Reserved 2025.</p>
            <Link href="#" className="hover:text-white transition-colors">Licensing</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;