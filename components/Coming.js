import React from 'react'
import Link from 'next/link'

export default function Coming () {
  return (
    <>
    <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center" style="background-image:url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);">
  <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
  
  <div className="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
    <span className="text-bold"> <span className="text-gray-100 ml-3 mr-4 text-3xl font-bold tracking-wider">BIG ART</span>
              <Image className='w-32'
                src={mike}   
              alt={mike}  
            /></span>
    <h1 className="text-5xl">We are <b>Almost</b> there!</h1>
  <p>Stay tuned for something amazing!!!</p>
  
  
    
    </div>
  
</div>
    </>
  )
}
