import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CompSoc — University of Surrey',
  description: "The official Computer Science departmental society for the University of Surrey and the University of Surrey Students' Union.",
  icons: {
    icon: '/favicon-16x16.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
