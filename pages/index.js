import Image from 'next/image'
import Link from 'next/link'
// import hero from '../images/hero.jpg';
import comingsoon from '../images/comingsoon.jpg';
import rappers from '../images/rappers.png';
import mike from '../images/mike.png';
// import bigartprize from '../images/bigartprize.jpeg';



export default function Home() {
  return (
    <>
      <div className="bg-gray-200 ">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
              <h3 className="text-xl tracking-wide text-white text-gray-800 lg:text-1xl lg:text-2xl leading-10">
                We are Looking for New Talents
              </h3>
              <h2 className="text-xl tracking-wide text-white text-pink-800 lg:text-3xl lg:text-4xl">
                Big Art - Coming Soon    <Image className='w-32'
                src={mike}   
              alt={mike}  
            />
              </h2>
             

              <p className="mt-4 text-gray-300 text-gray-600">
                <strong>A Singing Talent Show </strong>
                If you sing good song, apply for an upcoming auditions conducted by Big Art Team. This forum will give you an opportunity in the singing area. This audition process is started by Filling an Online Form , Send Your Detail and short Audio Clip. We will select 1000 Newly Talented singers for auditions. More Information will Provided soon.
              </p>

              <p className="mt-4 text-gray-300 text-gray-600"> For Any Enquiry Feel free to drop us a message</p>
              <div className="mt-6">
                <Link href="/">
                  <a
                    className="disabled inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-800"
                  >   Fill Audition Form </a>
                </Link>
                <Link href="/contact">
                  <a
                    className="inline-block px-3 mx-4 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-800"
                  >   Contact Us </a>
                </Link>

              </div>

            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <Image className='w-100'
              src={comingsoon}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      {/* pricing */}
      <div id="app" className="bg-gray-900 p-12">
  <div className="max-w-lg mx-auto">
    <h2 className="text-2xl md:text-5xl font-semibold text-center text-gray-100">
      Final Prizes
    </h2>
    <h3 className="text-xl mt-2 text-center text-gray-500">
    We Will Select Three Top Singers
          </h3>
          <p className="mt-1 text-gray-300 text-center">
       Follow the Process , Fill Audition Form and Send Your Voice to us. We will select best voices for Auditions and will select Top Three Singers Among them. Wish you Good Luck , Go Ahead.
      </p>
  </div>
  <div className="my-8 mt-12 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
    <div className="max-w-xs rounded-md border-2 border-solid border-indigo-600 border-opacity-25 hover:border-opacity-100 px-8 pt-8 pb-4">
      <h3 className="text-2xl font-semibold text-gray-100">1st Prize</h3>
     
      <div className="flex items-center mt-2 mb-4">
        <h4 className="text-2xl font-semibold text-gray-100 mr-4">100,000/ +  Audio + Video </h4>

      </div>
      <Link href="/">
      <button
        type="button"
        className="my-2 w-full font-semibold text-indigo-600 hover:text-gray-100 hover:bg-indigo-700 rounded border border-solid border-indigo-600 border-opacity-25 py-3"
      >
        Audition Form
              </button>
              </Link>
      {/* <button
        type="button"
        className="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700"
      >
        Learn More
      </button> */}
    </div>
    <div className="max-w-xs rounded-md border-2 border-solid border-indigo-600 px-8 pt-8 pb-4">
      <h3 className="text-2xl font-semibold text-gray-100">2nd Prize</h3>
     
      <div className="flex items-center mt-2 mb-4">
        <h4 className="text-3xl font-semibold text-gray-100 mr-4">75,000/ +  Audio  </h4>
        {/* <h4 className="text-xs text-gray-500">
        <br />         
        </h4> */}
      </div>
      <Link href="/">
      <button
        type="button"
        className="my-2 w-full font-semibold text-indigo-600 hover:text-gray-100 hover:bg-indigo-700 rounded border border-solid border-indigo-600 border-opacity-25 py-3"
      >
        Audition Form
              </button>
              </Link>
     
    </div>
    <div className="max-w-xs rounded-md border-2 border-solid border-indigo-600 border-opacity-25 hover:border-opacity-100 px-8 pt-8 pb-4">
      <h3 className="text-2xl font-semibold text-gray-100">3rd Prize</h3>
     
      <div className="flex items-center mt-2 mb-4">
        <h4 className="text-3xl font-semibold text-gray-100 mr-4">50,000/ +  Audio </h4>

            </div>
            <Link href="/">
      <button
        type="button"
        className="my-2 w-full font-semibold text-indigo-600 hover:text-gray-100 hover:bg-indigo-700 rounded border border-solid border-indigo-600 border-opacity-25 py-3"
      >
        Audition Form
              </button>
              </Link>
     
    </div>
  </div>
</div>

      
      {/* about  */}
      <div className='my-10 px-5 lg:px-50 xl:px-60'>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              You will have two advantages by auditioning here.
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              1. You will get a chance to make your mark.
              2. After the result of this audition you will know whether you are worthy of going to big TV reality show or not.
            </p>
           
            {/* <Image

              src={bigartprize}
              alt="Picture of the Prize"
            /> */}
            {/* <h1 className='text-2xl md:text-lg text-gray-900'>First Prize will be - 1 Lac +  Audio + Video of Song </h1>

            <h2 className='text-xl text-gray-900 '> Second Prize - 75,000 + Audio</h2>

            <h3 className='text-2xl text-gray-900'>Third Prize - 50,000 + Audio</h3> */}

          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              This important information for new singers
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              If you are a new artist and are looking for a good stage to audition. And If you want to give a singing auditions. Our platform may prove to be the best for you. We audition all those who are new or old singers. they are interested in singing and want to make a career in the singing platform. The audition process is online , That means you can audition through the online phone sitting in the house.
            </p>
            <Image

              src={rappers}
              alt="Picture of the rappers"
            />
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              How to give online auditions?
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              You can give this singing audition through your phone sitting at home. If you think you are a good singer. And you can move forward in the field of singing. So you can give this audition. The process of auditioning online is very simple.
            </p>
            <Link href="/">
              <a
                className="inline-block px-3 py-2 my-4 font-semibold text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-800"
              >   Fill Audition Form </a>
            </Link>

          </li>


        </ol>

      </div>


    </>
  )
}
