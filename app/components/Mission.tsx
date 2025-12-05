import React from 'react';
import Image from 'next/image';
// Make sure these paths match your actual folder structure
import mission_1 from '../../public/mission_1.jpg';
import mission_2 from '../../public/mission_2.jpg';
import ellipse from '../../public/Ellipse.png';
import Group from '../../public/Group.png';
import Subtracct from '../../public/Subtract.png'; 
import { ChevronRight } from 'lucide-react'; // Ensure you have this installed, or remove the Icon usage below

const Mission = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 font-sans">
      
      {/* --- Top Banner Text --- */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-[32px] md:text-3xl font-bold uppercase leading-tight text-gray-900">
          Our mission is to <span className="text-[#D62062]">bridge potential</span> and <span className="text-[#D62062]">opportunity</span> through tailored training programs for all ages.
        </h1>
      </div>

      {/* --- Main Content Grid --- */}
      <div className="flex flex-col gap-20 px-4 md:px-10">
        
        {/* --- Section 1: About Ngo --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border border-[#F998BB] p-8 items-center relative">
          
          {/* Left Text Content */}
          <div className="space-y-6 z-10">
            <h2 className="text-4xl font-extrabold text-gray-900">
              About <span className="text-[#FF1376]">Ngo</span>
            </h2>

            <div className="flex items-center">
              <div className="w-5 h-5 bg-[#FF1376] mr-3 shrink-0"></div>
              <h3 className="text-[24px] font-bold text-[#131313]">Who we are-</h3>
            </div>

            <p className="text-[#131313] leading-relaxed max-w-[500px] text-[18px] md:text-base">
              Founded in [Year], our organization has been at the forefront of
              workforce development, focusing on equipping underprivileged youth
              and adults with the skills they need to succeed. From basic
              education to advanced vocational training, we provide a range of
              programs designed to meet the unique needs of our community.
            </p>
          </div>

          {/* Right Image Content */}
          <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
            
            {/* 1. Ellipse (Pink Background Circle) - HIDDEN on Mobile */}
        <div className="hidden md:block absolute top-[-30px] md:left-[79px] -z-10">
    <Image 
        src={ellipse} 
        alt="Background Decoration" 
        width={100}
        height={100}
        className="opacity-80"
    />
</div>
            {/* 2. Subtract (Top Right Pattern) - HIDDEN on Mobile */}
            <div className="hidden md:block absolute -top-10 -right-5 z-0">
                <Image 
                    src={Subtracct} 
                    alt="Pattern Decoration" 
                    width={80} 
                    height={80} 
                />
            </div>

            {/* Main Image Container */}
            <div className="relative w-full max-w-[450px] h-[300px] md:h-[350px] overflow-hidden rounded-sm shadow-lg z-10">
              <Image 
                src={mission_1} 
                alt="Student with laptop"
                fill
                className="object-cover rounded-[1px]"
              />
            </div>

            {/* 3. Group (Bottom Right Pattern) - HIDDEN on Mobile */}
            <div className="hidden md:block absolute bottom-[-30px] right-[-30px] ">
                <Image 
                    src={Group} 
                    alt="Dot Pattern Decoration" 
                    width={100} 
                    height={80}
                />
            </div>

          </div>
        </div>

        {/* --- Section 2: Vision & Mission --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Image Content */}
          <div className="relative w-full max-w-[481px] h-[350px] md:h-[400px] overflow-hidden rounded-sm shadow-lg hidden mx-auto md:block">
             <Image 
                src={mission_2}
                alt="Hands working on laptop"
                fill
                className="object-cover"
              />
          </div>

          {/* Right Text Content */}
          <div className="space-y-6 border border-[#FDC5DA] p-6 gap-4">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-[#FF1376] mr-3 shrink-0"></div>
              <h3 className="text-[24px] font-bold text-[#131313] ">Our Vision and mission</h3>
            </div>

            <p className="text-[20px] font-medium leading-11 text-[#121212]">
              "Unlocking Potential, Creating Opportunities."
            </p>

            <p className="text-[#121212] max-w-[400px] text-[18px] leading-[27px] md:text-base">
              Empowering underprivileged individuals with the skills and support
              needed for meaningful employment, envisioning a world where
              everyone can achieve their full potential through equal
              opportunities
            </p>

            <button className="group bg-[#131313] text-white font-medium py-3 px-6 rounded-sm flex items-center transition-all duration-300 mt-4">
              Become Our Member 
              {/* If you have the icon installed, uncomment the next line to match screenshot */}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;