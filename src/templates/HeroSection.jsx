import React,{useEffect} from "react";
import img from "../assets/img1.png";
import HeroDescription from "../molecules/HeroDescription";
import Aos from "aos";


function HeroSection() {

  useEffect(()=>{
      Aos.init({
        duration:3000
      })

  },[])

  return (
    <>
      <div className="px-4">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Description */}
            <HeroDescription/>

            {/* image */}
            <div className="mt-8 md:-mt-4" data-aos="fade-left">
              <img className="w-full" src={img} alt="Smarthome Device" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
