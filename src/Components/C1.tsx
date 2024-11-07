import { useEffect } from "react"
import ipad1copy from "../assets/ipad1.jpg"
import gsap from "gsap"



const C1 = () => {
  useEffect(() => {
    gsap.fromTo(".b", {opacity: 0}, {opacity: 1, duration: 5, ease: "power4.in"})
    gsap.fromTo(".a", {opacity: 0,y:0}, {opacity: 1, y:-250, duration: 3, ease: "power2.inOut"})
  }, [])
  return (
    <div className='flex flex-col justify-center bg-black items-center pt-28'>
        <h1 className='text-2xl font-semibold text-white leading-none'>iPad Pro</h1>
        <div className='flex'>
            <h1 className=' text-[4rem] bg-gradient-to-br leading-none from-orange-600 to-white  bg-clip-text text-transparent font-[600]'>Thinpo</h1>
            <h1 className='text-[4rem] bg-gradient-to-tr leading-none from-white  via-blue-300 to-[#0e0af2]  bg-clip-text text-transparent font-[600]'>ssible.</h1>
        </div>
        <img src={ipad1copy} className="b"/>
        <h1 className='a text-white text-2xl text-shadow-white-intense font-semibold'>Built for Apple Intelligence.</h1>
        <button className='a bg-[#0070f3]  mt-10 text-white px-5 text-lg py-2 rounded-full'>Buy</button>
        <h1 className="a text-gray-400 text-lg pt-2">From  ₹99900.00*</h1>
        <h1 className="a text-gray-400 text-md pt-1 pb-32">Apple Intelligence available now in US English**</h1>
        
    </div>
  )
}

export default C1
