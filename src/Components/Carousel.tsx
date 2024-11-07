import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import Carousel1 from '../assets/Carousel1.png';
import Carousel2 from '../assets/Carousel2.png';
import Carousel3 from '../assets/Carousel3.png';
import Carousel4 from '../assets/Carousel4.png';
import Carousel5 from '../assets/Carousel5.png';
import Carousel6 from '../assets/Carousel6.png';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6;

  useEffect(() => {
    //@ts-ignore
    const cards = carouselRef.current.children;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: carouselRef.current,
        start: "top center", 
        end: "bottom center",
        scrub: 1,
        toggleActions: "play pause resume reset"
      },
      defaults: { duration: 2, ease: 'power2.inOut' }
    });

    for (let i = 0; i < cards.length; i++) {
      tl.to(cards, {
        xPercent: -100 * (i + 1),
        stagger: 0,
        duration: 4
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div className="relative rounded-3xl ml-[9%] mt-10 w-[1250px] h-[600px] overflow-hidden">
      <div className="flex" ref={carouselRef} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div className="flex-shrink-0 w-[1250px] h-[610px] flex text-3xl bg-black text-white">
          <div className="flex flex-col">
            <h1 className="w-[65%] font-semibold pl-[4%] pt-[3%]">
              All-new pro design. Incredibly portable. The thinnest Apple product ever.
            </h1>
            <div className="w-[90%] pt-[9%]">
              <img src={Carousel1} alt="Carousel1" />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[1250px] h-[610px] flex text-3xl bg-black text-white">
          <div className="flex flex-col">
            <h1 className="w-[65%] font-semibold pl-[4%] pt-[3%]">
              Ultra Retina XDR. The world's most advanced display. Extreme brightness and precise contrast.
            </h1>
            <div className="w-[90%] pt-[9%]">
              <img src={Carousel2} alt="Carousel2" />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[1250px] h-[610px] flex items-center justify-center text-3xl bg-black text-white">
          <img src={Carousel3} alt="Carousel3" />
        </div>
        <div className="flex-shrink-0 w-[1250px] h-[610px] text-3xl bg-black text-white">
          <div className="flex flex-col">
            <h1 className="w-[25%] font-semibold pl-[4%] pt-[3%]">
              Crush pro workflows with the ease of iPadOS and amazing apps.
            </h1>
            <div className="w-full flex justify-end pb-[9%]">
              <img src={Carousel4} alt="Carousel4" />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[1250px] h-[610px] flex items-center justify-center text-3xl bg-black text-white">
          <img src={Carousel5} alt="Carousel5" />
        </div>
        <div className="flex-shrink-0 w-[1250px] h-[610px] text-3xl bg-black text-white">
          <div className="flex flex-col">
            <div className="w-[80%] flex justify-center pr-[4%]">
              <img src={Carousel6} alt="Carousel6" />
            </div>
            <h1 className="w-[60%] py-2 font-semibold pl-[4%]">
              Redesigned, thinner Magic Keyboard. Comfortable typing and haptic trackpad experience.
            </h1>
          </div>
        </div>
      </div>

      {/*<button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        ›
      </button>*/}
    </div>
  );
};

export default Carousel;
