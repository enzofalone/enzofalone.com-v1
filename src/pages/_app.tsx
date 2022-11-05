import "../styles/globals.css";
import { ChakraProvider, CSSReset } from '@chakra-ui/react'


import theme from '../theme'
import { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Enzo Falone</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
