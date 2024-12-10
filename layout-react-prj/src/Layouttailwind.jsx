import React ,{useEffect, useState} from 'react';
import Mirodposht from '../public/images/Mirodposht.jpg';
// ==============================================

function Layouttailwind() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const AfterText="Lorem lksadjf lkasdlkf sadlfkj asdklas"
  // ==========================================
  return (
    // we can use background image by tailwindConfig.config.js in the "theme" section
    // or we can use this format => bg-[url("../public/images/Mirodposht-dark.jpg")]
    <div className='bg-no-repeat m-0 p-0 bg-cover bg-center bg-mirodposht h-screen dark:bg-black dark:bg-mirodposhtDark'>
      <div className='flex justify-end mx-10 my-5'>
        <button onClick={changeMode}>
          {theme === "dark" ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" stroke="#00FF00 " stroke-linecap="round" stroke-linejoin="round" width="40" height="40" stroke-width="1" strok> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke=" #000080" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" stroke-width="1"> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>
          }

        </button>
      </div>
      <div className='flex flex-col justify-center items-center '>
        <h1 className='text-3xl text-blue-500 dark:text-green-200 m-10'>Hi there !</h1>
        <button className='border-4 rounded-sm border-red-400 p-5 dark:text-red-100'>About Me</button>
      </div>
      {/* ===================================== */}
      {/* we use component from index.css instead of long style for each components ... */}

      <div className='flex justify-center items-center mt-20'>
        <button className='btn'>Button Me 1</button>
        <button className='btn'>Button Me 2</button>
        <button className='btn'>Button Me 3</button>
      </div>

      {/* =========================================== */}
      {/* use flex row and flex col in some situation  */}
      {/* refer to sm,md,lg,xl,2xl responsive tailwindConfig */}
      {/* if we use "sm", min-width is 640px and so on ... */}
      {/* in this example, defual is flex-col */}
      <div className='flex flex-col sm:flex-row  md:flex-col lg:flex-row mt-20'>
        <div className='bg-blue-300/65 text-red-700 opacity-95 backdrop-blur-[2px] sm:w-[25%] md:w-full lg:w-[10%] h-[100px] flex justify-center items-center text-[22px] hover:text-[0px] hover:after:content-["After_Hover_Div1"] hover:after:text-[16px] hover:after:text-green-800'>Div1</div>
        <div className='bg-blue-500/65 text-red-300 opacity-95 backdrop-blur-[2px] sm:w-[25%] md:w-full lg:w-[20%] h-[100px] flex justify-center items-center text-[22px] hover:text-[0px] hover:after:content-["After_Hover_Div2"] hover:after:text-[30px] hover:after:text-green-500'>Div2</div>
        <div className='bg-blue-700/65 text-red-200 opacity-95 backdrop-blur-[2px] sm:w-[25%] md:w-full lg:w-[30%] h-[100px] flex justify-center items-center text-[22px] hover:text-[0px] hover:after:content-["After_Hover_Div3"] hover:after:text-[30px] hover:after:text-green-300'>Div3</div>
        <div className='bg-blue-900/65 text-red-100 opacity-95 backdrop-blur-[2px] sm:w-[25%] md:w-full lg:w-[40%] h-[100px] flex justify-center items-center text-[22px] hover:text-[0px] hover:after:content-["After_Hover_Div4"] hover:after:text-[30px] hover:after:text-green-200'>Div4</div>
      </div>
    </div>
  )
}

export default Layouttailwind