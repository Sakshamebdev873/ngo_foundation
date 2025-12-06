import React from 'react';
import Image from 'next/image';
import { Check, ChevronRight } from 'lucide-react';

// Adjust path based on your folder structure
import member_1 from '../../public/member_1.png'; // Middle (Main)
import member_2 from '../../public/member_2.png'; // Right
import member_3 from '../../public/member_3.png'; // Left

const BecomeMember = () => {
  
  // Data for the "Create an Impact" section
  const impactBenefits = [
    '"Be  part of a  like-minded  community."',
    '"Gain  access  to  career-enhancing  resources."',
    '"Empower  others  through  your  support."'
  ];

  // Data for the Pricing Cards
  const pricingPlans = [
    {
      title: "Basic plan",
      price: "$19/mo",
      isPopular: false,
      features: ["Feature text goes here", "Feature text goes here", "Feature text goes here"]
    },
    {
      title: "Most Popular",
      price: "$19/mo",
      isPopular: true, 
      features: ["Feature text goes here", "Feature text goes here", "Feature text goes here"]
    },
    {
      title: "Premium plan",
      price: "$19/mo",
      isPopular: false,
      features: ["Feature text goes here", "Feature text goes here", "Feature text goes here"]
    }
  ];

  return (
    // Changed overflow-hidden to overflow-visible or removed it to prevent cutting
    <section className="w-full bg-white py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
        {/* =========================================
            PART 1: INTRO & IMAGE COMPOSITION
           ========================================= */}
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#D62062] font-bold text-[28px] md:text-[32px] uppercase mb-3">
            BECOME A MEMBER
          </h3>
          <h2 className="text-[24px] md:text-4xl font-medium text-gray-900 leading-tight">
            Join us in empowering lives and shaping futures.
          </h2>
        </div>

        {/* Content Grid */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          
    {/* --- Left Column: Text & Pink Card (Untouched) --- */}
    <div className="space-y-8 flex flex-col items-center lg:items-start">
      <div className="flex items-center self-start">
        <div className="w-6 h-6 bg-[#FF1376] mr-4 shrink-0 rounded-sm"></div>
        <h3 className="text-[24px] font-bold text-[#131313]">
          Create an Impact
        </h3>
      </div>

      <p className="text-gray-700 text-[18px] font-normal hidden md:block leading-6 w-full max-w-[439px]">
        As a member, you gain access to exclusive
        resources, career support, and a community
        committed to making a difference. Choose a
        membership plan that fits your needs and start
        making an impact today.
      </p>

      <div className="bg-[#D62062] rounded-2xl p-8 w-full max-w-[439px] min-h-[260px] md:p-10 shadow-lg">
        <div className="space-y-6">
          {impactBenefits.map((text, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1 mr-4">
                <Check className="w-5 h-5 text-[#D62062] stroke-[3px]" />
              </div>
              <p className="text-white text-[18px] space-x-0.5 leading-[27px] font-semibold">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* --- Right Column: Image Composition (Updated) --- */}
    {/* 
        Changes:
        1. Added 'items-center justify-center' (removed md: prefix) to center content on Mobile.
        2. Changed 'w-full' to 'w-auto' to work better with negative margins.
        3. Set '-mx-4' to pull images to the edge, removing side padding on mobile.
    */}
    <div className="h-[400px] md:h-[500px] w-auto flex items-center justify-center gap-2 md:gap-6 mt-1 -mx-12 md:mx-0 lg:mt-0">

      {/* Left Image (Member 2) */}
      <div className="relative w-28 h-[70%] md:w-[150px] md:h-[295px] shrink-0">
        <Image 
          src={member_2} 
          alt="Member Left" 
          fill
          className="object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity" 
        />
      </div>

      {/* Middle Image (Member 1 - Main Focus) */}
      <div className="relative w-[200px] h-[90%] md:w-[241px] md:h-[389px] shrink-0 z-20 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
        <Image 
          src={member_1} 
          alt="Main Member Focus" 
          fill
          className="object-cover" 
        />
      </div>

      {/* Right Image (Member 3) */}
      <div className="relative w-28 h-[70%] md:w-[150px] md:h-[295px] shrink-0">
        <Image 
          src={member_3} 
          alt="Member Right" 
          fill
          className="object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity" 
        />
      </div>

    </div>
</div>

        {/* =========================================
            PART 2: PRICING CARDS
           ========================================= */}
        
        {/* FIXED: Changed h-[485px] to h-auto. Fixed height was cutting off content on mobile. */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full h-auto gap-8 px-4 -mt-12 md:mt-0 items-start">
          <p className='block md:hidden text-center font-extrabold text-[19px] ' >Choose Your Path to <span className='text-[#D62062]' >Empowerment</span> </p>
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-xl p-8 flex flex-col w-full
                transition-all duration-300
                ${plan.isPopular 
                  ? 'border-2 border-[#D62062] shadow-[0_0_10px_rgba(0,0,0,0.25)] relative' 
                  : 'border border-gray-100 shadow-xl/30 hover:shadow-xl'}
              `}
            >
              {/* Card Title & Price */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
              <p className="text-[#D62062] text-3xl font-bold mb-6">{plan.price}</p>
              
              {/* Divider */}
              <div className="w-full h-px bg-[#131313] mb-6"></div>
              
              <p className="text-gray-900 mb-4 font-medium">Includes:</p>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-[#D62062] mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full bg-[#131313] text-[16px] font-semibold text-white py-3 px-4 rounded-sm flex items-center justify-center transition-colors">
                Become Our Member
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BecomeMember;