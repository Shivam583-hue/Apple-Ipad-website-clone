import hehe5 from "../assets/hehe5.png"
import hehe6 from "../assets/hehe6.png"
import hehe7 from "../assets/hehe7.png"
import hehe8 from "../assets/hehe8.png"

const C16 = () => {
  return (
    <div className='bg-[#161617] pb-20'>
        <div className="flex pt-16 justify-center w-[80%] mx-auto">
            <h1 className="text-[#767677] text-[55px] font-semibold pb-10 font-sans">Keep exploring iPad.</h1>
            <h1 className="text-[#2997ff] pt-10 pl-[500px] hover:underline hover:cursor-pointer text-xl ">
               Explore all iPad<span className="inline-block font-bold"><svg xmlns="http://www.w3.org/2000/svg" height="13px"  viewBox="0 -960 960 960" width="24px" fill="#2997ff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></span>
            </h1>
        </div>
        <div className="flex justify-center">
            <div className="bg-black rounded-3xl pb-10 w-[80%] h-[80%]">
                <div className='pt-5'>
                    <img src={hehe5} alt="" />
                    <img src={hehe6} alt="" />
                    <img src={hehe7} alt="" />
                    <img src={hehe8} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default C16
