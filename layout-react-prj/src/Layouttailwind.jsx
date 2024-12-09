import React ,{useEffect, useState} from 'react';
import Mirodposht from '../public/images/Mirodposht.jpg';
// ==============================================

function Layouttailwind() {
  const[theme, setTheme] = useState('light');

  useEffect(()=> {
    if(theme==='dark') {
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  } , [theme]);

  const changeMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  // ==========================================
  return (
    <div className='min-h-screen bg-cover bg-center bg-[url("../public/images/Mirodposht.jpg")] h-screen dark:bg-black dark:bg-[url("../public/images/Mirodposht-dark.jpg")]'>
    <div className='flex justify-end mx-10 my-5'>
      <button onClick={changeMode}>
        {theme==="dark" ? 
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
    </div>
  )
}

export default Layouttailwind