import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

const mode7Font = localFont({ src: '../../public/MODE7GX3.ttf', variable: "--mode7" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mode7Font.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
