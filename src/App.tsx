import pngwing from './assets/pngwing.com.png'
import { useState, useEffect } from 'react'
import Discount from './Components/Discount'
import C1 from './Components/C1'
import C2 from './Components/C2'
import C4 from './Components/C4'
import C5video from './Components/C5video'
import C6video from './Components/C6video'
import C7M4 from './Components/C7M4'
import C8 from './Components/C8'
import C9 from './Components/C9'
import C10 from './Components/C10'
import C11 from './Components/C11'
import C12 from './Components/C12'
import C13Image from './Components/C13Image'
import C14 from './Components/C14'
import C15 from './Components/C15'
import C16 from './Components/C16'
import ImageSlider from './Components/ImageSlider'

function App() {

  const [smallScreen, setSmallScreen] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setSmallScreen(!e.matches)
    }
    
    // Initial check
    handleResize(mediaQuery)
    
    // Add listener for changes
    mediaQuery.addEventListener('change', handleResize)
    
    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

    return (
      <div>
        <div className='bg-black'>
          <div className='md:pl-[260px]  md:pr-[270px] flex gap-10 pt-4'>
            <img className=' w-5 h-5' src={pngwing} alt="logo" />
            {smallScreen?"":<div className='  flex justify-between gap-10'>
              <h1 className=' text-[12px] text-gray-400'>Store</h1>
              <h1 className=' text-[12px] text-gray-400'>Mac</h1>
              <h1 className=' text-[12px] text-gray-400'>iPad</h1>
              <h1 className=' text-[12px] text-gray-400'>iPhone</h1>
              <h1 className=' text-[12px] text-gray-400'>Watch</h1>
              <h1 className=' text-[12px] text-gray-400'>AirPods</h1>
              <h1 className=' text-[12px] text-gray-400'>TV & Home</h1>
              <h1 className=' text-[12px] text-gray-400'>Entertainment</h1>
              <h1 className=' text-[12px] text-gray-400'>Accessories</h1>
              <h1 className=' text-[12px] text-gray-400'>Support</h1>
              </div>}
            <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#B7B7B7"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#B7B7B7"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
          </div>
          <Discount />
          <C1 />
        </div>
        <C2 />
        <ImageSlider />
        <C4 />
        <C5video />
        <C6video />
        <C7M4 />
        <C8 />
        <C9 />
        <C10 />
        <C11 />
        <C12 />
        <C13Image />
        <C14 />
        <C15 />
        <C16 />
      </div>
    )
}

export default App
