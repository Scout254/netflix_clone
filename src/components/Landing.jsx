import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate();
  return (
<div className='h-screen flex flex-col justify-center items-center'>
  <div className='relative inset-0 bg-cover bg-center h-full w-full'
    style={{
      backgroundImage:"url('https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/7ae82418-beea-4868-8594-dddd284dc46c/IN-en-20210315-popsignuptwoweeks-perspective_alpha_website_small.jpg')"
    }}>
    <div className='absolute top-0 left-0 w-full px-2 flex justify-between items-center '>
      <h1 className='text-4xl font-bold text-red-600 px-2'>NETFLIX</h1>
      <button  onClick={()=>navigate("/login")} className='px-6 py-2 mt-2 text-lg font-semibold text-white bg-red-600 rounded-md shadow'>Sign In</button>
    </div>
    <div className='flex flex-col justify-center items-center h-full'>
      <h1 className='text-4xl font-bold text-white text-center'>Unlimited movies, TV shows, and more.</h1>
      <h2 className='text-4xl font-semibold text-white text-center mt-4'>Watch anywhere. Cancel anytime.</h2>
      <p className='text-white mt-8 '>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className='flex mt-4 items-center'>
        <input type='email' placeholder='Email address' className='px-4 h-[60px] w-[450px]' />
        <button className='h-[60px] bg-red-600 w-[120px] text-white'>
          Get Started 
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6 inline-block ml-2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Landing