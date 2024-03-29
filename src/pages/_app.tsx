import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/navbar_icon.svg"
        />
        <title>Enzo Falone</title>
        <meta name="description" content="Enzo Falone's Portfolio Website" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;