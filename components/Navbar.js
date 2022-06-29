import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mike from '../images/mike.png';

export default function Navbar() {


  return (
    <>
<header className="text-gray-700 body-font border-b border-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a
      className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      target="_blank"
    >
     
              <span className="ml-3 text-3xl">BIG ART</span>
              <Image className='w-32'
                src={mike}   
              alt={mike}  
            />
          </a>
          </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <ul className='flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
      <li>
        <Link href="/">
        <a className='text-dark-900 bg-gray-300 hover:bg-gray-700 hover:text-gray-100  px-3 py-2 rounded-md text-sm font-medium'
            aria-current='page'
          >
            Home
          </a>
        </Link>

      </li>
      <li>
        <Link href="/">
          <a className='text-dark-900 bg-gray-300 hover:bg-gray-700 hover:text-gray-100  px-3 py-2 rounded-md text-sm font-medium'
          > Audition Form
          </a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
        <a className='text-dark-900 bg-gray-300 hover:bg-gray-700 hover:text-gray-100  px-3 py-2 rounded-md text-sm font-medium'
          > Contact
          </a>
        </Link>
      </li>

     
    </ul>
    </nav>
   
  </div>
</header>


    </>

  )
}
