import '@/styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import { Rubik, Sora, Lobster, Hind } from '@next/font/google';
import Layout from '../components/Layout';

const rubik = Rubik({
  subsets: ['latin'],
 
})

const sora = Sora({
  subsets: ['latin'],
})

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400'
})

const hind = Hind({
  subsets: ['latin'],
  weight: '400'
})


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
        <Layout>
          <main className={`${lobster} ${sora} ${rubik}`}>
            {/* <HubspotProvider> */}
              <Component {...pageProps} />
            {/* </HubspotProvider> */}
            <style jsx global>
              {`
                :root {
                  --lobster-font: ${lobster.style.fontFamily};
                  --sora-font: ${sora.style.fontFamily};
                  --rubik-font: ${rubik.style.fontFamily};
                  --hind-font: ${hind.style.fontFamily};
                }
              `}
            </style>
          </main>
        </Layout>
      </AnimatePresence>
  ) 
  // <Component {...pageProps} />
}
