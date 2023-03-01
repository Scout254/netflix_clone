import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center bg-white py-4 px-8 sticky top-0 z-50 text-black'>
  <div>
    <Link to="/">
    <img src="https://th.bing.com/th/id/R.ce065fd34515a8fb4ce0b12dc358b842?rik=xxH9Z5irNTf0qw&pid=ImgRaw&r=0" alt=""
    className='h-[30px] w-[120px]' 
    />
    </Link>
   
  </div>
  <div>
    <ul className='flex gap-[20px] text-gray-400 text-sm z-50'>
      <li><Link to="/" className='hover:text-black'>Home</Link></li>
      <li><Link to="/movies" className='hover:text-black'>Movies</Link></li>
      <li><Link to="/tv" className='hover:text-black'>Tv Shows</Link></li>
      <li><Link to="/news" className='hover:text-black'>News and Popular</Link></li>
      <li><Link to="/mylist" className='hover:text-black'>My List</Link></li>
    </ul>
  </div>
  <div className='flex items-center gap-x-4'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>

    <input type="text"
    placeholder='Search...'
    className='bg-transparent text-gray-400 text-sm focus:outline-none'
    />
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>

   
    <img src="https://th.bing.com/th/id/OIP.JIPMtrXt6ynG_NAOmtGmswHaHX?w=131&h=149&c=7&r=0&o=5&pid=1.7" alt=""
    className='h-[40px] w-[50px] cursor-pointer'
    onClick={()=> navigate("/profile")}
    />
  </div>
</div>

  )
}

export default Navbar