'use client'

import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component, pageProps: { session, ...pageProps }
// }:AppProps) {
//   return (
//     <>
//       ddd
//     </>
//   )
// }

export default function App({
  Component, pageProps: { session, ...pageProps }
}:AppProps) {
  // OAuth 인증후에 인증정보를 session에 적용하기 위해, Provider로 감싸주기
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}