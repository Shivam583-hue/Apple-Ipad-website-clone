//need to add the tag of thickness scrollTrigger: {trigger: '.c5',scrub: 1,start: 'bottom bottom'}
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { useEffect } from "react"

const C5video = () => {
  useEffect(() => {
    gsap.fromTo(".c5", {opacity: 0 ,y:0}, {opacity: 1,y:-1400, duration: 8, ease: "power2.inOut", })
  }, [])
  return (
    <div className="bg-black"> 
      <div className="bg-black flex justify-center mx-auto pt-[50px]">
        <video 
          className="w-[50%] h-auto  rounded-lg shadow-lg"
          src="/video.webm"
          autoPlay
          muted 
          playsInline 
        >
          <source src="/video.webm" type="video/webm" />
        </video>
      </div>
      <div className="flex c5 flex-col pl-[55%] ">
          <h1 className="text-white text-[70px] font-sans font-semibold leading-tight">5.1 mm</h1>
          <h1 className="text-[#767677] text-[20px] font-sans font-semibold">thin and light design</h1>
      </div>
    </div>
  )
}

export default C5video
