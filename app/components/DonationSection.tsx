import React from "react";
import Image from "next/image";
import i1 from "../../public/i1.jpg";
import i2 from "../../public/i2.jpg";
import i3 from "../../public/i3.jpg";
import i4 from "../../public/i4.png";
import i5 from "../../public/i5.jpg";
import i6 from "../../public/i6.jpg";
import subtract_1 from "../../public/subtract_1.png";
const DonationSection = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 font-sans bg-white flex justify-center">
      {/* --- Main Pink Container --- */}

      <div className="w-full max-w-[1005px] lg:h-[603px] bg-[#E31E5D] border-14 border-[#FF1376] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-xl flex flex-col lg:flex-row relative">
        <div className="absolute top-18 -left-20 w-[300px] h-full pointer-events-none z-0">
          <Image
            src={subtract_1}
            alt="second subtract"
            height={250}
            width={250}
            className="opacity-100 object-contain" // Increased opacity to 20% so it's visible
          />
        </div>
        {/* --- Left Content Section --- */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
          <h2 className="text-white text-[20px] md:text-5xl lg:text-[41px] font-bold leading-[1.1] mb-6 tracking-wide">
            Change Lives, One <br /> Donation at a Time.
          </h2>

          <p className="text-white/90 text-lg md:text-xl text-[17px] leading-relaxed mb-10 max-w-lg font-medium">
            Your donation helps empower underprivileged individuals with the
            skills and opportunities needed for a brighter future.
          </p>

          <div>
            <button className="bg-white text-[#E31E5D]  text-lg font-medium py-4 px-10 rounded-[50px] shadow-md ">
              Donate Now
            </button>
          </div>
        </div>

        {/* --- Right Image Grid Section --- */}
        <div className="flex-1 relative h-[500px] lg:h-full overflow-hidden min-w-[459px] w-[459px] bg-[#E31E5D]">
          {/* 
                1. Absolute Positioning to Force Center: 
                   This places the center of the grid exactly at the center of the right panel.
                2. transform -translate-x/y-1/2: 
                   This pulls it back so it's perfectly centered.
             */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
            {/* Column 1 - Shifted Upwards slightly (-translate-y-12) to create stagger */}
            <div className="flex flex-col gap-4 transform -translate-y-12">
              {/* Img 1 */}
              <div className="relative w-[213px] h-[216px] rounded-[3px] overflow-hidden  shrink-0">
                <Image src={i1} alt="Img 1" fill className="object-cover" />
              </div>
              {/* Img 2 */}
              <div className="relative w-[213px] h-[216px] rounded-[3px] overflow-hidden shadow-sm shrink-0">
                <Image src={i2} alt="Img 2" width={213} height={216} />
              </div>
              {/* Img 3 */}
              <div className="relative w-[213px] h-[216px] rounded-[3px] overflow-hidden  shrink-0">
                <Image src={i3} alt="Img 3" fill className="object-cover" />
              </div>
            </div>

            {/* Column 2 - Shifted Downwards slightly (translate-y-12) to create stagger */}
            <div className="flex flex-col gap-4 transform translate-y-12">
              {/* Img 4 */}
              <div className="relative w-[213px] h-[216px]  overflow-hidden rounded-[3px]  shrink-0">
                <Image src={i4} alt="Img 4" fill className="object-cover" />
              </div>
              {/* Img 5 */}
              <div className="relative w-[213px] h-[216px] rounded-[3px] overflow-hidden shadow-sm shrink-0">
                <Image src={i5} alt="Img 5" fill className="object-cover" />
              </div>
              {/* Img 6 */}
              <div className="relative w-[213px] h-[216px] rounded-[3px] overflow-hidden  shrink-0">
                <Image src={i6} alt="Img 6" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
