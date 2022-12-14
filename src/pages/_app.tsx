import '../styles/global.css'
import { AppProps } from 'next/app'
//import { ChakraProvider } from "@chakra-ui/react"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  /*
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
  */
}