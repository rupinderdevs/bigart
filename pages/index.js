import Image from 'next/image'
import Link from 'next/link'
import hero from '../images/hero.jpg';
import rappers from '../images/rappers.png';
import bg from '../images/bg.jpg';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'


export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log(
          'Order placed! You will receive an email confirmation.'
        );
      }

      if (canceled) {
        console.log(
          'Order canceled -- continue to shop around and checkout when you’re ready.'
        );
      }
    }
  }, [success, canceled]);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log({ name, email, purpose, message })

    const paymentRes = await fetch('/api/checkout_sessions', {
      method: 'POST',

    });
    console.log("response payment", paymentRes)

    // const res = await fetch('http://localhost:3000/api/submit-form', {
    //   method: 'POST',
    //   body: JSON.stringify({ name, email, purpose, message }),
    // });
    // Success if status code is 201
    // if (res.status === 201) {
    //   toast('Thank you for contacting us!', { type: 'success' });
    // } else {
    //   toast('Please re-check your inputs.', { type: 'error' });
    // }
  };
  return (
    <>
      <div className="bg-gray-200 ">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="tracking-widest text-xl tracking-wide text-white text-indigo-800 font-bold lg:text-3xl lg:text-4xl mb-2">
                Hello Talent
              </h2>
              <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-1xl lg:text-2xl">
                Big Art has brought you a Golden Opportunity
              </h1>
              <p className="mt-4 text-gray-500">
                We Have Come Up With A New Concept In 2022 - 23 this Year. The Total Price List Is 2.25 Lakhs. This Session Will Be Completed In Three Months.
              </p>
              <p className="mt-4 text-gray-600">
                If you sing good song, apply for an upcoming auditions conducted by Big Art Team. We will give you an opportunity in the singing area. This audition process is started by Filling an Online Form , Send Your Detail and short Video Clip. We will select Top Newly Talented singers for auditions.For More Information Contact Our Team.
              </p>
              <p className="mt-4 text-gray-600"> For Any Enquiry Feel free to drop us a message</p>
              <div className="mt-6">
                <Link href="/audition">
                  <a
                    className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800"
                  >   Fill Audition Form </a>
                </Link>
                <Link href="/contact">
                  <a
                    className="inline-block px-3 mx-4 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800"
                  >   Contact Us </a>
                </Link>

              </div>

            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <Image

              src={hero}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      {/* hero end */}
      {/* pricing */}
      <div id="app" className="bg-gray-900 p-12">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-5xl font-semibold text-center text-gray-100 border-b-4 border-indigo-500 leading-10 py-4">
            Final Prizes
          </h2>
          {/* <h3 className="text-xl mt-2 text-center text-gray-500">
    We Will Select Three Top Singers
          </h3> */}
          <ul className="list-disc mt-1 text-gray-300 text-justify font-xl">
            <li> The First And Second Round Will Be Conducted Online Only.</li>
            <li>The Final Round Will Take Place In Front Of The Judges.</li>
            <li>The First Three Winners In The Final Round Will Be Awarded According To The Winning List.</li>
          </ul>

          {/* Follow the Process , Fill Audition Form and Send Your Voice to us. We will select best voices for Auditions and will select Top Three Singers Among them. Wish you Good Luck , Go Ahead. */}

        </div>
        <div className="my-8 mt-12 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="animate-pulse hover:animate-none max-w-xs rounded-md border-2 border-solid border-indigo-600 border-opacity-25 hover:border-opacity-100 px-8 pt-8 pb-4">
            <h3 className="text-2xl font-semibold text-gray-100">1st Prize</h3>

            <div className="flex items-center mt-2 mb-4">
              <h4 className="text-2xl font-semibold text-gray-100 mr-4">100,000/ +  Audio + Video </h4>

            </div>
           
            {/* <button
        type="button"
        className="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700"
      >
        Learn More
      </button> */}
          </div>
          <div className="animate-pulse hover:animate-none max-w-xs rounded-md border-2 border-solid border-indigo-600 px-9 pt-8 pb-4">
            <h3 className="text-2xl font-semibold text-gray-100">2nd Prize</h3>

            <div className="flex items-center mt-2 mb-4">
              <h4 className="text-3xl font-semibold text-gray-100 mr-4">75,000/ +  Audio  </h4>
              {/* <h4 className="text-xs text-gray-500">
        <br />         
        </h4> */}
            </div>
            

          </div>
          <div className="animate-pulse hover:animate-none max-w-xs rounded-md border-2 border-solid border-indigo-600 border-opacity-25 hover:border-opacity-100 px-7 pt-8 pb-4">
            <h3 className="text-2xl font-semibold text-gray-100">3rd Prize</h3>

            <div className="flex items-center mt-2 mb-4">
              <h4 className="text-3xl font-semibold text-gray-100 mr-4">50,000/ +  Audio </h4>

            </div>
           

          </div>
          
        </div>
        <Link href="/audition">
              <button
                type="button"
                className="my-2 center-center table m-auto font-semibold text-gray-100 hover:text-gray-100 bg-indigo-500 hover:bg-indigo-900 rounded border border-solid border-indigo-600 border-opacity-25 py-3 px-8"
              >
            Fill Audition Form
              </button>
            </Link>
      </div>

      
      {/*  bg*/}
      <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
  <div
    className="inset-0 h-screen bg-cover bg-center bg-[url('../images/bg.jpg')]"
  ></div>
  <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75" />
  <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
    <div
      className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center bg-[url('../images/bg.jpg')]"
    >
      <div className="grid grid-cols-12 gap-1">
        <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
          <div className="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
            <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
              Big Art Findind Talent
            </p>
          </div>
          {/* <div className="text-gray-400 font-semibold text-xl mb-4"></div> */}
          <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5" />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
          <div className="relative bg-indigo-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
            <div className="p-8">
              <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                      Big art has brought you a golden opportunity. We have come up with a new concept in 2022 - 23 this year.</p>
                      <p className="text-white text-xs md:text-sm lg:text-xl mb-4">You Can Give This Singing Audition Through Your Phone Sitting At Home. If You Think You Are A Good Singer. And You Can Move Forward In The Field Of Singing. So You Can Give This Audition. The Process Of Auditioning Online Is Very Simple.
              </p>
              <div className="bottom-0 absolute p-2 right-0">
                      <Link href="/audition">
                        <button className="opacity-75 bg-gray-100 hover:bg-indigo-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Fill Audition Form</span>
                      </button>
                        </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* bg end */}

      {/* about  */}
     


    </>
  )
}
