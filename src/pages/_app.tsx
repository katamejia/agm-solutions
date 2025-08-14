// pages/_app.tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "../styles/landing_page.css"; 
import "../styles/online_curses.css"; 
import "../styles/receptionist_ai.css"; 
import "../styles/not-found.css";
import { appWithTranslation } from 'next-i18next';


 function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mi Aplicación Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp);