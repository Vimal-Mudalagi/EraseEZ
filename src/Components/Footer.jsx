import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#2C3E50] bottom-0 fixed left-0 text-white flex flex-col justify-center items-center  w-full'>
    <div className="logo font-bold text-white text-2xl">
            <span className='text-[#FFA07A]'> &lt;</span>

        <span>Erase</span><span className='text-[#FFA07A]'>EZ/&gt;</span>


    </div>
    <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="/heart.png" alt="" /> by Vimal Mudalagi </div>
</div>
  )
}

export default Footer
