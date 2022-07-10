import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../store'

function MyApp ({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Big Art </title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <div>
          <Navbar />
          <div>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </Provider>
    </>
  )
}

export default MyApp
