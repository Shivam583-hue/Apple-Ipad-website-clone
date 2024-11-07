const C9 = () => {
  return (
    <div className="bg-black">
        <div className="pt-96 ml-[23%]">
            <h1 className="text-white text-[70px] font-sans font-semibold leading-tight">iPadOs and apps.</h1>      
            <h2 className="text-white text-[70px] font-sans font-semibold leading-tight">Workflow and workhorses.</h2>
        </div>
        <div className="flex justify-center">
                <video 
                className="w-screen h-auto rounded-lg shadow-lg"
                src="/video4.mp4"
                autoPlay
                muted 
                playsInline 
            ><source src="/video.webm" type="video/webm" />
            </video>
        </div>
        <div className="flex">
            <div className="ml-[23%] w-[330px]">
                <h1 className="text-[#767677] text-[20px] font-sans font-semibold">iPadOS is designed to let you power through advanced workflows and <span className="text-white">do all the things you love</span> with ease and simplicity. Run pro apps, play high-performance games and take on creative projects of any size with an intuitive touch-first experience.</h1>
            </div>
            <div className="ml-[13%] w-[330px]">
                <h1 className="text-[#767677] text-[20px] font-sans "><span className="text-white">Shown above:</span> Stage Manager, Final Cut Pro for iPad, Procreate Dreams, Octane X, Logic Pro for iPad, Procreate, Freeform, Morpholio Trace, Photos, Shapr3D.</h1>
            </div>
        </div>
    </div>
  )
}

export default C9
