import Image from "next/image";
import righticon from "../../public/righticon.png";
import locationIcon from "../../public/locationIcon.png";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";
import img4 from "../../public/img4.png";
import img5 from "../../public/img5.png";

const imgData = [img1, img2, img3, img4, img5];

const Hero = () => {
  return (
    <div className="bg-url w-full bg-cover bg-center">
      {/* MAIN CONTAINER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-12 lg:px-20 py-10">
        
        {/* LEFT SECTION */}
        <div className="mt-10 md:mt-12 md:ml-20 max-w-[784px]">
          
          {/* TEXT SECTION */}
          {/* Changed text-center to text-left for mobile alignment */}
          <div className="flex flex-col text-left">
            <p className="font-bold text-[20px] md:text-[18px] text-[#F998BB]">Who we are</p>

            <p className="text-white mt-2 mb-4 font-bold text-[36px] md:text-[48px] leading-tight">
              Empowering Lives Through Skill Development
            </p>

            {/* Removed mx-auto to prevent centering on mobile */}
            <p className="font-normal text-white text-[16px] md:text-[16px] md:w-[470px]">
              Transforming potential into success by providing the tools,
              resources, and training needed to thrive in today's job market.
            </p>
          </div>

       {/* BUTTONS */}
          <div className="mt-6 flex flex-row gap-3 w-full md:w-auto">
            <button
              type="button"
              // Used 'flex-1' so it takes up 50% of the space. 
              // Reduced mobile text to 16px to prevent wrapping.
              className="flex-1 md:flex-none md:w-36 h-14 text-[16px] md:text-[18px] text-center font-semibold text-white bg-[#D62062] rounded-sm whitespace-nowrap"
            >
              Join us now
            </button>

            <button
              type="button"
              // Used 'flex-1' so it takes up 50% of the space.
              className="flex-1 md:flex-none md:w-36 h-14 text-[16px] md:text-[18px] text-center font-semibold bg-white text-[#D62062] rounded-sm"
            >
              Donate
            </button>
          </div>
          {/* LOCATION */}
          {/* Removed justify-center so it aligns left (start) by default */}
          <div className="flex items-center gap-2 my-6">
            <Image src={locationIcon} alt="locationIcon" className="w-6 h-6" />
            <p className="font-normal text-[16px] text-white">
              1504878, Rm Nisha Nagar, Delhi
            </p>
          </div>

          {/* OVERLAPPING IMAGES */}
          {/* Removed justify-center so it aligns left (start) by default */}
          <div className="flex items-center">
            {imgData.map((item, index) => (
              <div
                key={index}
                className={`w-14 h-9 overflow-hidden 
            ${index !== 0 ? "-ml-7" : ""}`}
              >
                <Image
                  src={item}
                  alt={`img${index}`}
                  className="w-9 h-9 object-cover object-top"
                />
              </div>
            ))}
          </div>

          {/* Changed text-center to text-left */}
          <p className="font-normal text-[16px] leading-5 text-white mt-4 text-left">
            Join Our Organization
          </p>
        </div>

        {/* RIGHT ICON — HIDDEN ON MOBILE */}
        <div className="hidden md:flex justify-end items-center h-[250px] w-[325px]">
          <Image src={righticon} alt="rightIcon" className="w-8 h-8 mt-22" />
        </div>
      </div>
    </div>
  );
};
export default Hero;