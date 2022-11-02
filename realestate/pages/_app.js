import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

import LayOut from "../component/Layout"

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
    </Head>
    <ChakraProvider>
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
    </ChakraProvider>
    </>
  )
}
export default MyApp
