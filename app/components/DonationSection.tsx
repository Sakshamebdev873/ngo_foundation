import React from 'react';
import Image from 'next/image';

const DonationSection = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 font-sans bg-white">
      {/* --- Main Pink Container --- */}
      <div className="max-w-7xl mx-auto bg-[#E31E5D] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-xl flex flex-col lg:flex-row min-h-[550px] relative">
        
        {/* --- Background Pattern (Left Side Decoration) --- */}
        {/* This approximates the subtle wave pattern in your screenshot */}
        <div className="absolute top-0 left-0 w-[300px] h-full opacity-10 pointer-events-none z-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="lines" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                         <rect x="0" y="0" width="50" height="4" fill="white" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#lines)" />
            </svg>
        </div>

        {/* --- Left Content Section --- */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative z-10">
          <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 tracking-wide">
            Change Lives, One <br /> Donation at a Time.
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-medium">
            Your donation helps empower underprivileged individuals with the skills and opportunities needed for a brighter future.
          </p>
          
          <div>
            <button className="bg-white text-[#E31E5D] hover:bg-gray-50 text-lg font-bold py-4 px-10 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
              Donate Now
            </button>
          </div>
        </div>

        {/* --- Right Image Grid Section --- */}
        <div className="flex-1 relative lg:max-w-[50%] h-[500px] lg:h-auto overflow-hidden">
             {/* We rotate the parent container slightly or just use a grid gap to match the collage look */}
             <div className="grid grid-cols-2 gap-4 h-[120%] -mt-10 md:-mt-0 p-4 lg:pr-8 lg:py-8">
                 
                 {/* Column 1 (Offset upwards for the collage effect) */}
                 <div className="flex flex-col gap-4 -mt-16 lg:-mt-24">
                    {/* Img 1 */}
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-sm">
                        <Image 
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                            alt="Volunteers"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Img 2 (Tall) */}
                    <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-sm">
                        <Image 
                            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop" 
                            alt="Happy group"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Img 3 */}
                    <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-sm">
                        <Image 
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
                            alt="Helping hands"
                            fill
                            className="object-cover"
                        />
                    </div>
                 </div>

                 {/* Column 2 */}
                 <div className="flex flex-col gap-4 lg:mt-4">
                    {/* Img 4 (Large) */}
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-sm">
                        <Image 
                            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop" 
                            alt="Study group"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Img 5 */}
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-sm">
                        <Image 
                            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop" 
                            alt="Library"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Img 6 */}
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-sm">
                        <Image 
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" 
                            alt="Teaching"
                            fill
                            className="object-cover"
                        />
                    </div>
                 </div>

             </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;