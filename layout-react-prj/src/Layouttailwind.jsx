import React from 'react'

function Layouttailwind() {
  function changeMode(){
    
    const element = document.querySelector('html').className;
    document.querySelector('html').className = element === 'dark' ?'' : 'dark'
  }
  return (
    <>
    <div className='flex justify-end mx-10 my-5'>
      <button onClick={changeMode()}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke=" #e0990b" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" stroke-width="2"> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg> 
      </button>
    </div>
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-3xl text-blue-500 m-10'>Hi there !</h1>
      <button className='border-4 rounded-sm border-red-400 p-5'>About Me</button>
    </div>
    </>
  )
}

export default Layouttailwind