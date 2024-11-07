import Carousel from "./Carousel"
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { useEffect } from "react"

const C2 = () => {
    useEffect(() => {
        gsap.fromTo(".c", {opacity: 0,y:50}, {opacity: 1, y:0, duration: 1, ease: "power2.inOut", scrollTrigger: {trigger: '.c',scrub: 1,start: 'bottom bottom'}})
        gsap.fromTo(".d", {opacity: 0,y:50}, {opacity: 1, y:0, duration: 1, ease: "power2.inOut", scrollTrigger: {trigger: '.d',scrub: 1,start: 'bottom bottom'}})
    }, [])
  return (
    <div className="bg-[#161617]">
        <div className="c pl-[9%] pt-[13%] flex ">
            <h1 className="text-[#767677] text-[50px] font-[650]">Get the highlights.</h1>
            <div className=" pl-[33%] flex pt-8 gap-2">
                <h1 className="text-[#257ed3]  font-semibold text-[20px]">Watch the film</h1>
                <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#257ed3"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </div>
            </div>
            <div className="pt-8 flex">
                <h1 className="pl-6 text-[#257ed3] font-semibold text-[20px]">{`Watch the event `}</h1>
                <div className="mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="13px" fill="#257ed3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                </div>
            </div>
        </div>
        <Carousel/>
        <div className="pt-[50vh] pl-[9%] flex ">
        <h1 className="text-[#767677] d text-[60px] font-semibold pb-10 font-sans">Take a closer look.</h1>
        </div>
    </div>
    
  )
}

export default C2
