import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

import LayOut from "../component/Layout"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />

}

export default MyApp
