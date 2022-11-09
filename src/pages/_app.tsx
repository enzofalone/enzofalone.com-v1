import "../styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/navbar_icon.svg"
        />
        <title>Enzo Falone</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
