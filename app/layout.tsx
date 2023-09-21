import Navbar from './components/Navbar'
import './globals.css'
export const metadata = {
  title: '당근마켓',
  description: '파이어베이스 연습용입니다',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
