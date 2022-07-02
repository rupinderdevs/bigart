import React from 'react'
import Link from 'next/link'

export default function Footer () {
  return (
    <>
      <footer className='p-4 bg-gray-800 text-white shadow text-center md:p-4 dark:bg-gray-800'>
        <span className='text-xl text-gray-100 text-center dark:text-gray-400 tracking-wider'>
          © 2022{' '}
          <Link href="/">
          <a className='hover:underline'>
            BigArt
          </a></Link>
          . All Rights Reserved.
        </span>
       
      </footer>
    </>
  )
}
