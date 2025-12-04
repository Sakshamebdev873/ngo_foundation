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
    <div className="bg-url">
      <div className="flex items-center justify-around">
        
        {/* LEFT SECTION — shifted to the right */}
        <div className="w-[784px] h-[530px] mt-12 ml-20">
          <div className="flex flex-col">
            <p className="font-bold text-[20px] text-[#F998BB]">Who we are</p>
            <p className="text-[#FFFFFF] mb-4 font-bold text-[48px]">
              Empowering Lives Through Skill Development
            </p>
            <p className="font-normal text-[#FFFFFF] w-[470px] text-[18px]">
              Transforming potential into success by providing the tools,
              resources, and training needed to thrive in today's job market.
            </p>
          </div>

          <div className="w-[280px] my-[18px] flex gap-x-5 h-[60px]">
            <button
              type="button"
              className="w-36 h-14 text-[18px] text-center font-semibold text-white bg-[#D62062] rounded-sm"
            >
              Join us now
            </button>

            <button
              type="button"
              className="w-36 h-14 text-[18px] text-center font-semibold bg-white text-[#D62062] rounded-sm"
            >
              Donate
            </button>
          </div>

          <div className="w-[290px] h-6 flex gap-x-2 my-[18px]">
            <Image src={locationIcon} alt="locationIcon" className="w-6 h-6" />
            <p className="font-normal text-[16px] text-white">
              1504878, Rm Nisha Nagar, Delhi
            </p>
          </div>

          <div className="flex">
            {imgData.map((item, index) => (
              <Image src={item} alt={`img${index}`} key={index} />
            ))}
          </div>

          <p className="font-normal text-[16px] leading-5 text-white mt-4">
            Join Our Organization
          </p>
        </div>

        {/* RIGHT SECTION — stays exactly the same */}
        <div className="flex justify-end items-center h-[250px] w-[325px]">
          <Image
            src={righticon}
            alt="rightIcon"
            className="w-8 h-8 mt-22"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
