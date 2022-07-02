import React from 'react'
import ContactSvg from '../images/ContactSvg'

export default function Contact() {
  return (
   
    <>
    <>
  {/* a lot of the lines are just svg text, actual html is simple 
A sample contact us page form written with tailwind css
Illustration from undraw.co by the amazing Katerina Limpitsouni
*/}
  <div className="bg-gray-800 text-gray-100 px-8 py-12">
    <div className="text-center w-full">
     
    </div>
    <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Lets talk about everything!
          </h2>
          <div className="text-gray-700 mt-8">
            Hate forms? Send us an <a className='font-bold text-blue-700' href='mailto:infobigart2@gmail.com'> E-Mail </a>{" "}
            instead.
                </div>
                <div className="text-gray-700 mt-8 font-bold">
            Mail Us: <a className='font-bold text-blue-700' href='mailto:infobigart2@gmail.com'> infobigart2@gmail.com </a>{" "}
          </div>
                <div className="text-gray-700 mt-8 font-bold">
            Call Us: <a className='font-bold text-blue-700' href='tel:9779967745'> +91 97799-67745 </a>{" "}        
                </div>
                
        </div>
        <div className="mt-8 text-center">
         {/* <ContactSvg/> */}
        </div>
            </div>
            <ContactSvg/>
      {/* <form method="post" action="mailto:infobigart2@gmail.com?email=email&message=text">
        <div>
          <span className="uppercase text-sm text-gray-600 font-bold">
            Full Name
          </span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Email
          </span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Message
          </span>
          <textarea
            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  defaultValue={""}
                  type="text"
          />
        </div>
        <div className="mt-8">
          <button type='submit' className="my-2 w-full font-semibold text-indigo-600 hover:text-gray-100 bg-indigo-300 hover:bg-indigo-700 rounded border border-solid border-indigo-600 border-opacity-25 py-3">
            Send Message
          </button>
        </div>
      </form> */}
    </div>
  </div>
</>

    </>
  )
}
