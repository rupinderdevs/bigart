import React from 'react'

export default function Failed() {
  return (
   
    <>
    <div className="w-full md:w-1/3 mx-auto">
  <div className="flex p-5 rounded-lg shadow bg-white">
    <div>
      <svg
        className="w-6 h-6 fill-current text-red-800"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
      </svg>
    </div>
    <div className="ml-3">
                      <h2 className="font-semibold text-gray-800">Oh Sorry Payment Failed </h2>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed"> Please Try Again 
      
      </p>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
      <a href="tel:9779967745"> Contact Us</a> For More Information
      </p>
    </div>
  </div>
</div>

    </>
  )
}
