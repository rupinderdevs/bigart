import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'

export default function Checkout () {
  const router = useRouter()


  let oid = Math.floor(Math.random() + Date.now())
  let data = Object.entries(router.query)
  const onScriptLoad = async () => {
    let amount = '1'
    let email = router.query.email
    const data = {
      amount,
      oid,
      email
    }

    //get transaction token
    let getToken = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_HOST}/api/pretransaction`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
    let txntokenRes = await getToken.json()
    let txntoken = txntokenRes.txnToken

    var config = {
      root: '',
      flow: 'DEFAULT',
      data: {
        orderId: oid /* update order id */,
        token: txntoken /* update token value */,
        tokenType: 'TXN_TOKEN',
        amount: amount /* update amount */
      },
      handler: {
        transactionStatus:function(data){
          console.log("payment status ", data);  
        } ,
        notifyMerchant: function (eventName, data) {
          console.log('notifyMerchant handler function called')
          console.log('eventName => ', eventName)
          console.log('data => ', data)
        }
      }
    }

    // initialze configuration using init method
    window.Paytm.CheckoutJS.init(config)
      .then(function onSuccess () {
        console.log('init')
        // after successfully updating configuration, invoke JS Checkout
        window.Paytm.CheckoutJS.invoke()
      })
      .catch(function onError (error) {
        console.log('error => ', error)
      })
  }
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0'
        />
      </Head>
      <Script
        type='application/javascript'
        crossorigin='anonymous'
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
      />

      <div className='py-10 px-48'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Detail
                </th>
                <th scope='col' className='px-6 py-3'>
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, key) => (
                <tr
                  key={key}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                  >
                    {value[0]}
                  </th>
                  <td className='px-6 py-4'>{value[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={onScriptLoad}
          className='inline-block align-middle m-auto table text-white text-center bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 my-10'
        >
          Checkout Payment
        </button>
      </div>
    </>
  )
}
