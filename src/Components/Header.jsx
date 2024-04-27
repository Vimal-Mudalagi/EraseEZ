import React from 'react'

export default function Header() {
  return (
    <nav className='bg-[#2C3E50] w-full '>
      <div className="mycontainer flex justify-between items-center  px-4 py-5 h-20">

        <div className='logo font-bold text-white text-2xl px-15'>
          <span className='text-[#FFA07A]'>&lt;</span>
          Erase
          <span className='text-[#FFA07A]'>EZ/&gt;</span>

        </div>

        {/* <ul>
          <li className='flex gap-4 text-white'>
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='/'>About</a>
            <a className='hover:font-bold' href='/'>Contact</a>
          </li>
        </ul> */}

        <button className='text-white bg-[#FFA07A] my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'>
          <img className='invert  w-10 p-1' src="/Github.svg" alt="Github Logo" />
          <span className='font-bold px-2 text-black'>GitHub</span>
        </button>

      </div>
    </nav>
  )
}