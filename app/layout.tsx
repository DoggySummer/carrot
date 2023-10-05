import Navbar from './components/Navbar'
import './globals.css'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth"


export const metadata = {
  title: '당근마켓',
  description: '파이어베이스 연습용입니다',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let session = await getServerSession(authOptions)
  if (session) {
    console.log(session)
  }
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
