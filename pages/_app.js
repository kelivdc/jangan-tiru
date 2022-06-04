import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {   
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </>
  )
}

export default MyApp
