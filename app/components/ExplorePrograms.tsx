import React from 'react';
import Image from 'next/image';
import { ChevronRight, Check } from 'lucide-react';

// Replace these imports with your actual file paths
import ellipse from '../../public/Ellipse.png';
import Group from '../../public/Group.png';
import Subtracct from '../../public/Subtract.png';
// Your main image for the top section
import program from '../../public/program.png'; // Example path

const ExplorePrograms = () => {
  // Data for the three cards to keep the code clean
  const programCards = [
    {
      title: "Employability at 12-18",
      description: "We offer foundational skills training for youth, focusing on literacy, numeracy, and life skills to prepare them for future education and career opportunities.",
      features: [
        "Basic education support",
        "Career awareness and exploration",
        "Mentorship and guidance"
      ]
    },
    {
      title: "Employability at 19-30",
      description: "We offer foundational skills training for youth, focusing on literacy, numeracy, and life skills to prepare them for future education and career opportunities.",
      features: [
        "Basic education support",
        "Career awareness and exploration",
        "Mentorship and guidance"
      ]
    },
    {
      title: "Employability at 30",
      description: "We offer foundational skills training for youth, focusing on literacy, numeracy, and life skills to prepare them for future education and career opportunities.",
      features: [
        "Basic education support",
        "Career awareness and exploration",
        "Mentorship and guidance"
      ]
    }
  ];

  return (
    <section className="w-full bg-[#FFEBF2] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4  md:px-10">
        
        {/* =========================================
            PART 1: HEADER & TOP SECTION
           ========================================= */}
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h3 className="text-[#D62062] font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
            Explore Programs
          </h3>
          <h2 className="text-[18px] md:text-4xl font-bold text-gray-900 leading-tight">
            Empower Your Future with Our Tailored Programs
          </h2>
        </div>

        {/* Top Split Content (Text Box + Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Left: Text Box */}
          <div className="bg-white p-8 md:p-12 border border-pink-200 shadow-sm relative z-10 rounded-sm">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 bg-[#FF1376] mr-4 shrink-0 rounded-sm"></div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Ngo Programs
              </h3>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed">
              Our tailored programs empower individuals at every
              stage of life, providing the skills and support needed
              to secure meaningful employment and build a
              better future.
            </p>
          </div>

          {/* Right: Image & Decorations */}
          <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
            {/* Ellipse - Hidden on mobile */}
            <div className="hidden md:block absolute top-5 left-[50px] z-0">
               <Image src={ellipse} alt="Decoration" width={92} height={92} className="opacity-100" />
            </div>

            {/* Subtract - Hidden on mobile */}
            <div className="hidden md:block absolute  -right-12 z-0">
               <Image src={Subtracct} alt="Pattern" width={108} height={108} />
            </div>

            {/* Main Image */}
            <div className="relative z-10 w-full max-w-[500px] h-[350px] overflow-hidden shadow-md rounded-sm">
              <Image 
                src={program} 
                alt="People learning at computers"
                fill
                className="object-cover z-99"
              />
            </div>

            {/* Group Dots - Hidden on mobile */}
            <div className="hidden md:block absolute -bottom-20 -right-12 ">
               <Image src={Group} alt="Dots Pattern" width={120} height={120} />
            </div>
          </div>
        </div>

        {/* =========================================
            PART 2: THREE CARDS SECTION
           ========================================= */}
        

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl mt-12 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              
              {/* Card Header (Dark Pink) */}
              <div className="bg-[#D62062] py-6 px-4 text-center">
                <h3 className="text-white text-xl font-bold">
                  {card.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-700 text-[16px] leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Divider Line */}
                <hr className="border-[#131313] mb-6" />

                <p className="font-normal text-[#131313] mb-4">Includes:</p>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-1">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#D62062] mr-3 mt-1 shrink-0" strokeWidth={3} />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="flex justify-center">
                    <button className="bg-[#131313] text-white font-medium py-3 px-8 rounded-sm flex items-center hover:bg-gray-800 transition-colors">
                    Learn More
                    <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

    
    </section>
  );
};

export default ExplorePrograms;