import { HiDownload } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import HeroHeadings from "../atoms/headings/HeroHeadings";
import HeroHeadingSpace from "../atoms/spaces/HeroHeadingSpace";
import Aos from "aos";
import { useEffect } from "react";


function HeroDescription() {

  useEffect(()=>{
      Aos.init({
        duration:3000
      })
  },[])

    return (
        <>
           <div>
              <div data-aos="fade-right">
                <HeroHeadings content={"Control the device"}/>
                <HeroHeadingSpace/>
                
                <HeroHeadings content={"easily with"}/>
                <HeroHeadingSpace/>

                <span className="text-purple-500 text-4xl sm:text-5xl md:text-5xl font-bold flex justify-center md:justify-start">
                  {" "}
                  Smarthome
                </span>
                
                <div className="pt-6 sm:pt-8 lg:pt-9">
                  <span className="text-white flex justify-center md:justify-start">
                    You can now easily control all your home <br />
                    devices with just smarthome
                  </span>
                </div>
              </div>
              

              <div className="pt-8 sm:pt-12"/>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6" data-aos="fade-in">
                <button className="text-black bg-white hover:bg-slate-100 px-6 py-3 rounded-xl p-4 flex items-center justify-center">
                  <span>Get Started</span>{" "}
                  <IoIosArrowForward className="mt-0.5 translate-x-3" />
                </button>

                <button className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl p-4 flex items-center justify-center">
                  <span>Download</span>{" "}
                  <HiDownload className="mt-0.5 translate-x-3" />
                </button>
              </div>
            </div> 
        </>
    );
}

export default HeroDescription;