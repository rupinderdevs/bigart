import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Succes () {
  const router = useRouter()
  const { success, canceled } = router.query
  const [paymentSuccess, setpaymentSuccess] = useState(undefined)

  useEffect(() => {
    if (
      success !== undefined ||
      canceled !== undefined ||
      paymentSuccess !== undefined
    ) {
      if (success) {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('payment', 'Done')
        }
        const submitForm = async () => {
          try {
            const res = await fetch('/api/submit-form', {
              method: 'POST',
              body: JSON.stringify({
                name: window.localStorage.getItem('name'),
                email: window.localStorage.getItem('email'),
                phoneNumber: window.localStorage.getItem('phoneNumber'),
                address: window.localStorage.getItem('address'),
                gender: window.localStorage.getItem('gender'),
                age: window.localStorage.getItem('age'),
                videoUrl: window.localStorage.getItem('videoUrl'),
                payment: window.localStorage.getItem('payment')
              })
            })
            // Success if status code is 201
            if (res.status === 201) {
              setpaymentSuccess('success')
            } else {
              setpaymentSuccess('fail')
            }
          } catch (error) {
            console.log('error')
          }
        }
        submitForm()
      }

      if (canceled) {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('payment', 'Fail')
        }
        setpaymentSuccess('fail')
      }
    }
  }, [success, canceled, paymentSuccess, setpaymentSuccess])

  if (paymentSuccess == undefined) {
    return (
      <svg
        role='status'
        className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
        viewBox='0 0 100 101'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
          fill='currentColor'
        />
        <path
          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
          fill='currentFill'
        />
      </svg>
    )
  }
  if (paymentSuccess == 'success') {
    return (
      <>
        <div className='w-full md:w-1/3 mx-auto'>
          <div className='flex p-5 rounded-lg shadow bg-white'>
            <div>
              <svg
                className='w-6 h-6 fill-current text-green-500'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z' />
              </svg>
            </div>
            <div className='ml-3'>
              <h2 className='font-semibold text-gray-800'>
              Congratulations Payment Done Successfully{' '}
              </h2>
              <h2 className='font-semibold text-gray-800'>
              Stay Tuned{' '}
              </h2>
              <p className='mt-2 text-sm text-gray-600 leading-relaxed'>
                <a href='tel:9779967745'> Contact Us</a> For More Information
              </p>

            </div>
          </div>
        </div>
      </>
    )
  } else if (paymentSuccess == 'fail') {
    return (
      <>
        <div className='w-full md:w-1/3 mx-auto'>
          <div className='flex p-5 rounded-lg shadow bg-white'>
            <div>
              <svg
                className='w-6 h-6 fill-current text-red-800'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z' />
              </svg>
            </div>
            <div className='ml-3'>
              <h2 className='font-semibold text-gray-800'>
                Oh Sorry Payment Failed
              </h2>
              <p className='mt-2 text-sm text-gray-600 leading-relaxed'>
                Please Try Again
              </p>
              <p className='mt-2 text-sm text-gray-600 leading-relaxed'>
                <a href='tel:9779967745'> Contact Us</a> For More Information
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
