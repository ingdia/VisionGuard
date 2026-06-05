import React from 'react'
import Image from "next/image";
import logo from "../../public/images/logo.jpeg";


function Header() {
  return (
    <div className='flex flex-row items-center justify-between p-4 font-serif border-b-1 border-gray-200 px-10'>
      <div className="w-32 h-10 relative">
         <Image
        src={logo}
        alt="Picture of the author"
        placeholder="blur"
        fill
        className="object-contain"
      />
      </div>
      <nav>
        <ul className='flex flex-row gap-4'>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <button className='bg-slate-700 text-white px-4 py-1 rounded-md'>
        let's talk
      </button>
    </div>
  )
}

export default Header
