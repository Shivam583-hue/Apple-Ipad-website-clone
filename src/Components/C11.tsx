const C11 = () => {
  return (
    <div className="bg-black">
      <div className="pt-96 pl-[23%]">
        <h1 className="text-white text-[70px] font-sans font-semibold leading-tight">Magic Keyboard.</h1>
        <h1 className="text-white text-[70px] font-sans font-semibold leading-tight">Innovation is key.</h1>
      </div>
      <div className="pt-16 pl-[23%] w-[67%]">
        <h1 className="text-[#767677] text-[20px] font-sans font-semibold">Magic Keyboard delivers an amazing typing and trackpad experience in a <span className="text-white">sleek, portable new design</span> with an aluminium palm rest.1 The keyboard includes a function row and a larger glass trackpad with haptic feedback for precise work and Multi‑Touch gestures.</h1>
        <h1 className="text-[#2997ff] pt-5 hover:underline hover:cursor-pointer text-xl font-semibold">
            Learn more about keyboards for iPad<span className="inline-block font-bold"><svg xmlns="http://www.w3.org/2000/svg" height="13px"  viewBox="0 -960 960 960" width="24px" fill="#2997ff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></span>
        </h1>
      </div>
      <div className="flex justify-center pt-16">
        <video 
        className="w-[75%] h-auto rounded-lg shadow-lg"
        src="/video6.mp4"
        autoPlay
        muted 
        playsInline 
        ><source src="/video.webm" type="video/webm" />
        </video>
      </div>
    </div>
  )
}

export default C11
