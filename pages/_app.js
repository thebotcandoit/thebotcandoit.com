import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

const GA_ID = 'G-VH8LTHVN9Z'
const IS_SITE_DEMO = process.env.NEXT_PUBLIC_SITE_ENV !== 'production'
const ANALYTICS_ENABLED = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true'

export default function App({ Component, pageProps }) {
  return (
    <>
      {IS_SITE_DEMO && (
        <Head>
          <meta name="robots" content="noindex, nofollow, noarchive" />
          <meta name="googlebot" content="noindex, nofollow, noarchive" />
        </Head>
      )}
      {ANALYTICS_ENABLED && !IS_SITE_DEMO && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  )
}
