import React from 'react'

function Hero() {
  return (
    <div className='relative w-full h-[500px]'>

      <div className="relative bg-[url('/images/Hero.jpg')] bg-cover bg-center h-screen">

        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">
            Vision Guards
          </h1>
        </div>

      </div>

    </div>
  )
}

export default Hero