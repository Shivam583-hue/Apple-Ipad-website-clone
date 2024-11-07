const C6video = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[650px] mx-auto flex font-sf-pro justify-center pt-[20%]">
        <h1 className="text-white text-[70px] font-sans font-semibold leading-tight">The world's most advanced display.</h1>
      </div>
      <div className="flex justify-center pt-[5%]">
      <video 
        className="w-[70%] h-auto rounded-lg shadow-lg"
        src="/video2.mp4"
        autoPlay
        muted 
        playsInline 
      ><source src="/video.webm" type="video/webm" />
      </video>
      </div>
      <div className="flex justify-center pt-2  ">
        <h1 className="text-[#767677] text-[18px] hover:underline hover:cursor-pointer font-sans font-semibold">
            Stream Constellation on Apple TV+
            <span className="inline-block pt-2 hover:underline hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg></span>
        </h1>
      </div>
      <div className="pt-16 max-w-[663px] mx-auto flex justify-center ">
        <h1 className="text-[#767677]  text-center text-[20px] font-sans font-semibold leading-relaxed">The new Ultra Retina XDR display introduces groundbreaking tandem OLED technology. Extreme brightness, incredibly precise contrast and advanced technologies like ProMotion and True Tone give you a <span className="text-white">jaw-dropping visual experience</span>. And you can use Reference Mode for colour-accurate workflows.</h1>
      </div>
      <div className="flex flex-col max-w-[800px] mx-auto justify-center pt-32">
        <div className="flex items-center mb-10">
          <div className="flex flex-col">
            <h1 className="bg-gradient-to-bl text-3xl font-semibold from-orange-500 to-orange-600 text-transparent bg-clip-text">1,000 nits</h1>
            <h1 className="text-gray-400">full-screen brightness</h1>
          </div>
          <div className="sm:pl-32 flex flex-col">
            <h1 className="bg-gradient-to-r text-3xl font-semibold from-orange-500 to-blue-500 text-transparent bg-clip-text">1,600 nits</h1>
            <h1 className="text-gray-400">peak HDR brightness</h1>
          </div>
          <div className="sm:pl-32 flex flex-col">
            <h1 className="bg-gradient-to-t text-3xl font-semibold from-blue-600 to-blue-900 text-transparent bg-clip-text">20,000,000:1</h1>
            <h1 className="text-gray-400">contrast ratio</h1>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <h1 className="bg-gradient-to-bl text-3xl font-semibold from-yellow-500 to-orange-300 text-transparent bg-clip-text">True Tone</h1>
            <h1 className="text-gray-400">for comfortable viewing</h1>
          </div>
          <div className="sm:pl-[115px] flex flex-col">
            <h1 className="bg-gradient-to-r text-3xl font-semibold from-orange-300 to-blue-400 text-transparent bg-clip-text">ProMotion</h1>
            <h1 className="text-gray-400">adaptive 10-120Hz refresh rate</h1>
          </div>
          <div className="sm:pl-16 flex flex-col">
            <h1 className="bg-gradient-to-t text-3xl font-semibold from-blue-300 to-blue-400 text-transparent bg-clip-text">P3</h1>
            <h1 className="text-gray-400">wide colour</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default C6video
