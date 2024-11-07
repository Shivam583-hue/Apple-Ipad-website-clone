
const C10 = () => {
    return (
        <div className="bg-black">
            <div className="flex pt-96 flex-col justify-center items-center">
                <h1 className="text-white text-[70px] font-sans font-semibold leading-tight">Apple Pencil Pro.</h1>
                <h1 className="text-white text-[70px] font-sans font-semibold leading-tight">Engineered for</h1>
                <h1 className="text-white text-[70px] font-sans font-semibold leading-tight">limitless creativity.</h1>
            </div>
            <div className="flex pt-32 justify-center">
                <video 
                className="w-[50%] h-auto rounded-lg shadow-lg"
                src="/video5.mp4"
                autoPlay
                muted 
                playsInline 
                ><source src="/video.webm" type="video/webm" />
                </video>
            </div>
            <div className="flex pt-16 flex-col justify-center w-[40%] mx-auto">
                <h1 className="text-[#767677] text-center text-[20px] font-sans font-semibold">
                    Apple Pencil sets the standard for how drawing, painting, handwriting and note-taking should feel — intuitive, precise and magical. All with pixel‑perfect precision, low latency, tilt sensitivity and support for palm rejection. And <span className="text-white">Apple Pencil Pro</span> adds even more capabilities to bring your ideas to life like never before.1
                </h1>
                <h1 className="text-[#2997ff] pt-5 pl-32 hover:underline hover:cursor-pointer text-xl font-semibold">
                    Explore more Apple Pencil features<span className="inline-block font-bold"><svg xmlns="http://www.w3.org/2000/svg" height="13px"  viewBox="0 -960 960 960" width="24px" fill="#2997ff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></span>
                </h1>
            </div>
        </div>
    )
}

export default C10
