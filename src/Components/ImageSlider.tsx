import { useState } from "react"
import S1 from "../assets/ImageSlider/S1.jpg"
import S2 from "../assets/ImageSlider/S2.jpg"
import S3 from "../assets/ImageSlider/S3.jpg"
import S4 from "../assets/ImageSlider/S4.jpg"
import S5 from "../assets/ImageSlider/S5.jpg"
import S6 from "../assets/ImageSlider/S6.jpg"
import meme from "../assets/meme.png"
import gsap from "gsap"
import { useEffect } from "react"
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ImageSlider = () => {
    useEffect(() => {
        gsap.fromTo(".e", {opacity: 0}, {opacity: 1, duration: 4, ease: "power2.inOut", scrollTrigger: {trigger: '.e',scrub: 1,start: 'bottom bottom'}})
    }, [])
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5;
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      };
  return (
    <div className="bg-[#161617]">
        <div className="flex e mt-0 mb-2  justify-end pr-[10%] ">
            <button onClick={handlePrev} className="bg-[#333334] rounded-full py-2 px-2 text-2xl text-white"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></button>
            <button onClick={handleNext} className="bg-[#333334] rounded-full py-2 px-2 ml-3 text-2xl text-white"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></button>
        </div>
        <div className="relative h-screen overflow-hidden bg-[#161617]">
            <div className="bg-[#161617]  pl-[9%] flex justify-between gap-5 w-[1250px] h-[600px]" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 0.5s ease-in-out" }}>
                <div className="flex-shrink-0">
                    <img className="rounded-3xl" src={S1} alt="S1" />
                </div>
                <div className="flex-shrink-0">
                    <img className="rounded-3xl" src={S2} alt="S2" />
                </div>
                <div className="flex-shrink-0">
                    <img className="rounded-3xl" src={S3} alt="S3" />
                </div>
                <div className="flex-shrink-0">
                    <img className="rounded-3xl" src={S4} alt="S4" />
                </div>
                <div className="flex-shrink-0">
                    <img className="rounded-3xl" src={S5} alt="S5" />
                </div>
                <div className="flex-shrink-0">
                    <img className="rounded-3xl" src={S6} alt="S6" />
                </div>
                <div className="flex-shrink-0">
                    <img className="rounded-3xl" src={meme} alt="meme" />
                </div>
            </div>     
        </div>
        
    </div>

  )
}

export default ImageSlider
