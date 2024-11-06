import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Rodrigo S. · Frontend Developer and Computer Science Student',
  description: 'Rodrigo Santos is a Computer Science Student by day and a ' +
    'Frontend Developer by night.',
  keywords: [
    'Rodrigo',
    'Santos',
    'UX',
    'UI',
    'userexperience',
    'webdesign',
    'webdeveloper',
    'design',
    'codedesign',
    'code',
    'hashtag',
    'development',
    'website',
    'websitedevelopment',
    'webservices',
    'art direction',
    'strategy',
    'web',
    'murals',
    'frontend',
    'developer'
  ],
}

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased 
      bg-primary text-secondary flex flex-col md:h-screen`}
      suppressHydrationWarning
    >
    <main className={'overflow-hidden flex-grow md:flex'}>
      {children}
      <Analytics />
    </main>
    </body>
    </html>
  )
}
