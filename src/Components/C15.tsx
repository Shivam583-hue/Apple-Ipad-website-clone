import hehe4 from '../assets/hehe4.png'
const C15 = () => {
  return (
    <div className="bg-[#161617] pb-20 flex justify-center pt-[10%]">
        <div className="bg-black rounded-3xl  w-[80%] h-[80%]">
           <div className='pl-[9%]'>
                <h1 className=" bg-gradient-to-r from-[#e5b901] to-[#00e396] bg-clip-text text-transparent pt-[10%] text-[70px] font-sans font-semibold leading-tight">Designed to make</h1>
                <h1 className=" bg-gradient-to-r from-[#e5b901] to-[#00e396] bg-clip-text text-transparent text-[70px] font-sans font-semibold leading-tight">a difference.</h1>
                <h1 className="text-[#767677] pt-10 w-[70%] text-[20px] font-semibold font-sans">What matters to you matters to Apple too. From using more recycled materials that minimise environmental impact. To privacy protections that give you more control over your data. To creating built‑in features that make iPad accessible to all.</h1>
           </div>
           
            <div className='pt-5'>
                <img src={hehe4} alt="" />
            </div>
            <div className='flex justify-center pb-16 pt-10'>
                <div className='flex items-center bg-[#2e2e30] rounded-full'>
                    <button className='font-semibold text-lg pl-10 pr-2 py-3 text-white'>What ipad stands for</button>
                    <button className='bg-[#0170e3] rounded-full p-2 mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
        
    </div>    
  )
}

export default C15
